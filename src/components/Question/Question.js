import React from 'react';
function Question(props) {
    const {questionInput} = props
    return (
        <div className="question">
            {questionInput}
        </div>
    );
}

export default Question
