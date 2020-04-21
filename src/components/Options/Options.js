import React from 'react';
function Options(props) {
    const { option, ids } = props
    return (
        <>
            <input type="radio" name="rb" id={ids} />
            <label htmlFor={ids}>{option}</label>
        </>
    );
}

export default Options
