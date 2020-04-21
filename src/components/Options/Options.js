import React, { useState } from 'react';

function onOptionChange(){

}
function Options(props) {
    const { option, ids } = props
    const [slectedValue, setSlectedValue] = useState('')
    return (
        <>
            <input type="radio" name="rb" id={ids} value={option} onClick={onOptionChange}/>
            <label htmlFor={ids}>{option}</label>
        </>
    );
}

export default Options
