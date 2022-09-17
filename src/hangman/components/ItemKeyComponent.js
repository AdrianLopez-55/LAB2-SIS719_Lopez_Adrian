import React from "react";

export const ItemKeyComponent = ({myKey, state, handlerClick}) => {
    return (
        <div 
          className={state ? ("disablediv"):("")}
          onClick={() => {
            handlerClick(myKey);
        }}>
          {myKey}
        </div>
    )
}
