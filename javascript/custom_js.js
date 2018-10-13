// header menu-btn query
$(".menu-btn").click(function(){
    $(".header-rgt").toggleClass("active");
})

// header navbar links

    $(".about-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#myself").offset().top},
            'slow');
    });
    $(".skills-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#myskills").offset().top},
            'slow');
    });
    $(".services-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#myservices").offset().top},
            'slow');
    });
    $(".exprnce-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#work-exprnce").offset().top},
            'slow');
    });
    $(".education-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#my-edu").offset().top},
            'slow');
    });
    $(".ceri-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#certificates").offset().top},
            'slow');
    });
    $(".projects-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#my-projects").offset().top},
            'slow');
    });



// myself section slider
$('.myselfcol-inner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// my skills section progress bar
// Display the progress bar calling progressbar.js
$('.progressbar1').progressBar({
    shadow : true,
    percentage : false,
    animation : true,
});
$('.progressbar2').progressBar({
shadow : true,
percentage : false,
animation : true,
barColor : "#527AF9",
});
$('.progressbarPhp').progressBar({
shadow : true,
percentage : false,
animation : true,
animateTarget : true,
barColor : "#52ADF9",
});
$('.progressbarGit').progressBar({
shadow : true,
percentage : false,
animation : true,
barColor : "#52ADF9",
});
$('.progressbar3').progressBar({
shadow : true,
percentage : false,
animation : true,
animateTarget : true,
barColor : "#C3B238",
});

//Menu
$(".spinDown").click(function() {
var target = $(this).data("target");
var scrollFix = -80;
target = "#" + target;
$("html,body").animate({
    scrollTop : $(target).offset().top + scrollFix
}, 1000);
return false;
});

// myskills progress bar ends


// my-education accordion start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// scroll to top of the page
// $(document).ready(function() {
    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/
  
    // declare variable
    var scrollTop = $('.scrollTop');
  
    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();
  
      // if user scrolls down - show scroll to top button
      if (topPos > 200) {
        $(scrollTop).css("opacity", "1");
  
      } else {
        $(scrollTop).css("opacity", "0");
      }
  
    }); // scroll END
  
    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
  
    }); // click() scroll top END


    // wow custom.js
//     new WOW().init();

//     wow = new WOW(
//         {
//         boxClass:     'wow',      // default
//         animateClass: 'animated', // default
//         offset:       0,          // default
//         mobile:       true,       // default
//         live:         true        // default
//       }
// )
// wow.init();