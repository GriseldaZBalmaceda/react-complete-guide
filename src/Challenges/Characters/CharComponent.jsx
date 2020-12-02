import React from 'react'

const Character = (props) => {
const style = {
        bakgroundColor: 'black',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
      } 
return(
<div style={style} onClick={props.clicked}>{props.text}</div>
)
}

export default Character