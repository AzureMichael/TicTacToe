import React from "react";

const Square = ({value, children}) => {
    console.log({value, children});
    return (
        <button type="button">{value}</button>
    );
}

export default Square;