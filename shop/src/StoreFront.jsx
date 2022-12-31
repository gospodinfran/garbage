import Product from "./Product";

export default function StoreFront({ products, onAddToCart }) {
    return <>
    {products.map(product => {
        return (
            <Product 
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            onAddToCart={onAddToCart}
            />
        )
    })}
    </>
}