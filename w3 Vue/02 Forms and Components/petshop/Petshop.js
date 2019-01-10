    var APP_LOG_LIFECYCLE_EVENTS = true;
    var webstore = new Vue({
      el: '#app',
      data: {
        sitename: "Vue.js Pet Depot",
        showProduct: true,
        product: {
          id: 1001,
          title: "Cat Food, 25lb bag",
          description: "A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.",
          price: 2000,
          image: "assets/images/product-fullsize.png",
          availableInventory: 5
        },
        cart: []
      },
      methods: {
        addToCart: function() {
          this.cart.push( this.product.id );
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false: true;
        },
      },
      computed: {
          cartItemCount() {
            return this.cart.length || '';
          },
          canAddToCart() {
            return this.product.availableInventory > this.cartItemCount;

          }
      },
      filters: {
        formatPrice(price) {	//#B
          if (!parseInt(price)) { return ""; }	//#C
          if (price > 99999) {	//#D
            var priceString = (price / 100).toFixed(2);	//#E
            var priceArray = priceString.split("").reverse();	//#F
            var index = 3;	//#F
            while (priceArray.length > index + 3) {	//#F
              priceArray.splice(index+3, 0, ",");	//#F
              index += 4;	//#F
            }	//#F
            return "$" + priceArray.reverse().join("");	//#G
          } else {
            return "$" + (price / 100).toFixed(2);	//#H
          }
        }

      },
      beforeCreate: function() {	//#B
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#B
      console.log("beforeCreate");	//#B
    }	//#B
  },	//#B
  created: function() {	//#C
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#C
      console.log("created");	//#C
    }	//#C
  },	//#C
  beforeMount: function() {	//#D
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#D
      console.log(" beforeMount");	//#D
    }	//#D
  },	//#D
  mounted:  function() {	//#E
    if (APP_LOG_LIFECYCLE_EVENTS) {	//#E
      console.log(" mounted"); 	//#E
    } 	//#E
  },	//#E
  beforeUpdate:  function() { 	//#F
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#F
      console.log("beforeUpdate"); 	//#F
    } 	//#F
  },	//#F
  updated:  function() { 	//#G
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#G
      console.log("updated"); 	//#G
    } 	//#G
  },	//#G
  beforeDestroyed:  function() { 	//#H
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#H
      console.log("beforeDestroyed "); 	//#H
    } 	//#H
  },	//#H
  destroyed:  function() { 	//#I
    if (APP_LOG_LIFECYCLE_EVENTS) { 	//#I
      console.log("destroyed"); 	//#I
    } 	//#I
  }	//#I
});
