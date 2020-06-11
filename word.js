$('button').click(function(){
  let counted=$("#len").val();
  $("#wordsLeft").html(counted);
});
$('button, input').keyup(function(e){
      if(e.which == 13){
          $('button').click();
      }
  });
  const wer ="(Word limit Exceeded)";
  $('textarea').on('keydown keyup mousedown',function(){
    let counted=$("#len").val();
    let now=$("#word").val();
    $("#charCount").html(now.length);
    now=now.match(/\w+/g);
    if(now===null){
    now=0;
  }
    else{
    now=now.length;
  }
      $("#wordCount").html(now);
   let wLeft=counted-now;
   if(wLeft<0){

     $("#wordsLeft").html(wLeft+" "+wer.fontsize(4));
  }
    else {
      $("#wordsLeft").html(wLeft);
    }
  });
  let year=new Date().getFullYear();
  $('.foot span').html(year);
  $(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });
