var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    altText: "A pair of warm, fuzzy socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    url: "http://oklart.mine.nu",
    inventory: 10,
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    sizes: ["XXS, ", "XS, ", "S, ", "M, ", "L, ", "XL, ", "XXL"],
    cart: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
      },
      {
        variantId: 875,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.png",
      },
    ],
  },
  methods: {
    addToCart() {
      this.cart++;
      this.inventory--;
      this.isInStock();
    },
    removeFromCart() {
      this.cart--;
      this.inventory++;
      this.isInStock();
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    isInStock() {
      if (this.inventory > 0) {
        this.inStock = true;
      } else {
        this.inStock = false;
      }
    },
  },
});
