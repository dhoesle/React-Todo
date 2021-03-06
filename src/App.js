import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  {
    task: 'Click a task to cross it off the list',
    id: 1528817077286,
    completed: false
  },
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleTodo = todoId => {
    console.log("App -> todoId", todoId)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    }) 
  }

  clearPurchased = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    console.log('rendering....')
    return (
      <div className='App'>
        <div className='Header'>
          <h2>Welcome to the Todo App!</h2>
        </div>
        <TodoForm 
          addTodo={this.addTodo}
        />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
