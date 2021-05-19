import React,{Component} from 'react';
import ButtonTick from './Button';
import ButtonDelete from './ButtonDelete';
class Todo extends Component{
    render(){
        let {id,desc,isMake} = this.props.todo;
        let {ClickTickOkey,ClickDelete}=this.props;
        let className="alert alert-danger";
        let status='Not done';
        if(isMake)
        {
            className="alert alert-success"
            status='Done';
        }
        return(
            <tr className={className}  role="alert" >
            <th scope="row">{id}</th>
            <td>{desc}</td>
            <td>{status}</td>
            <td>
                <ButtonTick ClickTickOkey={ClickTickOkey} key={id} id={id} />
                <ButtonDelete ClickDelete={ClickDelete} key={'delete'+id} id={id} />
                </td>
          </tr>
        );
    }
}
export default Todo;