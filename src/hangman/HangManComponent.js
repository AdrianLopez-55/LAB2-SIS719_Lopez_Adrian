import React from "react";
import { DrawComponent } from "./components/DrawComponent";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { WordComponent } from "./components/WordComponent";
import { useCounter } from "./hook/useCounter";
import { useWord } from "./hook/useWord";
import "./styles.css"

export const HangManComponent = () => {
    const [listWord, , ifContains, isValid] = useWord();
    const [counter,incrementCounter , ,] = useCounter(0, {max: 6, min: 0})
    const handlerClickPress = (key) => {
        ifContains(key);
        if (!isValid(key)){
            incrementCounter();
        };
    }
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent counter={counter}/>
            <WordComponent listWord={listWord}/>
            <KeyBoardComponent handlerClickPress={handlerClickPress}/>
        </div>
    );  
};