var nav = document.getElementById("nav"),
    menuButton = document.getElementById("menuButton"),
    menu = $(".menu"),
    body = document.body,
    li = $('li'),
    a,
    liSelected,
    listener = new window.keypress.Listener(),
    count = 0;

function init() {
    console.log(count);
    if(localStorage.getItem("menuStatus") === "open") {
        console.log("TRUE");
        openMenu();
    } 
    else if(localStorage.getItem("menuStatus") === "closed") {
        console.log("FALSE");
        closeMenu();
    } else {
        linkText.hide();
    }
    
    //if(nav.className === "menuClosed") {
    //    linkText.hide();
    //} else {
    //    linkText.show();
    //    if(liSelected) {
    //        liSelected.removeClass('selected');
    //    }
    //}
}

menuButton.onclick = function() {
    if(nav.className === "menuClosed") {
        openMenu();
    } else {
        closeMenu();
    }
};

body.onclick = function(e) { 
   if( e.which == 2 ) {
        e.preventDefault();
        if(nav.className === "menuClosed") {
            openMenu();
        } else {
            closeMenu();
        }
   }
};



listener.simple_combo("num_divide", function() {
    if(nav.className === "menuClosed") {
        openMenu();
    } else {
        closeMenu();
    }
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



function openMenu() {
    nav.className = "menuOpen";
    menu.show();
    localStorage.setItem("menuStatus", "open");
}

function closeMenu() {
    nav.className = "menuClosed";
    menu.hide();
    localStorage.setItem("menuStatus", "closed");
    if(liSelected) {
        liSelected.removeClass('selected');
    }
}

window.onload = function() {
    init();
};