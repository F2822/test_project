import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";

const Products = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const productListRef = ref(database, "products");
        get(productListRef).then((snapshot) => {
            if (snapshot.exists()) {
                const productsObj = snapshot.val();
                setProductList(Object.values(productsObj));
            }
        });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {productList.map(((product) => (
                <div key={product.name}>
                    <p>{product.name}</p>
                    <img src={product.image} alt="product image" />
                </div>
            )))}
        </div>
    );
};

export default Products;