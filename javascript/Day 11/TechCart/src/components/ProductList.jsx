import ProductCard from "./ProductCard/ProductCard.jsx";
import "./ProductCard/Style/ProductCart.css";

const ProductList = () => {

    const products = [
        {
            Image: "src/project image/Mechanical Keyboard.jpg",
            productName: "Mechanical Keyboard",
            productType: "Accessories",
            price: "₹ 2,099",
            rateing: "⭐ 4.9",
            stock: true
        },
        {
            Image: "src/project image/Wireless Mouse.jpg",
            productName: "Wireless Mouse",
            productType: "Accessories",
            price: "₹ 1,799",
            rateing: "⭐ 4.3",
            stock: false
        },
        {
            Image: "src/project image/Gaming Headset.jpg",
            productName: "Gaming Headset",
            productType: "Audio",
            price: "₹ 999",
            rateing: "⭐ 4.1",
            stock: true
        },{
            Image: "src/project image/USB-C Hub.jpg",
            productName: "USB-C Hub",
            productType: "Accessories",
            price: "₹ 1,799",
            rateing: "⭐ 4.3",
            stock: false
        },{
            Image: "src/project image/Laptop Stand.jpg",
            productName: "Laptop Stand",
            productType: "Accessories",
            price: "₹ 999",
            rateing: "⭐ 4.1",
            stock: true
        },{
            Image: "src/project image/Webcam.jpg",
            productName: "Webcam",
            productType: "Cameras",
            price: "₹ 2,299",
            rateing: "⭐ 4.6",
            stock: true
        }
    ];

    return (
        <>
            <div className="product-container">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        ProductList={product}
                    />
                ))}
            </div>
        </>
    );
};

export default ProductList;