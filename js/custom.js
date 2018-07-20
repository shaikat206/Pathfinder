$(document).ready(function(){
    
    //For slick banner slider
    
    $('.slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow:$('#full_banner i.nxt'),
    prevArrow:$('#full_banner i.prv'),
    speed: 2000,
  });
    
    
    //For slick notice slider
    
    $('.slick_notice_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 2000,
  });
    
    /*--------------------------
	 testmonial slide js active
	---------------------------- */
     $('.slick-syncing').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.center-mode',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            centerPadding:'0px',
          }
        }
      ]
    });
    $('.center-mode').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slick-syncing',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding:'0px',
      autoplay:true,
      autoplaySpeed:5000,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
            centerPadding:'0px',
          }
        }
      ]
    });
    
    //counter up
    
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    
    
    //For isotope
    
    $('.main_filter').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
    });
    
    $('.btnn').click(function(){
        $('.btnn').removeClass('active');
        $(this).addClass('active');
        
        var selector = $(this).attr('data-filter');
        $('.main_filter').isotope({
            filter: selector
        });
        
        return false;
    });
    
    
    // FOR TYPE JS

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};
    
});

