import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import  {useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext' 

const Item = (props) => {
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="item">
        {/* <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image} alt={props.name} /></Link> */}
        <Link to='/cart'><img onClick={()=>{addToCart(props.id);window.scrollTo(0,0);}} src={props.image} alt={props.name} /></Link>
        <img src={props.image} alt={props.name}/>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item