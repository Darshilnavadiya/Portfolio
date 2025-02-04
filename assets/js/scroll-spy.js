var sections = $('section');

$(window).on('scroll',function(){

  sections.each(function(){
    
    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');
    let height = $(this).height();

    if(top >= offset && top < offset + height){
      $('.navbar a').removeClass('active');
      $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }
  })
});

// $(document).ready(function () {
//   // Select all sections and scroll-top button
//   var sections = $('section'); // All sections on the page
//   var scrollTopButton = $('.scroll-top'); // Scroll-top button

//   // Scroll event listener
//   $(window).on('scroll', function () {
//       let top = $(window).scrollTop(); // Current scroll position
//       let isScrolling;

//       // Add 'scrolling' class to body during scroll
//       $('body').addClass('scrolling');
//       clearTimeout(isScrolling);
//       isScrolling = setTimeout(() => {
//           $('body').removeClass('scrolling'); // Remove class after scrolling stops
//       }, 200); // Delay after scroll stops

//       // Highlight the active link in the navbar based on the visible section
//       sections.each(function () {
//           let offset = $(this).offset().top - 200; // Section's top offset minus buffer
//           let height = $(this).outerHeight(); // Section height
//           let id = $(this).attr('id'); // Section ID

//           if (top >= offset && top < offset + height) {
//               $('.navbar a').removeClass('active'); // Remove active class from all links
//               $('.navbar').find(`[href="#${id}"]`).addClass('active'); // Add active class to matching link
//           }
//       });

//       // Show/hide scroll-top button based on scroll position
//       if (top > 500) {
//           scrollTopButton.fadeIn(); // Show button when scrolled down 500px
//       } else {
//           scrollTopButton.fadeOut(); // Hide button when scrolled up
//       }
//   });

//   // Scroll-top button click event
//   scrollTopButton.on('click', function (e) {
//       e.preventDefault();
//       $('html, body').animate({ scrollTop: 0 }, 'slow'); // Smooth scroll to top
//   });
// });

