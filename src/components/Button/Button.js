import React from 'react';
function Button(props) {
    const { label, onClick } = props
    return (
        <div className="button" onClick={onClick}>
            {label}
        </div>
    );
}
export default Button
