import React, { Component } from 'react';

class CreateTrailForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            review: '',
            location: {
                lat: '',
                long: ''
            }


        }
    }
    handleChange = (e) =>{
        this.setState({
            location: { ...this.state.location, 
        [e.target.name]:  e.target.value}
        })
    }
    render(){
        return(
            <form onSubmit = {this.props.addTrail.bind(null, this.state.location)}>
            <h3>Trail Reviews</h3>
            <label>
                Trail Name:
                <input onChange={this.handleChange} type="text" name="name"/>
            </label>

            <label>
                Review:
                <input onChange={this.handleChange} type="text" name="review"/>
             </label>
             <label>
                 Location:
                 <input onChange={this.handleChange} placeholder="lat" type="text" name= "lat"/>
                 <input onChange={this.handleChange} placeholder="log" type="text" name= "long"/>
             </label>
                <input type="submit"/>
            </form>
        ) 
    }

}

export default CreateTrailForm; 