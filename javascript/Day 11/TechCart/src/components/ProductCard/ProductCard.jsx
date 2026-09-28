import "./Style/ProductCart.css"
const ProductCard = () => {
    let image = "src/project image/Mechanical Keyboard.jpg"
    let productName = "Mechanical Keyboard";
    let productType = "Accessories";
    let price = `₹ ${2099}`
    let rateing = `⭐ ${4.9}`
    return (<>
        <div className="ProductGrid">
            <div className="Imagebox">
                <img src={image} alt="" />
            </div>
            <div className="productName">
                {productName}
            </div>
            <div className="productType">
                {productType}
            </div>
            <div className="price">
                {price}
            </div>
            <div className="rateing">
                {rateing}
            </div>
        </div>
    </>)
}
export default ProductCard;