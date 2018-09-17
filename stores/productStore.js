import { decorate, observable } from "mobx";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class ProductStore {
  constructor() {
    this.products = [];
    this.index = 0;
    this.fetchProducts();
  }

  fetchProducts() {
    return instance
      .get("/api/product/")
      .then(res => res.data)
      .then(products => {
        this.products = products;
        console.log(products);
      })
      .catch(err => console.error(err));
  }
}
decorate(ProductStore, {
  products: observable
});

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
