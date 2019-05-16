import React, { Component } from 'react'; 
import CreateTrailForm from '../CreateTrail/CreateTrailForm';
import Trails from '../TrailList/TrailList';
import MapContainer from './mapsContainer/MapContainer';
import EditTrail from '../CreateTrail/EditTrail/EditTrail'



class TrailContainer extends Component {
    constructor(){
        super();
        this.state = {
            trails: [], // looking for all the trails available 
            trailToEdit: {
                id: null,
              
            }
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
openEdit = (trail) => {
    console.log(trail);
    this.setState({
        editFormOpen: true,
        trailToEdit: trail
    })
}
editTrail = async (trail, id) =>{    
    console.log(id);
    console.log(">>>>>>>>>>>>");
    console.log(trail);
    const editResponse = await fetch('http://localhost:9000/api/v1/trails/' + this.state.trailToEdit._id, {
        method: "PUT",
        body: JSON.stringify(trail),
        headers: {
            'Content-Type': 'application/json'
        }
    })
   const parsedResponse = await editResponse.json();
//    console.log(editedTrail);
    if(parsedResponse.status === 200){
        this.setState({
            trails: this.state.trails.map((trail)=>{
                if(this.state.trailToEdit._id === id){
                    return editResponse
                }
               
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
                { this.state.editFormOpen ? <EditTrail trail={this.state.trailToEdit} editTrail={this.editTrail}/> : null }
                
               
                <Trails trails={this.state.trails} deleteTrail={this.deleteTrail} editTrail={this.editTrail} openEdit={this.openEdit}/>
               
            </div>
        )
    }
}

export default TrailContainer;