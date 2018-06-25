$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });
});


$(document).ready(function() {

    /* Creating the super slider header */
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });
    /* using typedjs to type the header */
    var typed= new Typed(".typed",{
        strings: ["Self Taught.","Front End Developer.", "Computer Engineer.","Gamer." ],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    /* Skills owlslider */
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            }
            ,
            938:{
                items:4
            }
        }
    });

  

    var skillsTopOffset = $("#skills").offset().top;
    var statsTopOffset = $("#stats").offset().top;
    var countUpFinished = false;


   $(window).scroll(function(){
       if (window.pageYOffset > skillsTopOffset -$(window).height() + 200 ){
            $('.chart').easyPieChart({
                //your options goes here
                easing:'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep:  function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
        });
       }

       if ( !countUpFinished && window.pageYOffset > statsTopOffset -$(window).height() + 200 ){

        $(".counter").each(function(){
            var element = $(this);
            var endVal= parseInt(element.text());
    
            element.countup(endVal);
       });
            countUpFinished = true;
       }
    });
       $("[data-fancybox]").fancybox();


       var $items = $(".items").isotope({
           filter: '*',
           animationOptions: {
               duration: 1500,
               easing: 'linear',
               queue: false, 
              
           }
       });
    
        $items.imagesLoaded().progress(function(){
            $items.isotope('layout');
        });
   
       $("#filters a").click(function() {
   
           $("#filters .current").removeClass("current");
           $(this).addClass("current");
   
           var selector = $(this).attr("data-filter");
   
           $(".items").isotope({
               filter: selector,
               animationOptions: {
                   duration: 1500,
                   easing: 'linear',
                   queue: false ,
                   
               }
           });
   
           return false;
       });


       const nav =$("#navigation");
       const navTop = nav.offset().top;
       

       $(window).on("scroll", stickyNavigation);

       function stickyNavigation() {

        var body = $("body");
         
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
       }


        //Closes responsive menu when a scroll trigger link is clicked
        $('.nav-link').click(function(){
            $('.navbar-collapse').collapse('hide');
        });

         //Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target:'#navigation',
            offset: 70
        });

       

       

    /***********************************SmoothScroll************************************************/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
   


  


   


    
});

