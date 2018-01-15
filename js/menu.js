$(document).ready( function() {


    $.ajax({
            type: 'GET',
            url: '/static/categorias/contenidoEstatico/landings/Verano/menu.shtml?1111113',
            success: function (data) {
                 $('#menu').append(data);

                $('.link').click(function() {
                    if(!$(this).hasClass("active")){
                        $(this).addClass('active');
                        $(this).find("span").removeClass('glyphicon glyphicon-menu-down');
                        $(this).find("span").addClass('glyphicon glyphicon-menu-up');
                        $(this).find("label").css('color', '#dd0021');
                        $(this).find("span").css('color', '#dd0021');
                        $(this).next().css('display', 'block');
                    }else{
                        $(this).removeClass("active");
                        console.log("out");
                        $(this).find("span").removeClass('glyphicon glyphicon-menu-up');
                        $(this).find("span").addClass('glyphicon glyphicon-menu-down');
                        $(this).find("span").css('color', '#595959');
                        $(this).find("label").css('color', '#595959');
                        $(this).next().css('display', 'none');
                    }
                });
                $('.close').click(function() {
                    $('.modal').modal('hide'); 
                });

                $(window).scroll(function(e){
                    //mySwiper.update();
                    if ($(window).scrollTop() > 100){
                        $("#menu-navbar-collapse").addClass("menu-navbar-fixed");
                    }
                    else {
                        $("#menu-navbar-collapse").removeClass("menu-navbar-fixed");
                    }
                });

                
               

                //var veranoMen = document.querySelector('.list-one, .list-two, .list-three, .list-four, .list-five, .list-six').swiper;

                 var optionsSlider1 = {
                        init: true,
                        slidesPerView: 5,
                        spaceBetween: 1,
                        centeredSlides: false, 
                        resizeReInit: true,
                        navigation: {
                            nextEl: '.swiper-button-next1',
                            prevEl: '.swiper-button-prev1',
                        }                   
                    };
                  var optionsSlider2 = {
                        init: true,
                        slidesPerView: 5,
                        spaceBetween: 1,
                        centeredSlides: false, 
                        resizeReInit: true, 
                        navigation: {
                            nextEl: '.swiper-button-next2',
                            prevEl: '.swiper-button-prev2',
                        }                       
                    };
                  var optionsSlider3 = {
                        init: true,
                        slidesPerView: 5,
                        spaceBetween: 1,
                        centeredSlides: false, 
                        resizeReInit: true, 
                        navigation: {
                            nextEl: '.swiper-button-next3',
                            prevEl: '.swiper-button-prev3',
                        }                       
                    };

                  var optionsSlider4 = {
                        init: true,
                        slidesPerView: 5,
                        spaceBetween: 1,
                        centeredSlides: false, 
                        resizeReInit: true, 
                        navigation: {
                            nextEl: '.swiper-button-next4',
                            prevEl: '.swiper-button-prev4',
                        }                          
                  };

               
                  var optionsSlider5 = {
                        init: true,
                        slidesPerView: 5,
                        spaceBetween: 1,
                        centeredSlides: false, 
                        resizeReInit: true, 
                        navigation: {
                            nextEl: '.swiper-button-next5',
                            prevEl: '.swiper-button-prev5',
                        }                       
                    };
                  var optionsSlider6 = {
                        init: true,
                        slidesPerView: 5,
                        spaceBetween: 1,
                        centeredSlides: false, 
                        resizeReInit: true, 
                        navigation: {
                            nextEl: '.swiper-button-next6',
                            prevEl: '.swiper-button-prev6',
                        }                       
                    };



                $('#menu-navbar-collapse').find('.nav .list.groupless1').hover(function() {                   
                    /* Stuff to do when the mouse enters the element */   
                    
                    $veranoMen1 = new Swiper ('.list-one', optionsSlider1);

                    setTimeout(function(){
                        $veranoMen1.destroy();
                    }, 100);
                    setTimeout(function(){
                        $veranoMen1 = new Swiper ('.list-one', optionsSlider1);
                    }, 100);
                                    
                    
                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    if($veranoMen1){
                        $veranoMen1.destroy();
                        $veranoMen1 = undefined;
                    }                   
                });

                $('#menu-navbar-collapse').find('.nav .list.groupless2').hover(function() {
                    /* Stuff to do when the mouse enters the element */
                    $veranoMen2 = new Swiper ('.list-two', optionsSlider2); 
                    setTimeout(function(){
                        $veranoMen2.destroy();
                    }, 100);
                    setTimeout(function(){
                        $veranoMen2 = new Swiper ('.list-two', optionsSlider2);
                    }, 100);

                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    if($veranoMen2){
                        $veranoMen2.destroy();
                        $veranoMen2 = undefined;
                    }
                });

                $('#menu-navbar-collapse').find('.nav .list.groupless3').hover(function() {
                    /* Stuff to do when the mouse enters the element */
                       $veranoMen3 = new Swiper ('.list-three', optionsSlider3);

                       setTimeout(function(){
                            $veranoMen3.destroy();
                       }, 100);
                       setTimeout(function(){
                            $veranoMen3 = new Swiper ('.list-three', optionsSlider3);
                       }, 100);

                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    if($veranoMen3){
                        $veranoMen3.destroy();
                        $veranoMen3 = undefined;
                    }
                });

                 

                $('#menu #menu-navbar-collapse .nav .list.groupless4').hover(function() {
                        /* Stuff to do when the mouse enters the element */
                        
                       $veranoMen4 = new Swiper ('.list-four', optionsSlider4);

                       setTimeout(function(){
                            $veranoMen4.destroy();
                       }, 100);
                       setTimeout(function(){
                            $veranoMen4 = new Swiper ('.list-four', optionsSlider4);
                       }, 100);

                }, function() {
                        /* Stuff to do when the mouse leaves the element */
                        if($veranoMen4){
                            $veranoMen4.destroy();
                            $veranoMen4 = undefined;
                        }
                });
          

                $('#menu-navbar-collapse').find('.nav .list.groupless5').hover(function() {
                    /* Stuff to do when the mouse enters the element */
                   $veranoMen5 = new Swiper ('.list-five', optionsSlider5); 
                    
                   setTimeout(function(){
                       
                        if($veranoMen5){
                             $veranoMen5.destroy();
                        }
                   }, 100);
                   setTimeout(function(){
                        $veranoMen5 = new Swiper ('.list-five', optionsSlider5);
                   }, 100);

                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    if($veranoMen5){
                      $veranoMen5.destroy();
                      $veranoMen5 = undefined;
                    }
                });

             

                $('#menu-navbar-collapse').find('.nav .list.groupless6').hover(function() {
                    /* Stuff to do when the mouse enters the element */
                    $veranoMen6 = new Swiper ('.list-six', optionsSlider6); 
                    setTimeout(function(){
                        $veranoMen6.destroy();
                   }, 100);
                   setTimeout(function(){
                        $veranoMen6 = new Swiper ('.list-six', optionsSlider6);
                   }, 100);

                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    if($veranoMen6){
                        $veranoMen6.destroy();
                        $veranoMen6 = undefined;
                    }
                });



            }
        }); //fin de ajax

          

       


});
