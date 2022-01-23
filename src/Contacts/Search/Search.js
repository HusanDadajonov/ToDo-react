function Search({SetSearchVal}){
    return (
        <div className="m-5  w-90 ">
            <input type="search"  onChange={(e)=> SetSearchVal(e.target.value)} className="search form-control" id="exampleInputEmail1" placeholder="Search Contact" aria-describedby="emailHelp" autoComplete="off" />
        </div>
    )
}

export default Search