import React, {Component} from 'react';


class EditTrail extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.trail.name,    
            review: props.trail.review
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.editTrail(this.state);
    }
    render(){
        console.log(this.state);
    return (
      <div>
       
        <form onSubmit={this.handleSubmit}> 
        
          <label>
            Edit Trail Name :
            <input onChange={this.handleChange} type="text" name="name"/>
          </label>
        <label>
            Edit Review :
            <input onChange={this.handleChange} type="text" name="review"/>
        </label>
        <input type="submit"/>
        </form>
      </div>
  
      )
    }
}
  export default EditTrail;

