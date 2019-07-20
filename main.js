$(window).on("scroll", function() {
    if($(window).scrollTop() > 500) {
        $(".Header nav").addClass("active");
    } else {
       $(".Header nav").removeClass("active");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 500) {
        $(".Header button").addClass("active");
    } else {
       $(".Header button").removeClass("active");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 500) {
        $(".Header button:hover").addClass("active");
    } else {
       $(".Header button:hover").removeClass("active");
    }
});





     $(document).ready(function (){
            $(".click1").click(function (){
                $('html, body').animate({
                    scrollTop: $(".Main-1").offset().top
                }, 2000);
            });
        });

     $(document).ready(function (){
            $(".click2").click(function (){
                $('html, body').animate({
                    scrollTop: $(".Main-2").offset().top
                }, 2000);
            });
        });

     $(document).ready(function (){
            $(".click3").click(function (){
                $('html, body').animate({
                    scrollTop: $(".container").offset().top
                }, 2000);
            });
        });

     $(document).ready(function (){
            $(".click4").click(function (){
                $('html, body').animate({
                    scrollTop: $(".ABOUT-ME").offset().top
                }, 2000);
            });
        });



     $(document).ready(function (){
            $(".click5").click(function (){
                $('html, body').animate({
                    scrollTop: $(".ABOUT-ME2").offset().top
                }, 2000);
            });
        });
