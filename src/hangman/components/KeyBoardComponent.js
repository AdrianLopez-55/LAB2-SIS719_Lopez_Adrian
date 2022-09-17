import React from "react";
import { useKeyBoard } from "../hook/useKeyBoard";
import { ItemKeyComponent } from "./ItemKeyComponent";


export const KeyBoardComponent = ({ handlerClickPress }) => {
    const [keyState, setKeyState] = useKeyBoard();
    const handlerClick = (key) => {
        const newState = keyState.map((item) => {
            if(key === item.key) {
                item.state = true;
            }
            return item;
        });
        setKeyState(newState);
        handlerClickPress(key)
    };
    return (
        <div className="flex-container">
            {keyState.map(({ key, state }) => (
                <ItemKeyComponent 
                    key={key}
                    myKey={key}
                    state={state}
                    handlerClick={handlerClick}
                />
            ))}
        </div>
    )
};