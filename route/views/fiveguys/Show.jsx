import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Five Guys Food</h1>
            <p>The <strong>{props.fiveguys.name}</strong> {props.fiveguys.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.fiveguys.number}</p>


           
            
        

            

            <a href="/fiveguys">Back</a>
        </div>
    )
}

export default Show;