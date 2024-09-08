const prisma = require("../prisma/prisma");

exports.create = async (req, res) => {
  try {
    // code
    const { name, price } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });
    res.send(newProduct);
  } catch (err) {
    // Err
    console.log(err);
    res.send("Server Error").status(500);
  }
};
exports.list = async (req, res) => {
  try {
    //code
    const listProduct = await prisma.product.findMany();
    res.send(listProduct);
  } catch (err) {
    //err
    console.log(err);
    res.status(500).send("Server Error 500");
  }
};
exports.read = async (req, res) => {
  try {
    //code
    const { productId } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    res.json(product);
  } catch (err) {
    //err
    console.log(err);
  }
};
exports.update = async (req, res) => {
  try {
    //code
    const { productId } = req.params;
    const { name, price } = req.body;

    const newProduct = await prisma.product.update({
      where: { id: Number(productId) },
      data: {
        name: name,
        price: price,
      },
    });
    res.json(newProduct);
  } catch (err) {
    // err
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.remove = async (req, res) => {
  try {
    // code
    const { productId } = req.params;
    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(productId),
      },
    });
    res.send(deletedProduct);
  } catch (err) {
    // err
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
