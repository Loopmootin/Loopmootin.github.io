class Template { 

  static toDom(strHTML) {
      let temp = document.createElement('template');
      temp.innerHTML = strHTML;
      return temp.content;
    }

}

export default Template;