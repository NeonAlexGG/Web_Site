window.addEventListener('scroll', function() {
    const header = document.querySelector("header");
    header.classList.toggle('scrolled', window.scrollY > 0);
  });

  $(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            $('.header_logo').css('color', '#000');
        } else {
            $('.header_logo').css('color', '#fff');
        }
    });
});
$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 0) {
          $('.nav_link').css('color', '#000');
      } else {
          $('.nav_link').css('color', '#fff');
      }
  });

  

});


/*Collapse*/
$(function() {
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active_item")
    });
});


