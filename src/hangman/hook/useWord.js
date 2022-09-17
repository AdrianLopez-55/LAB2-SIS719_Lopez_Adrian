import { useState } from "react";

export const useWord = (word) => {
    const listOfWords = ["cabra", "obeja", "color", "suero", "hogar", "familia", "react", "aprendizaje"];
    word = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    const listLetters = word.split("").map((item) => {
        item = item.toUpperCase();
        item = {letter: item, state: false };
        return item;
    });
    const [listWord, setListWord] = useState(listLetters);
    const ifContains = (letter) => {
        const newListWord = listWord.map((item) => {
            if(item.letter === letter && item.state === false){
                item.state = true;
            }
            return item;
        });
        setListWord(newListWord);
    };
    const isValid = (letter) => {
        for(let i= 0; i< listWord.length; i++){
            let item = listWord[i]
            if(item.letter === letter ){
                return true;
            }
        let listWord1 = listWord.filter(state => state.state === true);
        let listWord2 = listWord.filter(item => item.letter !== "");
        if(listWord1.length === listWord2.length){
            if(!alert("Congratulation! You win the game")){
                window.location.reload();
            }
            break;
        };
        }
        return false;
    };
    return [listWord, setListWord, ifContains, isValid];
}