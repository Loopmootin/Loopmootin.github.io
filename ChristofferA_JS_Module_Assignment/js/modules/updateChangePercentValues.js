import Data from './data.js';

class UpdateChangePercentValues {

    constructor() {
        this.updateChangePercentValues();
        this.element = document.querySelector("div.changes");
    }


    async updateChangePercentValues() {

        let bitCoinData = await Data.getBitcoinData();

        for (let item of this.element.childNodes) {
            let myId = item.children[1].id;
            let data = bitCoinData.changes.percent[myId];

            item.children[1].innerHTML = data;
        }

    }
}
export default UpdateChangePercentValues;