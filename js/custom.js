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


function readURL(input) {
     if (input.files && input.files[0]) {
   
       var reader = new FileReader();
   
       reader.onload = function(e) {
         $('.image-upload-wrap').hide();
   
         $('.file-upload-image').attr('src', e.target.result);
         $('.file-upload-content').show();
   
         $('.image-title').html(input.files[0].name);
       };
   
       reader.readAsDataURL(input.files[0]);
   
     } else {
       removeUpload();
     }
   }
   
   function removeUpload() {
     $('.file-upload-input').replaceWith($('.file-upload-input').clone());
     $('.file-upload-content').hide();
     $('.image-upload-wrap').show();
   }
   $('.image-upload-wrap').bind('dragover', function () {
       $('.image-upload-wrap').addClass('image-dropping');
     });
     $('.image-upload-wrap').bind('dragleave', function () {
       $('.image-upload-wrap').removeClass('image-dropping');
   });


  // Start Profile Edit
  $('#profile_edit').click(function(){
    $(this).addClass('d-none');
    $('#profile_update').removeClass('d-none');
    $('#name').removeAttr('readonly');
    $('#email').removeAttr('readonly');
    $('#mobile').removeAttr('readonly');
    $('#address').removeAttr('readonly');

  })


  // End Profile Edit