String.prototype.startsWith = function(prefix) {
  return this.indexOf(prefix) == 0;
};



jQuery(function($) {
  $("img").each(function() {
    var $that = $(this);

    if( $that.parent()[0].nodeName.toLowerCase() != "a") {
      if($that.hasClass("imglink") || $that.attr("src").startsWith('/images/')) {
        $that.wrap($('<a href="'+$that.attr('src')+'" />'));
      }
    }
  });
});
