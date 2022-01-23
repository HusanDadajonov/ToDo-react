function Item({item}){
    return (
        <li className="box__item border mb-3 p-3 rounded">
            <h3 className="box__name">{item.name}</h3>
            <p className="box__relationShip">{item.relationship}</p>
            <a className="box__tell btn btn-primary text-decoration-none fw-bold">{item.phone}</a>
        </li>
      
    )  
}

export default Item