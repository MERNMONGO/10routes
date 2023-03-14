import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>BBQ Food</h1>
            <p>The <strong>{props.bbq.name}</strong> {props.bbq.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.bbq.number}</p>


           
            
        

            

            <a href="/bbq">Back</a>
        </div>
    )
}

export default Show;