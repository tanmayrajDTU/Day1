import React, { useState } from "react";
import axios from "axios";
import "./CreateWithHooks.css";

export default function Create() {
  const [pizzaID, setId] = useState(0);
  const [pizzaName, setName] = useState("");
  const [pizzaQuantity, setQuantity] = useState(0);
  const [pizzaPrice, setPrice] = useState(0);
  const postData = () => {
    axios.post('https://localhost:5001/api/Pizza', {
      pizzaID,
      pizzaName,
      pizzaQuantity,
      pizzaPrice,
    });
  };
  return (
    <fieldset>
      <legend>Add Details</legend>
      <label>Pizza ID</label>
      <input
        type="number"
        placeholder="Id"
        onChange={(e) => setId(e.target.value)}
      /><br/><br/>
      <label> Pizza Name</label>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      <label>Pizza Quantity</label>
      <input
        type="number"
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
      /><br/><br/>
      <label>Pizza Price</label>
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      /><br/><br/>
      <input value="Add" onClick={postData} type="submit"></input>
    </fieldset>
  );
}