import React, { Component } from 'react';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import TodoAdd from './components/TodoAdd';
class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            todos:[
                {
                    id:1,
                    desc:'Learn React',
                    isMake:true
                },
                {
                    id:2,
                    desc:'Learn NodeJs',
                    isMake:false
                },
                {
                    id:3,
                    desc:'Learn Machine Learning',
                    isMake:false
                },
                {
                    id:4,
                    desc:'Learn Neural Network',
                    isMake:false
                }
            ]
            
        };
        
        this.ClickTickOkey=this.ClickTickOkey.bind(this);
    }
    
    ClickTickOkey(event)
    {
        console.log(event);
       let { todos } = this.state;
        todos.forEach(function(todo){
           //console.log(event.id)
           if(event.id===todo.id)
           {
               todo.isMake=true;
           }
       });
       console.log(todos)
       this.setState({
           todos:todos
       });
 
    }
    ClickDelete = (id)=>{
        console.log(id)
        let {todos} = this.state;
        let newTodos = todos.filter(todo=>  todo.id!==id);
        this.setState({
            todos:newTodos
        });
    } 
    SubmitTodoAdd=(newTodo)=>{

        let {todos}=this.state;
        todos.push(newTodo);

        this.setState({
            todos:todos
        });


    }
    
    onChangeStatusApp=async (event)=>{
        
        var {todos}=this.state;
       
        
        let newTodosFilter=[];
        await todos.forEach(function(todoItem){ 
            console.log(todoItem.isMake)
           if(todoItem.isMake.toString() === event.target.value.toString() )
            {
                newTodosFilter.push(todoItem);
            }
            
        
        } );
          console.log(newTodosFilter)
          this.setState({
            todos:newTodosFilter
          });
    }

    render() {
      
        return ( <div className = "container" >

            <Navbar />
            <TodoAdd SubmitTodoAdd={this.SubmitTodoAdd} />
            <Todos onChangeStatusApp={this.onChangeStatusApp}  ClickTickOkey={this.ClickTickOkey} ClickDelete={this.ClickDelete} todos={this.state.todos} />

            </div>
        );
    }
}

export default App;