import React, { useEffect , useState} from "react";
import ItemCount from "./ItemCount";
import gow from '../images/items/gow.jpg'
import fifa22 from '../images/items/fifa22.jpg'
import eldenring from '../images/items/eldenring.jpg'
import granturismo7 from '../images/items/granturismo7.jpg'
import ItemList from './ItemList'

let catalogoStyle={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const listaProductos=[
    {
        id:1,
        title: 'God of War',
        price:6800,
        pictureURL:gow,
    },
    {
        id:2,
        title: 'FIFA 22',
        price:6200,
        pictureURL:fifa22,
    },
    {
        id:3,
        title: 'Elden Ring',
        price:9000,
        pictureURL:eldenring,
    },
    {
        id:4,
        title: 'Gran Turismo 7',
        price:7000,
        pictureURL:granturismo7,
    }
    
]


function ItemListContainer ({MENSAJE}){
    const [productos, setProductos] = useState([])

    useEffect(() => {
      const getProductos = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve(listaProductos)
        },2000);
      });
      getProductos
        .then(datos => Promise.resolve(datos))  
        .then(datos => {setProductos(datos)})


    }, [])
    

    return (<div style={catalogoStyle}>
            <h1 style={{marginBottom: 50+"px"}}>{MENSAJE}</h1>
            <ItemList Items={productos}/>
        </div>
    )
}


export default ItemListContainer;