function drawRectangle(){
                    var canvas = document.getElementById("home-score-el");
                if (canvas.getContext) 
                {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle='#fa4b2a';    // color of fill
                ctx.fillRect(82, 125, 155, 160); // create rectangle  
                }
}