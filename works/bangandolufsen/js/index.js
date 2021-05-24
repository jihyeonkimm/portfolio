$(document).ready(function(){

  const main = $('.main_image');
  const fadeInLeft = $(main).find('.hidden_left');
  const fadeInTop = $(main).find('.hidden_bottom');

  function mainScale(){
    $(main).addClass('active');
    $(fadeInLeft).removeClass('hidden_left');
    $(fadeInTop).removeClass('hidden_bottom');
    $('.btn_back').css({'opacity':'1'});
    $('.object').css({'opacity':'1'});
  };

  mainScale();

  $(window).on('scroll',function(){
    const btn = $('.btn_back');
    let mainH = $(main).height();
    let sct = $(this).scrollTop();
    if(sct>mainH) {
      $(btn).css({'color':'#000'});
    }
    else{
      $(btn).css({'color':'#fff'});
    }

    $('.hidden_bottom').each(function(){
      let bottomOfElement = $(this).offset().top; + $(this).height();
      let bottomOfWindow = $(window).scrollTop(); + $(window).height();
      console.log(bottomOfElement);
      console.log(bottomOfWindow);
      if(bottomOfWindow > bottomOfElement - 500) {
        $(this).animate({'margin-top':'0','opacity':'1'},1000);
      }
    });

  });

});