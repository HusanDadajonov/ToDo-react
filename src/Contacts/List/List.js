import Item from "./Item/Item"

function List({Arr,SearchVal,SetArr}){
    if(Arr.length > 0){
        if(SearchVal != ""){
            const SearchFilter = Arr.filter(item => item.name.includes(SearchVal));
            return (
                <ul className="box__list list-unstyled d-flex flex-column">
                    { SearchFilter.map(item => (
                        <Item key={Math.random() * 15000} item = {item}/>
                    ))
                    }
                </ul>
            )
        }
        else {
            return (
                <ul className="box__list list-unstyled d-flex flex-column">
                     { Arr.map(item => (
                        <Item key={Math.random() * 15000} item = {item}/>
                       ))
                     }
                </ul>
            )
        }
    }  
    else {
        return (
           null
        )
    } 
    
}

export default List