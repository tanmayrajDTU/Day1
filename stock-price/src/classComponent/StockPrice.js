import { Component } from "react";
import Axios from "axios";

export default class StockPrice extends Component {
    constructor() {
        super();
        this.state = {
            stockPrice: {}
        }
    }
    render() {  
        return (
            <div id="holow" style={{margin: "5px", display: "inline-block"}}>
                <div className="center" style={{ width: '450px', margin: '10px', display: 'inline-block' }}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.stockPrice.company}</h5>
                        <div class="alert alert-danger" role="alert">
                            Current Price : {this.state.stockPrice.pricecurrent}
                        </div>
                        <div class="alert alert-secondary" role="alert">
                           Total Price Change :  {this.state.stockPrice.pricechange}
                        </div>
                        <div class="alert alert-success" role="alert">
                            Price Change in Percentage : {this.state.stockPrice.pricepercentchange+"  %"}
                        </div>
                        <div class="alert alert-primary" role="alert">
                            Last time Updated : {this.state.stockPrice.lastupd}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        setInterval(() => {
            Axios.get(this.props.apiUrl).then((response) => {
                this.setState({ stockPrice: response.data.data })
                console.log(this.state.stockPrice)
            });
        }, 2000);
    }

}