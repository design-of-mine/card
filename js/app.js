$( document ).ready(function() {

    $(".s-c-h:first-of-type").addClass('s-c');
    
    function nextSlide() { 
        let $current = $(this).siblings('.s-c-h.s-c');
        if($current.is(".s-c-h:last-of-type")){
            $current.addClass('s-c-sd');
            setTimeout(() =>{
                $current.removeClass('s-c-sd');
                $current.removeClass('s-c');
                $(this).siblings(".s-c-h:first-of-type").addClass('s-c');
            }, 200);
        } else {
        $current.addClass('s-c-sd');
            setTimeout(function(){
                $current.removeClass('s-c-sd');
                $current.removeClass('s-c');
                $current.next('.s-c-h').addClass('s-c');
                }, 200);
        };
    }
    
    function prevSlide() {
        let $current = $(this).siblings('.s-c-h.s-c');
        if($current.is(".s-c-h:first-of-type")){
            $current.addClass('s-c-sd');
            setTimeout(() =>{
                $current.removeClass('s-c-sd');
                $current.removeClass('s-c');
                $(this).siblings(".s-c-h:last-of-type").addClass('s-c');
            }, 200);
        } else {
        $current.addClass('s-c-sd');
            setTimeout(function(){
                $current.removeClass('s-c-sd');
                $current.removeClass('s-c');
                $current.prev('.s-c-h').addClass('s-c');
                }, 200);
        };
    }
    
    $('.js-next').click(nextSlide);
    $('.js-prev').click(prevSlide);
    
    
    $(window).on('load scroll', function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('scrolled');
        }else{
            $('header').removeClass('scrolled');
        }
    });


    $(".page").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
    
    
    
    
        //about show/hide
        $('.more').on('click', function(){
            $(this).siblings('.about').addClass('tr-none')
        })
        $('.closer').on('click', function(){
            $(this).parent('div').removeClass('tr-none')
        })
        
        //Font size
            // let $fSize = $('.hero-001 .container').width() / 13;
            // $('.hero-001 h1').css('font-size', ''+$fSize+'px');
            // console.log($fSize)
    
        $('.slider-001 h2').on('click', function(){
            $('.slider-001 .slide').toggleClass('cube')
        })
    
        //dropdown toggle
        $('.question').on('click', function(){
            let $pHeight = $(this).siblings('.answer').find('p').outerHeight();
            $(this).siblings('.answer').toggleClass('height')
            $(this).siblings('.answer').css({'height' : ''+$pHeight+'px'});
        })
    
        //Background parallax
        window.addEventListener('scroll', () =>{
            const move = document.querySelectorAll('.js-move')
        
                for (let i = 0; i < move.length; i++){
                    let pos = window.pageYOffset * move[i].dataset.rate
                    move[i].style.transform = 'translateY('+pos+'px)'
                }
            })
    
    });