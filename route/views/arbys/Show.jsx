import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Arby Food</h1>
            <p>The <strong>{props.arbys.name}</strong> {props.arbys.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.arbys.number}</p>


           
            
        

            

            <a href="/arbys">Back</a>
        </div>
    )
}

export default Show;