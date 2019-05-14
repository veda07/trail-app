import React from 'react';

const Trails = (props) => {
    const trailList = props.trails.map((trail)=>{
        return(
            <li key={trail._id}>
            <span>{trail.name}</span>
            <span>{trail.review}</span>
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