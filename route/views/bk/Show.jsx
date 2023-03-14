import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>BK Food</h1>
            <p>The <strong>{props.bk.name}</strong> {props.bk.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.bk.number}</p>


           
            
        

            

            <a href="/bk">Back</a>
        </div>
    )
}

export default Show;