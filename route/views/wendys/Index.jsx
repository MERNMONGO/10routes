
import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.wendys.map((fruit, index) => 
                    <li key={index}>
                        <a href={`/wendys/${index}`}><strong>{fruit.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/wendys/new">Add...</a>
        </div>
    )
}

export default Index