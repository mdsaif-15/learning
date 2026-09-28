import "./Style/ProductCart.css";

const ProductCard = ({ ProductList }) => {
    return (
        <>
            <div className="ProductGrid">

                <div className="Imagebox">
                    <img src={ProductList.Image} alt={ProductList.productName} />
                </div>

                <div className="productName">
                    {ProductList.productName}
                </div>

                <div className="productType">
                    {ProductList.productType}
                </div>

                <div className="price">
                    {ProductList.price}
                </div>

                <div className="rateing">
                    {ProductList.rateing}
                </div>

                <div className={ProductList.stock ? "stock-in-stock" : "stock-out-stock"}>
                    {ProductList.stock ? "In stock" : "Out of stock"}
                </div>

            </div>
        </>
    );
};

export default ProductCard;