window.onscroll = function(){

    
    var x = $($('body')).scrollTop();
    $('body').css('background-position', '0% ' + parseInt(-x / 10) + 'px');
    //console.log("scrolling ", x);

};