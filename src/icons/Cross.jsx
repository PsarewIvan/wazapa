import React from 'react';

function Cross({ className }) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                d="M19.707 18.293A1 1 0 0 1 20 19a1 1 0 0 1-.293.707 1 1 0 0 1-.707.293 1 1 0 0 1-.707-.293L10 11.414l-8.292 8.294a1 1 0 0 1-1.415 0 1 1 0 0 1 0-1.415L8.586 10 .292 1.708a1 1 0 0 1 0-1.415 1 1 0 0 1 1.415 0L10 8.586 18.292.292a1 1 0 0 1 1.415 0 1 1 0 0 1 0 1.415L11.413 10l8.294 8.293z"
                fill="#27262c"
                fillOpacity=".72"
            />
        </svg>
    );
}

export default Cross;
