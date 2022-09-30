import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeCartItem,
} from "../../Actions/Action";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

function Cart() {
  const CartPageLoaded = async () => {
    try {
      const res = await fetch("https://cwmstorebackend.herokuapp.com/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      await res.json();
    } catch (error) {
      Navigate("/login");
    }
  };
  useEffect(() => {
    CartPageLoaded();
  }, []);

  const state = useSelector((state) => state.AddToCart);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function NetTotal() {
    const Total = state.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return Total;
  }

  function totalCartNumber() {
    const CartTotal = state.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    return CartTotal;
  }

  const totalAmount = NetTotal() + 5;
  const totalItemsPurchased = totalCartNumber();

  const makePayment = (token) => {
    const body = {
      totalAmount,
      totalItemsPurchased,
      token,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("https://cwmstorebackend.herokuapp.com/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then(() => {
        Navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return state.length == 0 ? (
    <div className="emptyCart">
      <h3>
        You Have <span>0</span> Items In The Cart
      </h3>
      <h3>Please Go back to add more items</h3>
      <button onClick={() => Navigate("/")}>Go Back</button>
    </div>
  ) : (
    <div className="cart">
      <h3>Your Item&apos;s In The Cart</h3>
      <div className="cart-flex">
        <div className="cart-items-flex">
          {state.map((citems) => {
            return (
              <div key={citems.name} className="cart-item-row">
                <img src={citems.image} alt="product image" />
                <span className="cart-item-name">{citems.name}</span>
                <span className="cart-item-price">{citems.price}</span>
                {/* <span className='cart-item-category'>{citems.category}</span> */}
                <div className="quantity-flex">
                  <button
                    onClick={() => {
                      dispatch(incrementQuantity(citems.id));
                      dispatch(totalAmount(citems.id));
                    }}
                  >
                    <FontAwesomeIcon icon="plus" />
                  </button>
                  <span>{citems.quantity}</span>
                  <button
                    onClick={() => {
                      dispatch(decrementQuantity(citems.id));
                      dispatch(totalAmount(citems.id));
                    }}
                  >
                    <FontAwesomeIcon icon="minus" />
                  </button>
                </div>
                <span>{citems.total}</span>
                <button onClick={() => dispatch(removeCartItem(citems.id))}>
                  <FontAwesomeIcon icon="remove" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="order-summary">
          <div className="order-flex">
            <h4>Order Summary</h4>
            <div className="flex-item">
              <span>Sub Total</span>
              <span>{NetTotal()}</span>
            </div>
            <div className="flex-item">
              <span>Tax</span>
              <span>5</span>
            </div>
            <div className="flex-item">
              <span>Net Total</span>
              <span>{NetTotal() == 0 ? NetTotal() : NetTotal() + 5}</span>
            </div>
            <StripeCheckout
              stripeKey="pk_test_51JBjbICMhsQwgAJ0LdCKWBh2rb5yA0JkGkDouRjTbs9JFMo0ROKWllIWgVZ9Vlds3GzWmjD5W1mZqwKIJdtmWQEV00caz3pu2m"
              token={makePayment}
              name="My Store"
              amount={totalAmount * 100}
            >
              <button className="btn btn-primary">Pay {totalAmount} $</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
