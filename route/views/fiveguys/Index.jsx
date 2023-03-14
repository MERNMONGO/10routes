
import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.fiveguys.map((fruit, index) => 
                    <li key={index}>
                        <a href={`/fiveguys/${index}`}><strong>{fruit.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/fiveguys/new">Add...</a>
        </div>
    )
}

export default Index