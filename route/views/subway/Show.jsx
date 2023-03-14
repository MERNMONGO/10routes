import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Subway Food</h1>
            <p>The <strong>{props.subway.name}</strong> {props.subway.withFries ? 'comes with fries' : 'does not come with fries'}</p>
            <p>The meal number is {props.subway.number}</p>


           
            
        

            

            <a href="/subway">Back</a>
        </div>
    )
}

export default Show;