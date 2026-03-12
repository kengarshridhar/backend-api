import Product from "../../models/mongo/Product.js";

export const getAllProduct = (req, res) => {
    Product.find()
    .populate("category", "name slug")
    .then((products) => {
        res.json(products);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
}


export const getSingleProduct = (req, res ) => {
    Product.findById(req.params.id)
    .populate("category", "name slug")
    .then((product) => {

        if (!product) {
        return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);

    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
}

/* Create Product */
export const addProduct = (req, res) => {
    Product.create(req.body)
    .then((product) => {
        res.status(201).json({
        message: "Product Created",
        data: product
        });
    })
    .catch((err) => {
        res.status(500).json({ message: err.message });
    });
}

export const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((product) => {
      res.json({
        message: "Product Updated",
        data: product
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

export const deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ message: "Product Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}