import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeWhishlistItem } from '../../Actions/Action';

function WhishlistItems(props:any) {
    const [activeWhishlist,setActiveWhishlist] = useState(false);
    const dispatch = useDispatch();
	
  return (
    <div key={props.id} className="whishlist-item-row">
							<img src={props.image} alt="product image"/>
							<span className='whishlist-item-name'>{props.name}</span>
							<span className='whishlist-item-price'>{props.price}</span>
							<span className='whishlist-item-category'>{props.category}</span>
							<button 
							className="cartButton"
							onClick={()=>{
								if(!activeWhishlist){
									dispatch(
										addToCart({
										category: props.category,
										name: props.name,
										price: props.price,
										image: props.image,
										quantity:props.quantity,
										total:props.total,
										id:props.id
										})
									)
								}
								else{
									alert("Item Already Has Been Added To Cart!");
								}
								setActiveWhishlist(true);
							}
							}>
				<FontAwesomeIcon size='lg' icon="shopping-cart" color={activeWhishlist?"orange":"black"}/></button>
				<button style={{padding:"10px 20px"}} onClick={()=>dispatch(removeWhishlistItem(props.id))}><FontAwesomeIcon icon="remove"/></button>
	</div>
  )
}

export default WhishlistItems;