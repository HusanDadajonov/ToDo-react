function SortBtns({AllUsers,SetArr}){
    function Sort(text){
        if(text == "all")SetArr(AllUsers)
        const Filter = AllUsers.filter(item => item.relationship.toLowerCase() == text);
        if(Filter.length > 0 && text != "all")SetArr(Filter);
        if(Filter.length == 0 && text !="all")SetArr([]);
       
    }
    return (
        <div className="d-flex align-items-center mb-3">
            <h2 className="fw-bold fs-3 text-black mb-0 me-3">Contacts</h2>
            <button className="sort__btn all-btn btn btn-primary me-3" onClick={()=> Sort("all")}>All</button>
            <button className="sort__btn family-btn btn btn-primary me-3" onClick={()=> Sort("family")}>Family</button>
            <button className="sort__btn friends-btn btn btn-primary me-3" onClick={()=> Sort("friends")}>Friends</button>
            <button className="sort__btn classNamemate-btn btn btn-primary" onClick={()=> Sort("classmate")}>Classmate</button>
        </div>
    )
}

export default SortBtns