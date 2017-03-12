$(document).ready(function() {
  console.log('Document Ready');
  var theme = 'ligth';

  function newTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  $('.github').click(() => {
    newTab('https://github.com/Rawnly')
  })

  $('.twitter').click(() => {
    newTab('https://twitter.com/RawnlyDev')
  })

  $('.reddit').click(() => {
    newTab('https://www.reddit.com/user/Rawnly')
  })

  function genRandom() {
    var letters = '9ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    var _ligthness = Math.floor(jQuery.Color(color).lightness() * 10 ) / 10;

    if ( _ligthness > 0.5 ) {
      return color
    }
  }

  function rColor() {
    var color = 'hsl('+Math.floor(Math.random()*361)+',50%,75%)'

    if ( $.Color(color).lightness() >= 0.5 ) {
      return color
    } else {
      console.log('Color is too dark!')
    }

  }

  console.log(genRandom());

  function normalMode() {
    if (theme == 'ligth') {
      $('#hint').show()
      $('header .glyphicon').css('color', '#000')

      $('header h1')
      .css('color', '#000')
      .removeClass('dark')
      .addClass('light');

      $('footer').css({
        "color": "#fff",
        "background": "#000"
      })

      $('header')
      .css('background', '#fff')
      .css('height', '100vh')
    }
  }

  function sunGlassesMode() {
    if (theme=='ligth') {
      $('#hint').fadeOut()
      $('header .glyphicon').css('color', '#fff')

      $('header h1')
      .css('color', '#fff')
      .removeClass('light')
      .addClass('dark');

      $('header')
      .css('background','#000')
      .css('height','85vh')

      $('footer').css({
        "color": "#000",
        "background": "#fff"
      })
    }
  }

  function switchTheme() {
    if ( theme == 'ligth') {
      theme = 'dark'
      $('#sunglasses').css('color', genRandom || rColor)
    } else {
      theme = 'ligth'
      $('#sunglasses').css('color', '#fff')
    }
  }





  $('#sunglasses').hover(sunGlassesMode, normalMode).click(switchTheme)
});
