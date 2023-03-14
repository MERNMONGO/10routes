import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Shake Shack Food</h1>
            <p>The <strong>{props.shakeshack.name}</strong> {props.shakeshack.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.shakeshack.number}</p>


           
            
        

            

            <a href="/shakeshack">Back</a>
        </div>
    )
}

export default Show;