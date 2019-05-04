import React from 'react';
import TodoItem from './TodoList';
import Header from './Header';
import todosData from './todosData'

class App extends React.Component{
  constructor () {
    super()
    this.state = {
      todos : todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }


  render () {
    const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>)

    return (
      <div>
        <Header />
        <div className="todo-list">
          {todoComponents}
        </div>
      </div>
    )
  }
}


export default App;
