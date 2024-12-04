const productsData = require('../Modules/productSea.json'); // Path to your JSON file with product data

exports.getProductsBySearchCategory = (req, res) => {
    const categoryName = req.params.product; // Retrieve the product name from request parameters

    // Filter products matching the given product name
    const filteredProduct = productsData.filter(product =>
        product.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (filteredProduct.length > 0) {
        res.status(200).json({ products: filteredProduct });
    } else {
        res.status(400).json({
            message: "No products found with the provided name.",
        });
    }
};
