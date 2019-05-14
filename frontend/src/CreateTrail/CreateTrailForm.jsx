import React, { Component } from 'react';

class CreateTrailForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            lat: '',
            long: '',
            review: ''


        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:  e.target.value
        })
    }
    render(){
        return(
            <form onSubmit = {this.props.addTrail.bind(null, this.state)}>
            <h3>Trail Reviews</h3>
            <label>
                Trail Name:
                <input onChange={this.handleChange} type="text" name="name"/>
            </label>

            <label>
                Review:
                <input onChange={this.handleChange} type="text" name="review"/>
             </label>
                <input type="submit"/>
            </form>
        ) 
    }

}

export default CreateTrailForm; 