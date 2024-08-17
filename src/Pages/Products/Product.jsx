

const Product = ({product}) => {

    return (
        <div className="border h-[350px]">
                <div className="w-full h-[250px] relative">
                    <img src={product?.image} alt=""className="w-full h-full object-cover absolute" />
                    <h2 className="text-lg font-semibold bg-blue-600 text-white rounded-full py-1 px-4 absolute right-3 top-3">$ {product?.price}</h2>
                </div>

                {/* content */}
                <div className="p-3 mt-1">
                        <h1 className="text-xl font-bold">{product?.product_name}</h1>
                        <div>
                            <h2 className="font-semibold">Brand : {product?.brand}</h2>
                            <h2 className="font-semibold">Category : {product?.category}</h2>
                     </div>
                </div>
        </div>
    );
};

export default Product;