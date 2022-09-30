import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./AdminAddProducts.scss";

function AdminAddProducts() {
  const Navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const params = useParams();
  console.log(params);
  const AdminAddProductsPageLoaded = () => {
    if (params.password != "adminBoard") {
      Navigate("/adminlogin");
    } else {
      console.log("You Have Been Successfully Logged In");
    }
  };
  useEffect(() => {
    AdminAddProductsPageLoaded();
  }, []);

  const sendingProductDataToServer = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://cwmstorebackend.herokuapp.com/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          name,
          image,
          price,
          desc,
        }),
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (data) {
        alert("The Product Has Been Saved!");
        setCategory("");
        setName("");
        setImageUrl("");
        setPrice("");
        setDesc("");
      } else {
        alert("data not send");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="right"
      style={{ paddingTop: "100px", paddingBottom: "30px" }}
    >
      <form>
        <div style={{ margin: "20px 0px" }}>
          <select name="Category" onChange={(e) => setCategory(e.target.value)}>
            <option value="Laptops">Laptops</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Shoes">Shoes</option>
            <option value="Cloths">Cloths</option>
            <option value="TV's And Computers">TV&apos;s And Computers</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Cars">Cars</option>
            <option value="Sports">Sports</option>
            <option value="Cameras">Cameras</option>
          </select>
        </div>
        <input
          type="text"
          className="field"
          placeholder="Product Title..."
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="field"
          placeholder="Product Image(Url Preference)..."
          value={image}
          name="image"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price..."
          className="field"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          style={{ resize: "vertical" }}
          placeholder="Product Description..."
          className="field"
          name="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          onClick={sendingProductDataToServer}
          type="submit"
          className="btnbtn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminAddProducts;
