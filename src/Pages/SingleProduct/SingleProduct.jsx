import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, addToWhishList } from "../../Actions/Action";
import "./SingleProduct.scss";

function SingleProduct() {
  const params = useParams();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [wActive, setwActive] = useState(false);
  const [cActive, setcActive] = useState(false);

  useEffect(() => {
    async function getData() {
      const oneProduct = await fetch(
        `https://cwmstorebackend.herokuapp.com/products/${params.id}`
      );
      const singleProductData = await oneProduct.json();
      setData(singleProductData);
    }

    getData();
  }, []);

  return (
    <div className="single-product">
      {data.map((product) => {
        return (
          <>
            <div className="sp-left">
              <img
                style={{ width: "300px" }}
                src={product.imgUrl}
                alt="product"
              />
            </div>
            <div className="sp-right">
              <h3>{product.category}</h3>
              <h1>{product.name}</h1>
              <p style={{ opacity: "0.9" }}>{product.desc}</p>
              <h4>${product.price}</h4>
              <button
                onClick={() => {
                  if (!cActive) {
                    dispatch(
                      addToCart({
                        category: product.category,
                        name: product.name,
                        price: product.price,
                        image: product.imgUrl,
                        id: product._id,
                        quantity: product.quantity,
                        total: product.total,
                      })
                    );
                  } else {
                    alert("The Item Has Already Been Added To Cart!");
                  }
                  setcActive(true);
                }}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon="shopping-cart"
                  color={cActive ? "purple" : "white"}
                  size="lg"
                />
                Add To Cart
              </button>
              <button
                onClick={() => {
                  if (!wActive) {
                    dispatch(
                      addToWhishList({
                        category: product.category,
                        name: product.name,
                        price: product.price,
                        image: product.imgUrl,
                        id: product._id,
                        quantity: product.quantity,
                        total: product.total,
                      })
                    );
                  } else {
                    alert("The Item Has Already Been Added To Whishlist");
                  }
                  setwActive(true);
                }}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon="heart"
                  color={wActive ? "red" : "black"}
                  size="lg"
                />
                Add To Whishlist
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SingleProduct;
