import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, addToWhishList } from "../../Actions/Action";
import "./Product.scss";

function Product(props: any) {
  const dispatch = useDispatch();
  const [whishactive, setwhishActive] = useState(false);
  const [cartActive,setCartActive] = useState(false);

  return (
    <div className="product">
      <p>{props.category}</p>
      <NavLink style={{textDecoration:"none"}} to={`/sproduct/${props.id}`}><h3 style={{cursor:"pointer"}}>{props.name}</h3></NavLink>
      <NavLink to={`/sproduct/${props.id}`}><img src={props.imageUrl} alt="product image" style={{cursor:"pointer"}}/></NavLink>
      <div className="flex-items">
        <p className="price">${props.price}</p>
        <div className="whishlist">
          <button
            onClick={() => {
              if(!whishactive){
                dispatch(
                  addToWhishList({
                    category: props.category,
                    name: props.name,
                    price: props.price,
                    image: props.imageUrl,
                    id: props.id,
                    quantity: props.quantity,
                    total: props.total,
                  })
                );
              }
              else{
                alert("You Have Already Added The Item To WhishList")
              }
              setwhishActive(true);
            }}
          >
            <FontAwesomeIcon
              icon="heart"
              color={whishactive ? "red" : "black"}
              size="lg"
            />
            <span
              style={{
                marginLeft: "10px",
                color: "rgb(46, 45, 45)",
                fontSize: "18px",
              }}
            >
             
            </span>
          </button>
        </div>
        <div className="cart">
          <button
            onClick={() =>{
              if(!cartActive){
              dispatch(
                addToCart({
                  category: props.category,
                  name: props.name,
                  price: props.price,
                  image: props.imageUrl,
                  id: props.id,
                  quantity: props.quantity,
                  total: props.total,
                })
              )
            }
            else{
              alert("You Have Already Added The Item To Cart!");
            }
            setCartActive(true);
            }}
          >
            <FontAwesomeIcon icon="shopping-cart" color={cartActive?"purple":"orange"} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);
