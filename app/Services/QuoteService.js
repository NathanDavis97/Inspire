import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and update the State
class QuoteService {

  async getQuote() {
    let res = await api.get('quotes')
    ProxyState.quotes = res.data.quote
    console.log(res.data.quote.body);
    console.log(res.data.quote.author);
    document.getElementById("quote").innerHTML = `<div class="card opac">
                        <div class="card-body" id="carBody">
                            <h4 class="card-title" id="quoteBody">${res.data.quote.body}</h4>
                            <p class="card-text" id="quoteAuthor">${res.data.quote.author}</p>
                        </div>
                    </div>`

  }


}

const quoteService = new QuoteService();
export default quoteService;