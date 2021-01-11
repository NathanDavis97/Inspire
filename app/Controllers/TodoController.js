import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ''
  let count = 0
  ProxyState.todos.forEach(t => {
    if (t.completed == true) {
      count++
    }

    template += t.Template
  })
  document.getElementById("todo").innerHTML = template
  document.getElementById("todoTitle").innerHTML = `<h4 class="card-title" > Todo List</h4>
                                    <small>
                                        ${count}/ ${ProxyState.todos.length}
                                    </small>`

}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos();
    _drawTodos()
    this.todocount()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo() {
    window.event.preventDefault();
    var form = window.event.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      // @ts-ignore
      description: form.todoName.value,
      checked: false,
      user: "nathan",
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
  todocount() {
    todoService.todocount()
  }
}