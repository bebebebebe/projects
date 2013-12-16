$(document).ready(function() {

  $('#projects-list').on("mouseenter", "li", function () {
    $(this).children('.project-description').css('color', 'black');
    $(this).children('.project-description').css('background', 'rgba(255,255,255,0.5)');
    $(this).children('.project-title').css('font-weight', 'bold');
    $(this).children('img').css('visibility', 'visible');
  });
  $('#projects-list').on("mouseleave", "li", function () {
    $('.project-title').css('font-weight', '');
    $('.project-description').css('color', '#939393');
    $(this).children('.project-description').css('background', '');
    $(this).children('img').css('visibility', '');
  });


  ////////////////

//   $('.project').on({
//     mouseenter: function () {
//         $(this).children('.project-description').css('color', 'black');
//         $(this).children('.project-title').css('font-weight', 'bold');
//     },
//     mouseleave: function () {
//         $('.project-title').css('font-weight', '');
//         $('.project-description').css('color', '#939393');
//     }
//   });

//   $('#visualschemer').on({
//     mouseenter: function () {
//       $('#picture').html("<img src='pictures/schemetree.jpg'/>");
//     },
//     mouseleave: function () {
//       $('#picture').html("<p>An overview of my programming projects with links to demos/deployed apps.</p><p><a href='https://github.com/bebebebebe'>GitHub profile</a></p>");
//     }
//   });

//   $('#street').on({
//     mouseenter: function () {
//      $(this).children('.project-description').css('background', 'rgba(255,255,255,0.5)');
//     },
//     mouseleave: function () {
//       $(this).children('.project-description').css('background', '');
//     }
//   });

//     $('#memory').on({
//     mouseenter: function () {
//      $('#picture').html("<img src='pictures/memory.png'/>");
// //     $(this).children('.project-description').css('background', 'rgba(255,255,255,0.5)');
//     },
//     mouseleave: function () {
//       $('#picture').html("<p>An overview of my programming projects with links to demos/deployed apps.</p><p><a href='https://github.com/bebebebebe'>GitHub profile</a></p>");
//       $(this).children('.project-description').css('background', '');
//     }
//   });

});