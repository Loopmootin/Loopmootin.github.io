import Data from './data.js';

class UpdateChangePriceValues {

    constructor() {
        this.updateChangePriceValues();
        this.element = document.querySelector("div.changes");
    }


    async updateChangePriceValues() {

        let bitCoinData = await Data.getBitcoinData();

        for (let item of this.element.childNodes) {
            let myId = item.children[1].id;
            let data = bitCoinData.changes.price[myId];

            item.children[1].innerHTML = data;
        }

    }
}
export default UpdateChangePriceValues;