var cart = {}; //корзина
$("document").ready(function() {
  loadProducts();
});

function loadProducts() {
  //загрузка товара на страницу
  $.getJSON("products.json", function(data) {
    var out = '';
    for (var key in data) {
      out += '<section class="products__page">';
      out += '<div class="products products__horizontal">';
      out += '<section class="products__img">'
      out += '<a href="#" class="products__link">';
      out += '<img class="products__photo" src="' + data[key].primaryImageUrl + '">';
      out += '</a>';
      out += '</section>'
      out += '<section class="products__description">';
      out += '<span class="products__code">Код: ' + data[key]["code"] + '</span>';
      out += '<a href="#" class="products__title">';
      out += '<h2 class="products__name">' + data[key]["title"] + '</h2>';
      out += '</a>';
      out += '<div class="product__add"><span class="products__addition">Могут понадобиться: </span>' + data[key]["assocProducts"] + '</div>';
      out += '</section>';
      out += '<section class="products__price">';
      out += '<div class="products__status">Наличие' + '</div>';
      out += '<div class="products__coast">';
      out += '<div class="products__one">';
      out += '<div class="products__m" autofocus>' + '<span class="products__cards">По карте клуба' + '</span>' + data[key]["priceGold"].toFixed(2) + '</div>';
      out += '<div class="products__m">' + data[key]["priceRetail"].toFixed(2) + '</div>';
      out += '</div>'
      out += '<div class="products__two">';
      out += '<div class="products__p">' + '<span class="products__cards">По карте клуба' + '</span>' + data[key]["priceGoldAlt"].toFixed(2) + '</div>';
      out += '<div class="products__p">' + data[key]["priceRetailAlt"].toFixed(2) + '</div>';
      out += '</div>';
      out += '</div>';
      out += '<div class="products__bonus">Можно купить за ' + data[key]["bonusAmount"] + ' балла</div>';
      out += '<div class="products__btn">';
      out += '<button class="products__metre" id="metre" autofocus>За М. кв.' + '</button>';
      out += '<button class="products__pack">За упаковку' + '</button>';
      out += '</div>';
      out += '<div class="products__cart">';
      out += '<div class="products__wrapper">';
      out += '<input class="products__count" type="number" value="1">';
      out += '<div class="products__toggle">';
      out += '<button class="products__up">' + '</button>';
      out += '<button class="products__down">' + '</button>';
      out += '</div>';
      out += '</div>';
      out += '<button class="products__basket" data-product-id="' + data[key]["productId"] + '">В карзину</button>';
      out += '</div>';
      out += '</section>';
      out += '</div>';
      out += '</section>';
    }
    $("#products_section2").html(out);
    $('button.products__basket').on('click', addToCart);

    //показываем блоки переключения
    $('.products__metre').on('click', function() {
      $('.products__one').show();
      $('.products__two').hide();
    });

    $('.products__pack').on('click', function() {
      $('.products__two').show();
      $('.products__one').hide();
    });


    //увелиение и уменьшения товара
    $('.products__up').click(function() {
      $('.products__count').val($('.products__count').val() * 1 + 1);
    });

    $('.products__down').click(function() {
      $('.products__count').val($('.products__count').val() - 1);
    });

  });

}

function addToCart() {
  //добавляет товар в корзину
  var id = $(this).attr('data-product-id');
  if (cart[id] != undefined) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart);
}
