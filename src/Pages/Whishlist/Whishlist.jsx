import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WhishlistItems from "../../Components/WhishlistItems/WhishlistItems";
import "./Whishlist.scss";

function Whishlist() {
  const whishlistPageLoaded = async () => {
    try {
      const res = await fetch(
        "https://cwmstorebackend.herokuapp.com/whishlist",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      await res.json();
    } catch (error) {
      Navigate("/login");
    }
  };
  useEffect(() => {
    whishlistPageLoaded();
  }, []);

  const state = useSelector((state) => state.AddToWhishList);
  const Navigate = useNavigate();

  return state.length == 0 ? (
    <div className="emptyCart">
      <h3>
        You Have <span>0</span> Items In The Whishlist
      </h3>
      <h3>Please Go back to add more items</h3>
      <button onClick={() => Navigate("/")}>Go Back</button>
    </div>
  ) : (
    <div className="whishlist">
      <h3>Your Item&apos;s In The whishlist</h3>
      <div className="whishlist-flex">
        <div className="whishlist-items-flex">
          {state.map((citems) => {
            return (
              <div key={citems.id}>
                <WhishlistItems
                  category={citems.category}
                  name={citems.name}
                  price={citems.price}
                  image={citems.image}
                  quantity={citems.quantity}
                  total={citems.total}
                  id={citems.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Whishlist;
