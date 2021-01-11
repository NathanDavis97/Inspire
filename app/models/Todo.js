export default class Todo {
  constructor(data, count) {
    this.id = data._id
    this.description = data.description
    this.completed = data.completed
    this.count = count
  }



  get Template() {
    return `
    <div class="col-12">
    <input  ${this.completed ? "checked" : ""}  type="checkbox" name="Checkbox" id="${this.id}" onclick="app.todoController.toggleTodoStatus('${this.id}')">${this.description} <i class="fa fa-trash text-danger"
        onclick="app.todoController.removeTodo('${this.id}')"
        aria-hidden="true"></i>
        </div>`
  }


}