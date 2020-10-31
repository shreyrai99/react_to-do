import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import { AddTodo } from './AddTodo';


class App extends Component{

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner time tommy',
        completed: true
      },
      {
        id: 3,
        title: 'I love Tommy',
        completed: false
      }
    ]
  }


  markComplete = (id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //delete todo
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]});
  }

  //add Todo
  addTodo = (title)=>{
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render() {
  
  return (
    <div className="App">
      <div className="container">

      <Header />
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo}/>
      </div>
    </div>
  );
}
}
export default App;
