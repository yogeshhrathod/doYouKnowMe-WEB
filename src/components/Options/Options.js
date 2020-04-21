import React, { useState } from 'react';


function Options(props) {
    const { option, ids,onOptionChange } = props
    return (
        <>
            <input type="radio" name="rb" id={ids} value={option} onClick={()=>onOptionChange(option)}/>
            <label htmlFor={ids}>{option}</label>
        </>
    );
}

export default Options
