import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Quiznos Food</h1>
            <p>The <strong>{props.quiznos.name}</strong> {props.quiznos.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.quiznos.number}</p>


           
            
        

            

            <a href="/quiznos">Back</a>
        </div>
    )
}

export default Show;