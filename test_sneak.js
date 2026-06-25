import SneaksAPI from "sneaks-api";

const sneaks = new SneaksAPI();

sneaks.getProducts("jordan", 10, (err, products) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(products);
});