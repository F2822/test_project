import React, { useState } from "react";
import { getDatabase, ref as dbRef, push, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [productImg, setProductImg] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Upload image to the storage
        const storage = getStorage();
        const imagesRef = storageRef(storage, "images/" + productImg?.name);
        const snapshot = await uploadBytes(imagesRef, productImg);
        const productImgURL = await getDownloadURL(snapshot.ref);

        // Create new product
        const database = getDatabase();
        const productListRef = dbRef(database, "products");
        const newProductRef = push(productListRef);
        set(newProductRef, {
            name: productName,
            image: productImgURL
        });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="product-name-input">Product name</label>
            <input
                id="product-name-input"
                type="text"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
            />
            <label htmlFor="product-image-input">Product image</label>
            <input
                id="product-image-input"
                type="file"
                onChange={(event) => setProductImg(event.target.files[0])}
            />
            <button type="submit">Send</button>
        </form>
    )
};

export default AddProduct;