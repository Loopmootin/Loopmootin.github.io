import Data from './data.js';
import Template from './template.js';

class BitcoinPrice{ 
  constructor() { 
    this.listBitcoinDataPrice();
    this.bitcoinElement = document.querySelector(".prices");
  }


  async listBitcoinDataPrice() { 
    let removeElements = document.querySelectorAll(".price-item");
    removeElements.forEach(element => element.parentNode.removeChild(element));

    let bitCoinData = await Data.getBitcoinData();

    for(let i = 0; i < 5; i++) {
      let pri = Object.keys(bitCoinData)[i];
      let data = bitCoinData[pri];

      let listElement = Template.toDom(`<div class="price-item square"><h4><span>${pri}</span> price</h4> <p id="${pri}">${data}</p>$</div>`);
      this.bitcoinElement.appendChild(listElement);

      let elementId = document.querySelector("#" + pri).id;

      if (elementId == pri) {
        console.log("Id and JSON value match!");
      } else {
        console.log("We're not the same!");
      }
    };
  }
}

export default BitcoinPrice;