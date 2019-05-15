import Data from './data.js';
import Template from './template.js';

class BitcoinChangesPercent {

    constructor() {
        this.listBitcoinDataChangesPercent();
        this.bitcoinElement = document.querySelector(".changes");
    }

    async listBitcoinDataChangesPercent() {

        let removeElements = document.querySelectorAll(".changes-item");
        removeElements.forEach(element => element.parentNode.removeChild(element));

        let bitCoinData = await Data.getBitcoinData();
        

        this.btnPercent = document.querySelector(".btn-percent");
        this.btnPrice = document.querySelector(".btn-price");

        this.btnPercent.addEventListener("click", () => {

            this.btnPrice.style.backgroundColor = "#cacaca";

            this.btnPercent.style.backgroundColor = "#6f81ce";

            let removeElements = document.querySelectorAll(".changes-item");
            removeElements.forEach(element => element.parentNode.removeChild(element));

            for (let pct of Object.keys(bitCoinData.changes.percent)) {
                console.log("I'm looping percentages!");

                let data = bitCoinData.changes.percent[pct];
                let listElement = Template.toDom(`<div class="changes-item square"><h4><span>${pct}</span></h4> <p id="${pct}">${data}</p>%</div>`);

                this.bitcoinElement.appendChild(listElement);
            }
        });

        for (let pct of Object.keys(bitCoinData.changes.percent)) {

            let data = bitCoinData.changes.percent[pct];
            let listElement = Template.toDom(`<div class="changes-item square"><h4><span>${pct}</span></h4> <p id="${pct}">${data}</p>%</div>`);

            this.bitcoinElement.appendChild(listElement);
        }
    }
}
export default BitcoinChangesPercent;