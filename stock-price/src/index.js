import ReactDOM from "react-dom";
import App from "./classComponent/StockPrice";

var stockInfo = [
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI"
]

ReactDOM.render((
    <div>
        {stockInfo.map((stock) => {
            return <App apiUrl={stock}></App>
        })}
    </div>
), document.getElementById("root"))