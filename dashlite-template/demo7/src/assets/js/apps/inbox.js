"use strict";

!function (NioApp, $) {
  "use strict";

  var $win = $(window),
    $body = $('body'),
    breaks = NioApp.Break;

  // Inbox Variable
  var $ibx_reply_head = $('.nk-ibx-reply-header'),
    $tagify = $('.tagify');
  NioApp.Message = function () {
    function reply_toggle() {
      $ibx_reply_head.on('click', function (e) {
        if (!$(this).hasClass('is-opened') && !($(e.target).parents('.nk-reply-tools').length > 0)) {
          if ($(this).hasClass('is-collapsed')) {
            $(this).removeClass('is-collapsed').next().addClass('is-shown');
          } else if (!$(this).hasClass('is-collapsed')) {
            $(this).addClass('is-collapsed').next().removeClass('is-shown');
          }
        }
      });
    }
    reply_toggle();
    function tagify_init() {
      if ($tagify.exists() && typeof $.fn.tagify === 'function') {
        $tagify.tagify();
      }
    }
    tagify_init();
  };
  NioApp.coms.docReady.push(NioApp.Message);
}(NioApp, jQuery);