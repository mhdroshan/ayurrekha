/*!
* parlx v2.0.13
* Copyright 2017 Jakub Biesiada
* MIT License
*/

(function($) {

  $.fn.parlx = function(options) {

    // OPTIONS
    var options = $.extend({
      speed: 0.3
    }, options);

    return this.each(function() {

      const backImage = $(this);
      let speed = options.speed;

      if(speed > 0.5 || speed < 0.1) {
        speed = 0.3;
      }

      const scrolled = $(window).scrollTop() - backImage.parent().offset().top;

      backImage.css({
        "top": "0px",
        "left": "0px",
        "background-position": "center center",
        "width": "100vw",
        "height": $(this).parent().height() * (1 + speed * 2),
        "-webkit-transform": "translateY(" + speed * scrolled + "px)",
        "-moz-transform": "translateY(" + speed * scrolled + "px)",
        "transform": "translateY(" + speed * scrolled + "px)"
      });

    });

  }

})(jQuery);
