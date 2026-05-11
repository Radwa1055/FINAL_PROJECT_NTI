$(document).ready(function(){
    $(".blog-carousel").owlCarousel({
        loop: true,       
        margin: 30,        
        nav: false,        
        dots: false,       
        responsive: {   
            0: {
                items: 1   
            },
            768: {
                items: 2  
            },
            1000: {
                items: 3  
            }
        }
    });
});