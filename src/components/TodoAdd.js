import React,{Component} from 'react';


class TodoAdd extends Component{
    state={
        newTodo:""
    }
    onChangeNewTodo=(e)=>{

        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmitTodoAdd=(e)=>{
        e.preventDefault();
        const {SubmitTodoAdd} =this.props;
        let newTodo={
            id:Math.floor(Math.random() * 1000),
            desc:this.state.newTodo,
            isMake:false
        };
        console.log(newTodo);
        SubmitTodoAdd(newTodo);
    }
    render(){
        return(
            <form onSubmit={this.onSubmitTodoAdd.bind(this)}>
     <div className="input-group mb-3">
        <input type="text" className="form-control" name="newTodo" onChange={this.onChangeNewTodo.bind(this)} id="newTodo" value={this.state.newTodo} placeholder="Enter Todo" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button type="submit"  className="input-group-text btn btn-outline-success rounded-right" id="basic-addon2">Add</button>
        </div>
      </div></form>);
    }
}
export default TodoAdd;