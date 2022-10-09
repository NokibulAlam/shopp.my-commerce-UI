
// Create Category
export const createCategory = (userId, token, category) => {
    return fetch(`http://localhost:4000/api/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(category),
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        });
};

// Get All Category
export const getCategory = () => {
    return fetch(`http://localhost:4000/api/categories`, {
            method: "GET",
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err.json();
        });
};

// Post Product
export const createProduct = (userId, token, product) => {
    return fetch(`http://localhost:4000/api/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product,
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        });
};

// Get All Products
export const getProducts = () => {
    return fetch(`http://localhost:4000/api/products`, {
            method: "GET",
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err.json();
        });
}

// Delete Product
export const deleleProduct = (userId, token, productId) => {
    return fetch(`http://localhost:4000/api/product/${productId}/${userId}`, {
        method: "DELETE", 
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        });
};


// Update Product
export const updateProduct = (userId, token, productId, product) => {
    return fetch(`http://localhost:4000/api/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product,
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        });
}