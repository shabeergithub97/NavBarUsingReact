function Products(props){
    return (
        <div>
            {
                props.products.map((pitem)=>(
            
                    <div key={pitem.id} className="product-item">
                                <img src={pitem.pic} />
                                <p>{pitem.name}</p>
                                 <p>{pitem.price}</p>
                    </div>
                
            ))
           }
        </div>
    )
}
export default Products