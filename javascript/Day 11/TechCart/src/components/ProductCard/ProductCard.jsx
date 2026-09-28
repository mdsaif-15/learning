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

                <div className="stock">
                    {ProductList.stock}
                </div>

            </div>
        </>
    );
};

export default ProductCard;