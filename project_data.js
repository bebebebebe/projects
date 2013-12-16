$(document).ready(function(){


  $(function  () {
    var projectsData = [
      {
        title: "Visual Schemer", 
        description: "In-browser version of SchemerB (below), with semantic visualizations. As you enter Scheme expressions in the REPL via the in-browser console, tree pictures are drawn showing the environment structure. Hovering over a node in the tree reveals the bindings present at that node. This is a Sinatra app; visualizations are made with D3.js.",
        demo: 'http://visual-schemer.herokuapp.com/',
        code: 'github.com/bebebebebe/visual-schemer',
        picture: 'pictures/schemetree.jpg' },
      {
        title:"SchemerB",
        description: "Scheme interpreter written in Ruby.",
        code: ''},
      {
        title: "Diffs", 
        description: "Ruby and JavaScript implementations of an algorithm to find the longest common subsequence to give word and character based diffs. Memoized and iterative solutions.",
        
        demo: '',
        code: ''},
      {
        title: "Memory",
        description: "JavaScript/HTML/CSS implementation of the classic memory card game. The cards (made with HTML5 Canvas) are dynamically resized depending on how many cards the user chooses to use.",
        picture: 'pictures/memory.png',
        demo: ''},
      
       {
        title: 'Writing Versions',
        description: "Ruby on Rails app for versioned modular writing, modeling stacks of index cards. When composing text on a 'card,'' you can click a 'keep version' button and continue revising. All versions are kept in a 'stack,'' with the text from each top card contributing to your document. You can change your mind about which card to select on top of a stack in a view displaying word based diffs.",
        code: '',
      },
      {
        title: 'StreetEdit',
        description: "App for finding, editing and making galleries of images from Google Street View. Uses Google Street View and Aviary Photo editing API's",
        code: '',
        picture: 'pictures/street.png'
      },
      {
        title: 'Cheating Hangman',
        description: "Ruby command line program that cheats while playing hangman. You guess letters, and the computer keeps 'changing its mind' about what the secret word is in response to your guesses.",
        code: ''
      },
      {
        title: 'Markov Parody Generator',
        description: "Ruby program that generates a 'parody' text from a Project Gutenberg text, with title and author information extracted from the source. The Markov chain's prefix length can be varied, as can the number of paragraphs in the generated text.",
        code: ''
      }
    ];


    var theTemplateScript = $("#projects-template").html();

    var theTemplate = Handlebars.compile(theTemplateScript);
    $('#projects-list').append(theTemplate(projectsData));

  });

});