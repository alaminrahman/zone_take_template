$(document).ready(function(){
     $('.same_day_price').click(function(){
          $('.same_day_hide_show').removeClass('d-none');
          $('.regular_day_hide_show').addClass('d-none');
          $('.next_day_hide_show').addClass('d-none');

     })

     $('.regular_day_price').click(function(){
          $('.same_day_hide_show').addClass('d-none');
          $('.regular_day_hide_show').removeClass('d-none');
          $('.next_day_hide_show').addClass('d-none');

     })

     $('.next_day_price').click(function(){
          $('.same_day_hide_show').addClass('d-none');
          $('.regular_day_hide_show').addClass('d-none');
          $('.next_day_hide_show').removeClass('d-none');

     })


})
