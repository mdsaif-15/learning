const ProductCard = () => {
    let productName = "Mechanical Keyboard";
    let productType = "Accessories";
    let price = `₹ ${2099}`
    let rateing = `⭐ ${4.9}`
    return (<>
        <div className="ProductGrid">
            <div className="Imagebox">
            </div>
            {productName}
            {productType}
            {price}
            {rateing}
        </div>
    </>)
}
export default ProductCard;