/* ==========================================================================

    Project: Test Project
    Author: XHTMLized
    Last updated: Sun Mar 29 2015 02:52:27

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.colorBoxInit();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    colorBoxInit: function() {
      $('a.gallery').colorbox({
        rel: 'news',
        open: true,
        loop: false,
        onLoad: function() {

        }
      });

      //Keep track of gallery items
      var counter = 1;

      $(document).bind('cbox_complete', function() {
        if (counter == $('a.gallery').length) {
          counter = 1;
          setTimeout($.colorbox.close, 2000);
        } else {
          setTimeout($.colorbox.next, 2000);
          counter++;
        }
      });
    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
