import Data from './data.js';
import Template from './template.js';

class BitcoinChangesPrice {

    constructor() {
        this.listBitcoinDataChangesPrice();
        this.bitcoinElement = document.querySelector(".changes");
    }

    async listBitcoinDataChangesPrice() {

        let removeElements = document.querySelectorAll(".changes-item");
        removeElements.forEach(element => element.parentNode.removeChild(element));

        let bitCoinData = await Data.getBitcoinData();

        this.btnPrice = document.querySelector(".btn-price");
        this.btnPercent = document.querySelector(".btn-percent");

        this.btnPrice.style.backgroundColor = "#6f81ce";

        this.btnPrice.addEventListener("click", () => {

            this.btnPrice.style.backgroundColor = "#6f81ce";

            this.btnPercent.style.backgroundColor = "#cacaca";

            let removeElements = document.querySelectorAll(".changes-item");
            removeElements.forEach(element => element.parentNode.removeChild(element));

            for (let pri of Object.keys(bitCoinData.changes.price)) {
                console.log("I'm looping prices");

                let data = bitCoinData.changes.price[pri];
                let listElement = Template.toDom(`<div class="changes-item square"><h4><span>${pri}</span></h4> <p id="${pri}">${data}</p>$</div>`);

                this.bitcoinElement.appendChild(listElement);
            }
        });

        for (let pri of Object.keys(bitCoinData.changes.price)) {

            let data = bitCoinData.changes.price[pri];
            let listElement = Template.toDom(`<div class="changes-item square"><h4><span>${pri}</span></h4> <p id="${pri}">${data}</p>$</div>`);

            this.bitcoinElement.appendChild(listElement);
        }
    }
}
export default BitcoinChangesPrice;