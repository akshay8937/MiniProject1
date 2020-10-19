// Show and Hide the Menu

function showhidemenu(){
    let mn=document.querySelector('.navbar-nav')
    if(mn.style.display === 'flex'){
        mn.style.display = 'none';
    }
    else{
        mn.style.display='flex';
    }
}
// Globally declared CityName variable

var cityName;

// function which get data from search box and store in local storage

$(document).ready(function(){
    $("button").click(function(){
        cityName= $("#search").val();
        localStorage.setItem('cityName', cityName);
        console.log(cityName);
    })
})
