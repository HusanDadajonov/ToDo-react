import Form from "./Form/Form";
import { useState } from "react";
import Contact from "./Contacts/Contact";
import Search from "./Contacts/Search/Search";

function App() {
  const [NameVal,SetNameVal] = useState("");
  const [RelationshipVal,SetRelationshipVal] = useState("");
  const [PhonepVal,SetPhonepVal] = useState("");
  const [AllUsers,SetAllUsers] = useState([]);
  const [Arr,SetArr] = useState([]);
  const [SearchVal,SetSearchVal] = useState("");

  return (
    <>
    <Search SetSearchVal = {SetSearchVal}/>
    <div className="box row">
      <Form SetNameVal = {SetNameVal}
      SetRelationshipVal = {SetRelationshipVal} 
      SetPhonepVal = {SetPhonepVal} 
      PhonepVal = {PhonepVal} 
      RelationshipVal = {RelationshipVal} 
      NameVal = {NameVal}
      SetArr = {SetArr}
      SetAllUsers = {SetAllUsers}
    />
      <Contact Arr = {Arr} AllUsers = {AllUsers} SetArr = {SetArr} SearchVal = {SearchVal}/>
    </div>
    </>
  );
}

export default App;
