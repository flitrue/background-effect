(function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  var canvas_width = canvas.width = window.innerWidth;
  var canvas_height = canvas.height = window.innerHeight;
  var count = 400; // 星星数量
  var stars = [];
  var img
  canvas.style.cssText = "position: fixed;left: 0;top: 0;";


  var img = new Image();
  img.src = 'img/star.png'

  var animate = function renderStr() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    stars.forEach(function(star){
      ctx.drawImage(img, star.x-star.w/2, star.y-star.w/2, star.w, star.h);
    })

    changeStar()
    var frame_func = function(func) {
      window.setTimeout(func, 9000 / 45);
    }
    frame_func(animate)
  }
  function changeStar() {
    for(var i=0;i<count;i++){
      var w = Math.ceil(3 + (Math.random() * 8));
      stars[i].w = w;
      stars[i].h = w;
    }
  }

  function starsPosition() {
    for(var i=0;i<count;i++){
      var x = Math.random() * canvas_width;
      var y = Math.random() * canvas_height;
      var w = Math.ceil(3 + (Math.random() * 5));
      stars.push({x: x, y: y, w: w, h: w});
    }
  }

  function set_canvas_size() {
    canvas_width = canvas.width = window.innerWidth;
    canvas_height = canvas.height = window.innerHeight;
  }
  starsPosition();
  animate();
  //window.onresize = set_canvas_size;
})()