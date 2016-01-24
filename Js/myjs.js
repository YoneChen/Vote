(function ($) {
  $(function () {
    // Checkboxes and Radio buttons
    $('[data-toggle="checkbox"]').radiocheck();
    $('[data-toggle="radio"]').radiocheck();
	resizeBannerImage();
	window.onresize=resizeBannerImage;//当窗口改变宽度时执行此函数

  });
function resizeBannerImage()
   {
    if( $(window).width() > 800 ) {
     $(".radiobox").removeClass("col-xs-6");
    $(".radiobox").addClass("col-xs-12");
    }
	else {
		$(".radiobox").removeClass("col-xs-12");
		$(".radiobox").addClass("col-xs-6");
	}
   }  
})(jQuery);
