import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Mcdonalds Food</h1>
            <p>The <strong>{props.mcd.name}</strong> {props.mcd.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.mcd.number}</p>


           
            
        

            

            <a href="/mcd">Back</a>
        </div>
    )
}

export default Show;