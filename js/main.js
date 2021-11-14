window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

  var c = document.getElementById("myCanvas");
  var co = document.getElementById('container1');
  var margin = 20
  c.width = document.getElementById('fullscreen1').scrollWidth - margin
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF8080";
  ctx.fillRect(0,0,co.offsetWidth, co.offsetHeight);