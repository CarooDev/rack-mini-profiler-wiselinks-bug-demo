(function() {
  (function($) {
    window.wiselinks = new Wiselinks($('#wiselinks-container'), { html4: false });
    $(document).on('page:done', function() {
      window.initializers($);
    });
  })(jQuery);
}).call(this);
