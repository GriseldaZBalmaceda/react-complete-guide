import React from 'react'

const UserInput = (props) => {
return (
    <div>
<input onChange={props.change} value={props.value}></input>
    </div>
)
}

export default UserInput