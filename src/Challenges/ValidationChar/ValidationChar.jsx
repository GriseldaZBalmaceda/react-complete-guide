import React from 'react'

const ValidateCharacter  = (props) => {
    return (
    <div>
        <p>{props.textLength < 5 ? 'text too short' : ''}</p>
    </div>
    )
};

export default ValidateCharacter