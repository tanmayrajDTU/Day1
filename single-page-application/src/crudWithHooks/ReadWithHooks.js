import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export default function Read(props) {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    let {pizzaID ,pizzaName , pizzaQuantity,pizzaPrice} = data;
    localStorage.setItem("pizzaID", pizzaID);
    localStorage.setItem("pizzaName", pizzaName);
    localStorage.setItem("pizzaQuantity", pizzaQuantity);
    localStorage.setItem("pizzaPrice", pizzaPrice);
  };

  const getData = () => {
    axios.get("https://localhost:5001/api/Pizza/").then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete("https://localhost:5001/api/Pizza/" + { id }).then(() => {
      getData();
    });
  };

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">PizzaID</th>
          <th scope="col">PizzaName</th>
          <th scope="col">PizzaQuantity</th>
          <th scope="col">PizzaPrice</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {APIData.map((data) => {
          return (
            <tr key={data.pizzaID}>
              <th scope="row">{data.pizzaID}</th>
              <td>{data.pizzaName}</td>
              <td>{data.pizzaQuantity}</td>
              <td>{data.pizzaPrice}</td>
              <td>
                <Link to="/update">
                    <button onClick={() => setData(data)}>Update</button>
                </Link>
              </td>
              <td>
                <button onClick={() => onDelete(data.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}