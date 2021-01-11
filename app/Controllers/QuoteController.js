import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import quoteService from "../Services/QuoteService.js";

//TODO Create methods for constructor, and rendering the quote to the page
function _drawQuote() {
  let template = ""
  ProxyState.quotes.forEach(q => template = q.Template)
  document.getElementById("quote").innerHTML = template
}


export default class QuoteController {
  constructor() {
    // ProxyState.on("quote", drawQuote)
    this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.log(error);
    }
  }

}

