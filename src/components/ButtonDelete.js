import React,{Component} from 'react';

class ButtonDelete extends Component{

    onClickDelete = (id,e)=>{
        const {ClickDelete }=this.props;
       // console.log(id)
        ClickDelete(id);
    }
    render(){
        let { id }= this.props;
        return(<button key={id} onClick={this.onClickDelete.bind(this,id)} className="btn btn-outline-info m-lg-2">Delete</button>);
    }
}
export default ButtonDelete;