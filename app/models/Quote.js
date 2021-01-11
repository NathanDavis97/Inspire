export default class Quote {
  constructor(data) {
    this.author = data.quote.author
    this.quote = data.quote.body
  }



  get Template() {
    return `<div class="card opac">
                        <div class="card-body">
                            <h4 class="card-title" id="quoteBody">${this.quote}</h4>
                            <p class="card-text " id="quoteAuthor">${this.author}</p>
                        </div>
                    </div>`
  }
}