$(document).ready(function(){
	//navigation control
	$(".agent-home-v1 .nav li a").mPageScroll2id({
		highlightSelector:".agent-home-v1 .nav li a"
	});
	$(".navigation-bullet-list li a").mPageScroll2id({
		highlightSelector:".navigation-bullet-list li a"
	});
	$(".navigation-sticky-list li a").mPageScroll2id({
		highlightSelector:".navigation-sticky-list li a"
	});
	$(".agent-home-v3 .header .dropdown-menu > li > a").mPageScroll2id({
		highlightSelector:".agent-home-v3 .header .dropdown-menu > li > a"
	});
	//slideshow home v2
	$('.flexslider.top_slider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      prevText: "Prev",
      nextText: "Next"
  	});
	//form search
	$(".navigation .navbar-form .btn-search").on("click", function(e){
        e.preventDefault();
        $(".navigation .navbar-form").addClass("search-exp");
        $(".navigation .navbar-form .form-control").focus();
    });
    $(".navigation .navbar-form .form-control").blur(function(){
        // Do not hide input if contains text
        if($(".form-control").val() === ""){
            $(".navigation .navbar-form").removeClass("search-exp");
        }
    });
    $(".toggle-search").click(function(){
    	if($(".form-mobile .navbar-form").is(":visible")){
    		$(".form-mobile .navbar-form").slideUp(200);
    	}
    	else {
    		$(".form-mobile .navbar-form").slideDown(200);
    	}
    });
    /*var window_width = $(window).width();
    if(window_width > 992){
    	//form search
		$(".navigation .navbar-form .btn-search").on("click", function(e){
	        e.preventDefault();
	        $(".navigation .navbar-form").addClass("search-exp");
	        $(".navigation .navbar-form .form-control").focus();
	    });
	    $(".navigation .navbar-form .form-control").blur(function(){
	        // Do not hide input if contains text
	        if($(".form-control").val() === ""){
	            $(".navigation .navbar-form").removeClass("search-exp");
	        }
	    });
    }
    else{
    	$(".navigation .navbar-form .btn-search").click(function(){
    		alert("ABC");
    	});
    }*/
	//animation banner
	setTimeout(function(){
		$(".back,.blog-feature,.agent-home-v1 .header").addClass("show")
	}, 300);
	setTimeout(function(){
		$(".photography,#banner .line-feature,#banner-child .line-feature").addClass("process")
	}, 1500);
	//wow js
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       50,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    $(window).scroll(function() {
		$('.animate-border').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1000) {
				$(this).addClass("process")
			}
		});
		//appear
		$('.el-appear').each(function(){
		var appear = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (appear < topOfWindow+1000) {
				$(this).addClass("animate-appear")
			}
		});
	});

	/* Menu drop down*/
    $('.navbar-nav li.menu-item-has-children').append('<span class="menu-toggle"><i class="fa fa-angle-down"></i></span>');
    $('.menu-toggle').click(function(){
        $(this).prev().toggleClass('submenu-open');
        $(this).toggleClass('rotate');
    });

	//Carousel blockquote
	$(".owl-blockquote").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : true,
		stopOnHover : true
	});
	//Carousel latest
	$(".owl-latest").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : true,
		stopOnHover : true
	});
	//Carousel latest
	$(".owl-portfolio").owlCarousel({
		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : true,
		stopOnHover : true
	});
	//Carousel gallery
	$(".owl-gallery").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText: [
        "<span aria-hidden='true' class='arrow_left'></span>",
        "<span aria-hidden='true' class='arrow_right'></span>"
        ],
		pagination : false,
		singleItem : true,
		autoPlay : true,
		stopOnHover : true
	});
	//Carousel portfolio
  var owlsingle = $(".owl-single");
 
  owlsingle.owlCarousel({
	items : 1,
	slideSpeed : 300,
	paginationSpeed : 400,
	pagination : false,
	singleItem : true,
	autoPlay : true,
	stopOnHover : true
  });
  // Custom Navigation Events
  $(".next").click(function(){
    owlsingle.trigger('owl.next');
  });
  $(".prev").click(function(){
    owlsingle.trigger('owl.prev');
  });
	// Sorting options

	//callback function shuffleme
	var $grid = $('#grid-pofolio'),
	$sizer = $grid.find('.shuffle__sizer');

	$grid.shuffle({
		itemSelector: '.picture-item',
		sizer: $sizer
	});

	/* reshuffle when user clicks a filter item */
	$('.sorting-portfolio li a').click(function (e) {
		e.preventDefault();

		// set active class
		$('.sorting-portfolio li a').removeClass('active');
		$(this).addClass('active');

		// get group name from clicked item
		var groupName = $(this).attr('data-group');

		// reshuffle grid
		$grid.shuffle('shuffle', groupName );
	});
	// callback function equal height category
	equalHeightCategory();
	//swipper
	var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.customNavigation .next',
        prevButton: '.customNavigation .prev',
        spaceBetween: 30,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 30,
        centeredSlides: true,
		slidesPerView: 'auto',
		touchRatio: 0.2,
		slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
});
// equal height category
function equalHeightCategory(){	
    var byRow = $('body').hasClass('test-rows');
    // apply matchHeight to each item container's items
    $('.equal-height-catagory').each(function() {
        $(this).children().matchHeight({
            byRow: byRow
        });
    });
}