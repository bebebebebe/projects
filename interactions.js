$(document).ready(function() {

  $('.project').on({
    mouseenter: function () {
        $(this).children('.project-description').css('color', 'black');
        $(this).children('.project-title').css('font-weight', 'bold');
    },
    mouseleave: function () {
        $('.project-title').css('font-weight', '');
        $('.project-description').css('color', '#939393');
    }
  });

  $('#visualschemer').on({
    mouseenter: function () {
      $('#picture').html("<img src='pictures/schemetree.jpg'/>");
      //$('#picture').css('background', 'orange');
    },
    mouseleave: function () {
      //$('#picture').css('background', '');
      $('#picture').html("<p>An overview of my programming projects with links to demos/deployed apps.</p><p><a href='https://github.com/bebebebebe'>GitHub profile</a></p>");
    }
  });


   $('#schemerb').on({
    mouseenter: function () {
     // $('#picture').css('background', 'purple');
    },
    mouseleave: function () {
      $('#picture').css('background', '');
    }
  });


});