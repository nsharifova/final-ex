let carNew=document.querySelector("#carNew");

window.onscroll = function() {

    var imgBox = document.getElementById('img1');
    if ( window.pageYOffset > 600 ) {
        imgBox.classList.add("visible");
        imgBox.style.transform="translateX(0px)";
        } 
};

/////////////////////////////////////////////////////////////////////////////////////////////////////


$('.my-slider').slick({
    dots: true,
    infinite: true,
      prevArrow: false,
  nextArrow: false,
    slidesToShow: 3,
    slidesToScroll: 3,
      responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });
///////////////////////////////QUESTION/////////////////////////////////////////////////////////////////


  $(".accordion .accordion-item .second").click(function () {

    $(this).toggleClass("active")
    $(".accordion .accordion-item .accordion-content").slideUp();


    $(this).next().stop().toggle(500);

})

///////////////////////////////////////////////////////////////////////////////////////////////////////
let slider=document.querySelectorAll(".slider");

$('.slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});


///////////////////////////////////////////////////////////////////////////////////////
let sliderBig=document.querySelectorAll(".sliderBig");
$('.sliderBig').slick({
  dots:true,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
////////////////////////////////////////////////////////////////////////////////////////////////
let secondSlider=document.querySelectorAll(".secondSlider");
$('.secondSlider').slick({  
  infinite: true,
  dots:true,
  nextArrow:false,
  prevArrow:false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

////////////////////////////////////////////////////////////////////////////////////
var $grid = $('.allDetail').isotope({
  // options
});
// filter items on button click
$('.box2').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
/////////////////////////////////////////////////////////////////////
		


$(".pBox").ready(function(){
  $(".footButton button").click(function(){
    $(".pBox").toggle(900);
  });
});

$(".myp").ready(function(){
  $(".footBox button").click(function(){
    $(".myp").toggle(900);
  });
});
