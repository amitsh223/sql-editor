import { useState } from "react";
import { HistoryContext } from "./HistoryContext";

const HistoryState=(props)=>{

    const [historyList , setHistory]= useState([]);

    const update=(value)=>{
     setHistory([value,...historyList])
    }

    return (
        <HistoryContext.Provider value={{historyList,update}}>
         {props.children}
        </HistoryContext.Provider>
    );
}

export default HistoryState;