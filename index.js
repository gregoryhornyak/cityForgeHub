import earth from "./earth.json" assert {type: "json"};
import buda from "./buda.json" assert {type: "json"};
import duna from "./duna.json" assert {type: "json"};

// dark mode: background is black
// and grid is white

function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      var colour = "#"+earth["colour"];
      var coords_list = [];
      var vertices_list = [];
      for ( const [ vtx,vtx_coord ] of Object.entries(earth["vertices"])) {
        vertices_list.push(vtx)
        coords_list.push([vtx_coord["x"],vtx_coord["y"]])
      }
      
      ctx.font = "10px serif";
      ctx.beginPath();
      ctx.moveTo(coords_list[0][0],coords_list[0][1]); 
      for (var i=1; i<coords_list.length; i++) {
        ctx.lineTo(coords_list[i][0],coords_list[i][1]);
        
      }
      ctx.fillStyle = colour;
      ctx.fill();
      // again for Buda
      var colour = "#"+buda["colour"];
      var coords_list = [];
      var vertices_list = [];
      for ( const [ vtx,vtx_coord ] of Object.entries(buda["vertices"])) {
        vertices_list.push(vtx)
        coords_list.push([vtx_coord["x"],vtx_coord["y"]])
      }
      
      ctx.font = "10px serif";
      ctx.beginPath();
      ctx.moveTo(coords_list[0][0],coords_list[0][1]); 
      for (var i=1; i<coords_list.length; i++) {
        ctx.lineTo(coords_list[i][0],coords_list[i][1]);
        
      }
      ctx.fillStyle = colour;
      ctx.fill();
      // again for Duna
      var colour = "#"+duna["colour"];
      var coords_list = [];
      var vertices_list = [];
      for ( const [ vtx,vtx_coord ] of Object.entries(duna["vertices"])) {
        vertices_list.push(vtx)
        coords_list.push([vtx_coord["x"],vtx_coord["y"]])
      }
      
      ctx.font = "10px serif";
      ctx.beginPath();
      ctx.moveTo(coords_list[0][0],coords_list[0][1]); 
      for (var i=1; i<coords_list.length; i++) {
        ctx.lineTo(coords_list[i][0],coords_list[i][1]);
        
      }
      ctx.fillStyle = colour;
      ctx.fill();
      ctx.fillStyle = "#000000";
      for (var i=0; i<vertices_list.length; i++) {
        ctx.fillText(vertices_list[i], coords_list[i][0],coords_list[i][1]);  
      }
      console.log(earth["asset_name"],"printed")

      for (var i=0; i<40; i++) { // 100m grids
        ctx.fillStyle = "rgba(0, 0, 0,0.1)"//"#808080";
        ctx.fillRect(i*100,0,2,4000)
        ctx.font = "10px serif";
        ctx.fillStyle = "#000000";
        ctx.fillText((i*100).toString()+" m",i*100+4,10);  
      }
      for (var i=0; i<40; i++) { // 100m grids
        ctx.fillStyle = "rgba(0, 0, 0,0.1)"//"#808080";
        ctx.fillRect(0,i*100,4000,2)
        ctx.font = "10px serif";
        ctx.fillStyle = "#000000";
        ctx.fillText((i*100).toString()+" m",4,i*100+10,); 
      }

  }
  /*
  
    var imageObj = new Image();
    imageObj.onload = function(){
        var pattern = context.createPattern(imageObj, "repeat");
        
        context.beginPath(); // begin custom shape
        context.moveTo(170, 80);
        context.bezierCurveTo(130, 100, 130, 150, 230, 150);
        context.bezierCurveTo(250, 180, 320, 180, 340, 150);  
        context.bezierCurveTo(420, 150, 420, 120, 390, 100);
        context.bezierCurveTo(430, 40, 370, 30, 340, 50);
        context.bezierCurveTo(320, 5, 250, 20, 250, 50);
        context.bezierCurveTo(200, 5, 150, 20, 170, 80);
        context.closePath(); // complete custom shape
        
        context.fillStyle = pattern;
        context.fill();
        
    };
    imageObj.src = "https://cdn.architextures.org/textures/20/07/grass-5efe540a8d596-1250.jpg";
  
    -------

    function drawPattern(img, size) {
      var canvas = document.getElementById('canvas');

      canvas.height = 500;
      canvas.width = 500;

      var tempCanvas = document.createElement("canvas"),
        tCtx = tempCanvas.getContext("2d");

      tempCanvas.width = size;
      tempCanvas.height = size;
      tCtx.drawImage(img, 0, 0, img.width, img.height, 0, 0, size, size);

      // use getContext to use the canvas for drawing
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = ctx.createPattern(tempCanvas, 'repeat');

      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fill();

    }

    var img = new Image();
    img.src = "https://www.goodtextures.com/cache/5f1afd3c/avb45ac1c4d70766a19e7.jpg";
    img.onload = function() {
      drawPattern(this, 200);
    }


    */
}
draw();