const productsData = require('../Modules/products.json'); // Path to your JSON file with product data

exports.getproductsBycategory = (req, res) => {
    const categoryName = req.params.category;
    const filteredProducts = productsData[categoryName];

    if (filteredProducts) {
        res.status(200).json({ products: filteredProducts });
    } else {
        res.status(400).json({
            message: "Please provide a valid category name",
        });
    }
};
