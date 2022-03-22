import React from "react";

const itemStyle = {
    listStyleType:'none',
    margin:'0 25px'
}

function Item({id, title, price, pictureURL}){
return(<li key={id} style={itemStyle}>
            <div className="card" style={{width: 18+'rem'}}>
                <img src={pictureURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                </div>
            </div>
        </li>)
}




export default Item 

