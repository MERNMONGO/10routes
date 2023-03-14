
import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Arbys List</h1>
            <ul>
                {props.arbys.map((fruit, index) => 
                    <li key={index}>
                        <a href={`/arbys/${index}`}><strong>{fruit.name}</strong></a>
                    </li>
                )}
            </ul>
           
        </div>
    )
}

export default Index