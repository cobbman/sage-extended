/*
 * => THIS FILE IS NOT BEING INCLUDED. IT IS FOR REFERENCE.
 * ---------------------------------------------------------------------------*/


/*
 * => FEATURE BOX LINKS (AUTO ADD LINKS TO ICON)
 * ---------------------------------------------------------------------------*/
$('.x-feature-box').each(function() {
  var self = $(this),
      icon_href = self.find('.x-feature-box-text a:last-child').attr('href');
  if ( icon_href.length > 0 ) {
    $(self).find('.x-feature-box-graphic-inner > *').wrap(function() {
      return '<a href="' + icon_href + '" target="_blank"></a>';
    });
  }
});


/*
 * => FULL SCREEN
 * => Author: William <hello@bigwilliam.com>
 * ---------------------------------------------------------------------------*/
var fullscreenStuff = function(element, minusEl) {
  var thisH, totalMinus=0, newHeight=0, windowH=jQuery(window).height();
  if (minusEl.length > 0) {
    for ( var i=0; i<minusEl.length; i++) {
      thisH = jQuery(minusEl[i]).outerHeight( true );
      totalMinus += thisH;
    }
  }
  newHeight = windowH - totalMinus;
  // Fullscreen this sucker
  jQuery(element).outerHeight(newHeight);
};

var activateFullscreen = function() {
  // EDIT THE PARAMETERS BELOW
  // Parameter 1 is the element to become fullscreen
  // Parameter 2 is an array of other elements to subtract from the calculation (keeps them on the screen also)
  fullscreenStuff('#fullscreenMe', ['#keepOnScreen', '#wpadminbar', '.masthead']);
};
activateFullscreen();

// Re-calculate if window resized
window.onresize = function() {
  var doit;
  clearTimeout(doit);
  doit = setTimeout(function() {
    activateFullscreen();
  }, 100);
};


/*
 * => VERTICAL ALIGN ELEMENTS. Use CSS flex first, or use JS as backup.
 * ---------------------------------------------------------------------------*/

var verticalAlign = function(items) {}


/*
 * => WAIT FOR FINAL EVENTS: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
 * ---------------------------------------------------------------------------*/

var waitForFinalEvent = (function() {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();


/*
 * => READMORE LINKS. Use these if the readmore.js library is included
 * ---------------------------------------------------------------------------*/


$('.readmore').readmore({
  collapsedHeight: 155,
  moreLink: '<a href="#" class="read-more-link">Read more</a>',
  lessLink: '<a href="#" class="read-less-link">Close</a>'
});

$('.readmore-small').readmore({
  collapsedHeight: 55,
  moreLink: '<a href="#" class="read-more-link">Read more</a>',
  lessLink: '<a href="#" class="read-less-link">Close</a>'
});


/*
 * => TRANSPARENT NAV - CHANGES IT WHEN PAGE IS SCROLLED
 * ---------------------------------------------------------------------------*/


if ( $("body").hasClass("transparent-nav") ) {     
  var scroll_pos = 0;
  $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 50) {
      $("body.transparent-nav").addClass('fill-nav');
    } else {
      $("body.transparent-nav").removeClass('fill-nav');
    }
  });
}



/*
 * => SCROLL TO SECITON BASED ON PARAMETER IN URL
 * => Usage example: "www.example.com/?open=secondDiv"
 *
 * => X may come with this built-in already. TODO: verify this.
 * ---------------------------------------------------------------------------*/


var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

/* Check URL for the parameter */


var open = getUrlParameter('open');

if ( open !== undefined ) {
  // var anchor = '#' + openanchor;
  setTimeout(function() {
    var anchor = $(".content #" + open);
    var theOffset = $(anchor).offset();
    $('body,html').animate({ scrollTop: theOffset.top - 100 });
  }, 410); 
}