var nav = $(".navigation"),
    wrapper = document.getElementById("wrapper"),
    menuButton = document.getElementById("menuButton"),
    header = document.getElementById("topbar"),
    menu = $(".menu"),
    body = document.body,
    li = $('li'),
    a,
    listArray,
    liSelected,
    listener = new window.keypress.Listener(),
    count = 0;

function init() {
    listArray = document.getElementsByClassName('likeyboard');
    
    console.log(count);
    if(localStorage.getItem("menuStatus") === "open") {
        console.log("TRUE");
        
        
        if($(window).width() > 700) {
            nav.removeClass('nav-hidden');
            header.style.right = "300px";
        } else {
            wrapper.style.position = 'inline-block';
            wrapper.style.left = '0px';
        }
    } 
    else if(localStorage.getItem("menuStatus") === "closed") {
        console.log("FALSE");
        nav.addClass('nav-hidden');
        
        header.style.right = "0px";
        localStorage.setItem("menuStatus", "closed");
        wrapper.style.position = 'table-cell';
        wrapper.style.left = '0px';
    }
}

menuButton.onclick = function() {
    toggleMenu();
    //if(nav.hide()) {
    //    openMenu();
    //} else {
    //    closeMenu();
    //}
};

body.onclick = function(e) { 
   if( e.which == 2 ) {
        e.preventDefault();
        toggleMenu();
   }
};

$(document).bind('keyup', function(e){
    // Numpad divide
    if(e.which==111) {
      toggleMenu();
    }
    // Numpad 8
    if(e.which==104) {
        if(localStorage.getItem("menuStatus") === "open") {
            
            var storedCount = localStorage.getItem("select") || 0;
            //count = JSON.parse(storedCount);
            
            if(count === 0) {
                console.log("TRIGGER");
                listArray[count].className = "likeyboard";
                count = listArray.length - 1;
            }

            if(listArray[count].className === 'likeyboard selected'){
                console.log("selected");
                listArray[count].className = "likeyboard";
                count -= 1;

                localStorage.setItem("select", count);

                listArray[count].className += " selected";
            } else {
                console.log("Not selected");

                listArray[count].className += " selected";
            }
            console.log(count, listArray.length);
        }
    }
    // Numpad 2
    if(e.which==98) {
      if(localStorage.getItem("menuStatus") === "open") {
            
            var storedCount = localStorage.getItem("select") || 0;
            //count = JSON.parse(storedCount);
            
            if(listArray.length <= count + 1) {
                console.log("TRIGGER");
                listArray[count].className = "likeyboard";
                count = 0;
            }

            if(listArray[count].className === 'likeyboard selected'){
                console.log("selected");
                listArray[count].className = "likeyboard";
                count += 1;

                localStorage.setItem("select", count);

                listArray[count].className += " selected";
            } else {
                console.log("Not selected");

                listArray[count].className += " selected";
            }
            console.log(count, listArray.length);
        }
    }
    // Numpad 5
    if(e.which==101) {
        a = $("a",listArray[count]).attr('href');
        window.open(a,"_self");
    }
    // Numpad 4
    if(e.which==100) {
        console.log("back");
        history.back();
    }
    // Numpad 6
    if(e.which==102) {
        console.log("forward");
        history.forward();
    }
});

function liSelecter() {
  
}


/*
listener.simple_combo("num_7", function() {
    nav.toggleClass('table-hidden');
});

listener.simple_combo("num_2", function() {
    //if(nav.className === "menuOpen") {
        var storedCount = localStorage.getItem("select");
        count = JSON.parse(storedCount);
        if(liSelected){
            
            liSelected.removeClass('selected');
            next = liSelected.next();
            if(next.length > 0){
                liSelected = next.addClass('selected');
            }else{
                liSelected = li.eq(0).addClass('selected');
            }
            
            count +=1;
            if(count > li.length - 1) {
                count = 0;
            }
            console.log(count);
            
            localStorage.setItem("select", count);
            
        }else{
            liSelected = li.eq(count).addClass('selected');
        }
        
    //}
});

listener.simple_combo("num_8", function() {
    //if(nav.className === "menuOpen") {
        var storedCount = localStorage.getItem("select");
        count = JSON.parse(storedCount);
        if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.prev();
            if(next.length > 0){
                liSelected = next.addClass('selected');
            }else{
                liSelected = li.last().addClass('selected');
            }
            
            count -=1;
            if(count < 0) {
                count = li.length - 1;
            }
            console.log(count);
            
            localStorage.setItem("select", count);
            
        }else{
            liSelected = li.eq(count).addClass('selected');
        }
        
    //}
});

listener.simple_combo("num_5", function() {
    a = $("a",liSelected).attr('href');
    window.open(a,"_self");
    //console.log("test", a);
    //console.log(localStorage.getItem("select"));
});

listener.simple_combo("num_4", function() {
    history.back();
});

listener.simple_combo("num_6", function() {
    history.forward();
});
*/

function toggleMenu() {
    nav.toggleClass('nav-hidden');
    if(nav.hasClass('nav-hidden')) {
        header.style.left = '0px';
        header.style.right = "0px";
        wrapper.style.position = 'table-cell';
        wrapper.style.left = '0px';
        localStorage.setItem("menuStatus", "closed");
    } else {
        if($(window).width() > 700) {
            header.style.right = "300px";
            localStorage.setItem("menuStatus", "open");
        } else {
            header.style.left = '-300px';
            wrapper.style.position = 'absolute';
            wrapper.style.left = '-300px';
            //document.ontouchmove = function(e){ 
            //    e.preventDefault(); 
            //};
            jQuery('#container').bind('touchmove', function(e){e.preventDefault()});
        }
        
    }
    console.log(localStorage.getItem("menuStatus"));
}

window.onload = function() {
    init();
};