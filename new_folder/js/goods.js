var cart = {}; //корзина
// $("document").ready(function() {

    // $("#products_section2").html(out);
    $('button.products__basket').on('click', addToCart);

    // показываем блоки переключения
    $('.products__metre').on('click', function() {
      $('.products__pack').removeClass('selection');
      $('.products__metre').toggleClass('selection');
      $('.products__one').show();
      $('.products__two').hide();
    });

    $('.products__pack').on('click', function() {
      $('.products__metre').removeClass('selection');
      $('.products__pack').toggleClass('selection');
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

    // });

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
