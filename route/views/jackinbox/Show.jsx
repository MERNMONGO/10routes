import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>JackinBox Food</h1>
            <p>The <strong>{props.jackinbox.name}</strong> {props.jackinbox.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.jackinbox.number}</p>


           
            
        

            

            <a href="/jackinbox">Back</a>
        </div>
    )
}

export default Show;