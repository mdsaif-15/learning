import ProductCart from "./ProductCart"

const ProductList = () => {
    let Products = [
        { name: "Keyboard", price: 800 },
        { name: "Mouse", price: 400 },
        { name: "Headphones", price: 1200 },
        { name: "USB Cable", price: 250 },
        { name: "Webcam", price: 700 }
    ]
    return (<>
        <div>
            {Products.map((Product, index) => {
                return (
                    <ProductCart
                        index={index}
                        Product={Product}></ProductCart>
                );
            })
            }
        </div>
    </>)
}
export default ProductList;