var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    altText: "A pair of warm, fuzzy socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    url: "http://oklart.mine.nu",
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    sizes: ["XXS, ", "XS, ", "S, ", "M, ", "L, ", "XL, ", "XXL"]
  },
});
