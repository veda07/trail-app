import React from 'react';

const Trails = (props) => {
    const trailList = props.trails.map((trail)=>{
        return(
            <li key={trail._id}>
            <span>{trail.name}</span><br/>
            <span>{trail.review}</span><br/>
            <button onClick={(e)=>{
                e.preventDefault();
                props.deleteTrail(trail._id);
            }}>Delete</button> 
            <button onClick={(e)=>{
                e.preventDefault();
                props.openEdit(trail);
            }}>edit</button>
            
            </li>
        )
        
    })
return(
    <ul>
        {trailList}
    </ul>
    )
}

export default Trails;