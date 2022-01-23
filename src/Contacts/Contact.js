import SortBtns from "./SortBtns/SortBtns"
import List from "./List/List"
import { useState } from "react/cjs/react.development"

function Contact ({Arr,AllUsers,SetArr,SearchVal}){
    return (
        <div className="ps-5 box__col col-xl-6 col-sm-12">
            <SortBtns Arr = {Arr} AllUsers = {AllUsers} SetArr = {SetArr}/>
            <List Arr = {Arr}  SearchVal= {SearchVal} SetArr = {SetArr} />
        </div>
    )
}

export default Contact