import React, { Component } from 'react'; 
import CreateTrailForm from '../CreateTrail/CreateTrailForm';
import Trails from '../TrailList/TrailList';

class TrailContainer extends Component {
    constructor(){
        super();
        this.state = {
            trails: [], // looking for all the trails available 
        }
    }

componentDidMount  (){
    this.showTrails();

}

showTrails = async () => {
    try {
        const response = await fetch('http://localhost:9000/api/v1/trails/')

        const trailsParsed = await response.json();
        this.setState({
            trails: trailsParsed.data
        })
    }catch(err){
        console.log(err)
        
    }

}
addTrail = async (trail, e)=> {
e.preventDefault();
    
    const newTrail = await fetch('http://localhost:9000/api/v1/trails/',{
        method: "POST",
        body: JSON.stringify(trail),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const parsedResponse = await newTrail.json();
        console.log(newTrail);
        if(newTrail.status === 200){
            this.setState({
                trails: [...this.state.trails, parsedResponse.data]
            })
        }
    }



    render(){

        return(
            <div>
                <CreateTrailForm addTrail={this.addTrail}/>
                <Trails trails={this.state.trails}/>
               
            </div>
        )
    }
}

export default TrailContainer;