import * as React from 'react';

function Products(props) {
    return (
        <div className="product-item">
            {
                props.products.map((pitem)=>(
            
                    <div key={pitem.id} className="product-ite">
                                <img src={pitem.pic} className="productimage" />
                                <p >{pitem.name}</p>
                                 <p >{pitem.price}</p>
                    </div>
                
            ))
           }
        </div>
    )
}
export default Products