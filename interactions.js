$(document).ready(function() {

  $('.project').on({
    mouseenter: function () {
        $(this).children('.project-description').css('color', 'black');
    },
    mouseleave: function () {
        $('.project-description').css('color', '#939393');
    }
});


});