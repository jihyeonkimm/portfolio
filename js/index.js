$(document).ready(function(){

  $(window).on('scroll', function(){
    let scrollTop = $(this).scrollTop();
    const worksTop = $('.works').offset().top;
    const contactTop = $('.contact').offset().top;
    const mover = $('.section_indicator_mover');
    if(scrollTop < worksTop) {
      mover.css({'top':'0px'});
    }
    if(scrollTop > worksTop - 200 && scrollTop < contactTop) {
      mover.css({'top':'-25px'});
    }
    if(scrollTop > contactTop - 300) {
      mover.css({'top':'-50px'});
    }

    $('.hidden_bottom').each(function(){
      let bottomOfElement = $(this).offset().top; + $(this).height();
      let bottomOfWindow = $(window).scrollTop(); + $(window).height();
      if(bottomOfWindow > bottomOfElement - 700) {
        $(this).animate({'margin-top':'0','opacity':'1'},1000);
      }
    });
  });

  $('.nav_home').on('click',function(){
    const home = $('.main').offset().top;
    $('html').animate({scrollTop : home}, 1000);
  })
  $('.nav_works').on('click',function(){
    const works = $('.works').offset().top;
    $('html').animate({scrollTop : works}, 1000);
  })
  $('.nav_contact').on('click',function(){
    const contact = $('.contact').offset().top;
    $('html').animate({scrollTop : contact}, 1000);
  })

  $('.hamburger').on('click',function(){
    $('.mobile_menu').toggleClass('active');
    $(this).toggleClass('on');
    $('.menu_item').toggleClass('view');
  })

  $('.menu_item').on('click',function(){
    $('.mobile_menu').removeClass('active');
    $('.hamburger').toggleClass('on');
    $('.menu_item').toggleClass('view');
  })

})