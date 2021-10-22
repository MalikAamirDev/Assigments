import React from 'react'
import product_card from '../Data/ProductCard'

export default function MainContent() {
    const listItems = product_card.map((item)=>
            <div className="card">
                <div className="card_img">
                   <img src={item.thumb} />
                </div>
                <div className="card_body">
                    <h2 className="card_heading">{item.product_name}</h2>
                    <p className="description">{item.description}</p>
                    <p className='price'>{item.price} <span>{item.currency}</span></p>
                    <a href="/">Buy Now</a>
                </div>
            </div>    
    )  
    return (
        <>
            <h3 style={{textTransform:'uppercase', fontSize:'2.5vw',textAlign:'center',marginTop:'20px',color:'#FE532E'}}
            >Nike Shoes</h3>                 
            <div className="main_content">            
                {listItems}
            </div>
        </>
        
    )
}
