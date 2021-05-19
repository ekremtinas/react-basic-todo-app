import React,{Component} from 'react';
import Todo from './Todo';
class Todos extends Component{




  onChangeStatus=(event)=>{
    let {onChangeStatusApp}=this.props;
    onChangeStatusApp(event);
  }
    render(){
        let {todos,ClickTickOkey,ClickDelete} = this.props;
        
       

        return(<table className="table">
        <thead className="bg-dark text-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Desc</th>
            <th scope="col">Status</th>
            <th scope="col">Process</th>
          </tr>
        </thead>
        <tbody>
          <tr><td></td><td></td><td>
            <select className="form-control" onChange={this.onChangeStatus.bind(this)} >
              <option value="choose">Choose</option>
              <option value="false">Not done</option>
              <option value="true">Done</option>
              </select></td><td></td></tr>
            {
                todos.map(todo => { return( <Todo ClickTickOkey={ClickTickOkey} ClickDelete={ClickDelete} key={todo.id} todo={todo} />) })
            }
        
         
        </tbody>
      </table>);
    }
}

export default Todos;