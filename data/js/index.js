// Birthday Counter
var countDownDate = new Date("Jul 15, 2023 00:00:00").getTime();
            
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    
  document.getElementById("BIRTHDAY").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + "Until My Birthday 🎉";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("BIRTHDAY").innerHTML = "Its My Birthday! 🎉";
  }
}, 1000);

// AUDIO
function audioPlay() {
    var audio = document.getElementById("audio");
    audio.volume = 0.08;
    audio.play()
}
function videoPlay() {
  var video = document.getElementById("video");
  video.play()
}
// dont
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  })
    
  document.onkeypress = function (event) {  
  event = (event || window.event);  
  if (event.keyCode == 123) {  
  return false;  
  }  
        if(event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
      if(event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) {
       return false;
      }
      if(event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) {
       return false;
  }  
  }
  document.onmousedown = function (event) {  
  event = (event || window.event);  
  if (event.keyCode == 123) {  
  return false;  
  }  
        if(event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
      if(event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) {
       return false;
      }
      if(event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) {
       return false;
  }  
  }
  document.onkeydown = function (event) {  
  event = (event || window.event);  
  if (event.keyCode == 123) {  
  return false;  
  }  
      if(event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
      if(event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) {
       return false;
      }
      if(event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) {
       return false;
  }  
  }
  function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
  }