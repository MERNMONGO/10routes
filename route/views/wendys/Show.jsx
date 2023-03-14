import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Wendys Food</h1>
            <p>The <strong>{props.wendys.name}</strong> {props.wendys.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.wendys.number}</p>


           
            
        

            

            <a href="/wendys">Back</a>
        </div>
    )
}

export default Show;