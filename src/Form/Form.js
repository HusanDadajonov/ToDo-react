const UserArr = [];
function Form({SetNameVal,SetRelationshipVal,SetPhonepVal,NameVal,RelationshipVal,PhonepVal,SetArr,SetAllUsers}){

    function FormSubmit(e){
        e.preventDefault();
        UserArr.push( {
            name : NameVal,
            relationship : RelationshipVal,
            phone : PhonepVal
        })
        SetAllUsers(UserArr);
        SetArr(UserArr);
        SetNameVal("");
        SetRelationshipVal("");
        SetPhonepVal("");
    }

    return(
        <form className="form pe-5 box__col col-xl-6 col-sm-12" onSubmit={FormSubmit}>
        <h2 className="fw-bold fs-3 text-black mb-3">New Contact</h2>
        <div className="mb-3">
          <input type="text" value={NameVal} className="inputs inp-name form-control" id="exampleInputEmail1" placeholder="Name and Surname" aria-describedby="emailHelp" autoComplete="off" required onChange={(e)=> SetNameVal(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="text" value={RelationshipVal} list="rel-list" className="inputs inp-relationship form-control" id="exampleInputPassword1" placeholder="RelationShip" autoComplete="off" required onChange={(e)=> SetRelationshipVal(e.target.value)}/>
          <datalist id="rel-list">
            <option>Family</option>
            <option>Friends</option>
            <option>classmate</option>
          </datalist>
        </div>
        <div className="mb-3">
          <input type="tell" value={PhonepVal} className="inputs inp-phone form-control" id="exampleInputPassword1" placeholder="Phone" autoComplete="off" required onChange={(e)=> SetPhonepVal(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Contact</button>
      </form>
    )
}

export default Form