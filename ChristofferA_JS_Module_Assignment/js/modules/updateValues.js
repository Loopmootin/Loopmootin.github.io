import Data from './data.js';

class UpdateValues {

    constructor() {
        this.updatePriceValue();
        this.element = document.querySelector("div.prices");
    }


    async updatePriceValue() {

        let bitCoinData = await Data.getBitcoinData();

        for(let item of this.element.childNodes) {
            let myId = item.children[1].id;
            let data = bitCoinData[myId];
            
            item.children[1].innerHTML = data;
        }
        
    }
}
export default UpdateValues;