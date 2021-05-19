import React,{Component} from 'react';

class ButtonTick extends Component{

    
onClickTick(id,e)
{
    const {ClickTickOkey}=this.props;
   // console.log(id);
   ClickTickOkey(id);
}
    render(){
        let id=this.props;
        return(<button key={id} onClick={this.onClickTick.bind(this,id)} className="btn btn-outline-dark ">Tick</button>);
    }
}
export default ButtonTick;