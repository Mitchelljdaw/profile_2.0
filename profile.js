$(document).ready(function(){
  var sideReturn = $('#hiddenWeb');
  var navbar = $('.navbar');
    $('#project1').click(function(){
      sideReturn.css('display', 'inline-block');
      navbar.css('display', 'none');
    	var hidden = $('#caitlynsPage');
        hidden.show('slide', {direction: 'right'}, 900);
    });
    $('#project3').click(function(){
      sideReturn.css('display', 'inline-block');
      navbar.css('display', 'none');
    	var hidden = $('#battle');
        hidden.show('slide', {direction: 'right'}, 900);
    });
    $('#project2').click(function(){
      sideReturn.css('display', 'inline-block');
      navbar.css('display', 'none');
    	var hidden = $('#tansey');
        hidden.show('slide', {direction: 'right'}, 900);

    });
    /*$('#project1').click(function(){
    	var hidden = $('#caitlynsPage');
        hidden.show('slide', {direction: 'left'}, 400);
    });*/
    sideReturn.click(function (){
      if($('#caitlynsPage').css('display') !== 'none'){
        var hidden = $('#caitlynsPage');
          hidden.hide('slide', {direction: 'right'}, 900);
      }
      else if($('#battle').css('display') !== 'none'){
        var hidden = $('#battle');
          hidden.hide('slide', {direction: 'right'}, 900);
      }
      else{
        var hidden = $('#tansey');
          hidden.hide('slide', {direction: 'right'}, 900);
      }
      setTimeout(function(){
        navbar.show('slide', {direction: 'left'}, 900);
        sideReturn.hide('slide', {direction: 'left'}, 300);
        $('.vertical').css('color', 'white');
      }, 900);
    });
    $('.vertical').hover(function(){
      var colorOne = '#2db285';
      var colorTwo = '#0077b5';
      var colorThree = '#3b5998';
      var colorFour = '#bc2a8d';
      var colorFive = '#cc181e';
      var rColor;
      var number = (Math.floor(Math.random() * 6) + 1);
      //var rColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      if(number === 1){
        rColor = colorOne;
      }
      else if(number === 2){
        rColor = colorTwo;
      }
      else if(number === 3){
        rColor = colorThree;
      }
      else if(number === 4){
        rColor = colorFour;
      }
      else{
        rColor = colorFive;
      }
      $(this).css('color', rColor);
      $(this).css('cursor', 'pointer');
    })
    var r = 0;
    $('.letters').hover(function(){
      this.style.webkitTransform = 'rotate('+(r += 360)+'deg)';
      this.style.mozTransform    = 'rotate('+(r += 360)+'deg)';
      this.style.msTransform     = 'rotate('+(r += 360)+'deg)';
      this.style.oTransform      = 'rotate('+(r += 360)+'deg)';
      this.style.transform       = 'rotate('+(r += 360)+'deg)';
    })
});
