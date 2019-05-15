import React, { Component } from 'react'; 
import CreateTrailForm from '../CreateTrail/CreateTrailForm';
import Trails from '../TrailList/TrailList';
import MapContainer from './mapsContainer/MapContainer';

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
        console.log(parsedResponse);
        if(newTrail.status === 200){
            this.setState({
                trails: [...this.state.trails, parsedResponse.data]
            })
        }
    }

editTrail = async (id, trail) =>{    
    const response = await fetch('http://localhost:9000/api/v1/trails/', {
        method: "PUT",
        body: JSON.stringify(trail),
        headers: {
            'Content-Type': 'application/json'
        }
    })
   const editedTrail = await response.json();
   console.log(editedTrail);
    if(response === 200){
        this.setState({
            trails: this.state.trails.map((trail)=>{
                if(trail._id === id){
                    return editedTrail
                }
                return
            })
        })
    }
       
}

deleteTrail = async (id) => {
    console.log('trail' + id)

    try {

    const deleteTrail = await fetch(`http://localhost:9000/api/v1/trails/` + id, {
        method: 'DELETE',
    });
   
    this.setState({
        trails: this.state.trails.filter((trail, i) => trail._id !== id)}
        
        )   
     } catch(err) {
      console.log(err, ' error')
    }
}


    render(){

        return(
            <div>
                <div className="mapDiv">
                <MapContainer trails={this.state.trails}/>
                </div><br/>
                <div className="formDiv">
                <CreateTrailForm addTrail={this.addTrail}/>
                </div>
                <Trails trails={this.state.trails} deleteTrail={this.deleteTrail} editTrail={this.editTrail}/>
               
            </div>
        )
    }
}

export default TrailContainer;