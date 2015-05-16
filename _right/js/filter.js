var columnStart = document.getElementById("columnStart");
var columnShoes = document.getElementById("columnShoes");
var headerShoes = document.getElementById("headerShoes");
var columnMovies = document.getElementById("columnMovies");
var headerMovies = document.getElementById("headerMovies");
var columnMusic = document.getElementById("columnMusic");
var headerMusic = document.getElementById("headerMusic");

$(".homelink").click(function(){
    columnStart.className = "start";
    columnShoes.className = "hidden";
    headerShoes.className = "hidden";
    columnMovies.className = "hidden";
    headerMovies.className = "hidden";
    columnMusic.className = "hidden";
    headerMusic.className = "hidden";
    
});

$(".shoelink").click(function(){
    columnStart.className = "hidden";
    columnMovies.className = "hidden";
    headerMovies.className = "hidden";
    columnMusic.className = "hidden";
    headerMusic.className = "hidden";
    columnShoes.className = "";
    headerShoes.className = "pageFilters";
});

$(".movielink").click(function(){
    columnStart.className = "hidden";
    columnShoes.className = "hidden";
    headerShoes.className = "hidden";
    columnMusic.className = "hidden";
    headerMusic.className = "hidden";
    columnMovies.className = "";
    headerMovies.className = "pageFilters";
});

$(".musiclink").click(function(){
    columnStart.className = "hidden";
    columnShoes.className = "hidden";
    headerShoes.className = "hidden";
    columnMovies.className = "hidden";
    headerMovies.className = "hidden";
    columnMusic.className = "";
    headerMusic.className = "pageFilters";
});