import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateWithHooks.css"

export default function Update(props) {
  const [pizzaID, setId] = useState(0);
  const [pizzaName, setName] = useState("");
  const [pizzaQuantity, setQuantity] = useState(0);
  const [pizzaPrice, setPrice] = useState(0);

  useEffect(() => {
    setId(localStorage.getItem("pizzaID"));
    setName(localStorage.getItem("pizzaName"));
    setQuantity(localStorage.getItem("pizzaQuantity"));
    setPrice(localStorage.getItem("pizzaPrice"));
  }, []);

  const updateData = () => {
    axios.put("https://localhost:5001/api/Pizza/" + { pizzaID }, {
      pizzaName,
      pizzaQuantity,
      pizzaPrice,
    }).then(() => {
      props.history.push('/read');
  });
  };
  return (
    <fieldset>
      <legend>Add Pizza Details</legend>
      <label>Pizza Id</label>
      <input
        type="number"
        placeholder="Id"
        onChange={(e) => setId(e.target.value)}
      /><br/><br/>
      <label>Pizza Name</label>
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
      <input id="button" value="Add" onClick={updateData} type="submit"></input>
    </fieldset>
  );
}