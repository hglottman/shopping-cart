var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];

  var $cartList = $('.cart-list');

  var $totalPrice = $('.total');
  
  var updateCart = function () {
    $cartList.empty();
    $totalPrice.empty();
    var totalShoppingCart = 0;
    for (var i = 0; i < cart.length; i += 1) {
      var itemToAdd = cart[i];
      totalShoppingCart += cart[i].price; 
      var source = $('#item-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(itemToAdd);
      // append our new html to the page
      $cartList.append(newHTML);
    }

      $totalPrice.append(totalShoppingCart);
    }


    var findItem = function (addToCartButton) {
      var $clickedItem = $(addToCartButton).closest('.card');
      var $itemName = $clickedItem.data().name;
      var $itemPrice = $clickedItem.data().price;
      var item = {
        name: $itemName,
        price: $itemPrice
      };
      return item;
      // console.log(item);
    }


    var addItem = function (item) {
      cart.push(item);
      console.log(cart);
    }

    var clearCart = function () {
      cart.splice(0,cart.length);
      updateCart();

    }

    return {
      updateCart: updateCart,
      addItem: addItem,
      clearCart: clearCart,
      findItem: findItem
    }
  };

  var app = ShoppingCart();

  // update the cart as soon as the page loads!
  app.updateCart();


  //--------EVENTS---------

  $('.view-cart').on('click', function () {
    // TODO: hide/show the shopping cart!
    $(".shopping-cart").toggleClass("show");
  });

  $('.add-to-cart').on('click', function () {
    // TODO: get the "item" object from the page
    var item = app.findItem(this);
    app.addItem(item);
    app.updateCart();
  });

  $('.clear-cart').on('click', function () {
    app.clearCart();
  });