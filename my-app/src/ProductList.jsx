import ProductCard from "./ProductCard";

function ProductList(props){
    return(
        <div>
            {props.products.map(product =>(
                <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                inStock={product.inStock}
                />
            ))}
        </div>
    )
}

export default ProductList