import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'nathan/todos/'


class TodoService {

  async getTodos() {
    let res = await api.get(url);
    //TODO Handle this response from the server
    ProxyState.todos = res.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.completed == true) {
      todo.completed = false
    } else { todo.completed = true; }
    let res = await api.put(url + todoId, todo);

    this.getTodos
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = await api.delete(url + todoId)
    // this.getTodos()
    ProxyState.todos = ProxyState.todos.filter(todo => todo.id != todoId)


  }
  async todocount() {
    let todo = await ProxyState.todos
    let total = 0
    todo.forEach(t => {
      if (t.completed == true) { total++ }
    })
    let x = ProxyState.todos.forEach(t => t.count = total)
  }
}

const todoService = new TodoService();
export default todoService;