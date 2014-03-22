window.initializers = function($) {
  $('input[type=checkbox]').click(function() {
    $(this).parents('form').submit();
  });
};

window.initializers(jQuery)

