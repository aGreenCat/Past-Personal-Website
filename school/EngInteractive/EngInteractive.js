var pgs;
var cover;

function preload() {
   pgs = new Array(6);
   for (i = 1; i <= 6; i++) {
     pgs[i-1] = loadImage('data/' + i + '.png');
   }
   
   cover = loadImage('data/coverResized.jpg');
}

function setup() {
  formatCanvas();
  createArticle();
  
  off = 70 - windowHeight/2;
  h = height;
  turn = 0;
}

function windowResized() {
  formatCanvas();
}


var off;
var x, y, w, h;
var pic;
var turn, page;

var spacing = 150;

//misc
var init;
var h2;

function draw() {
  background("#FFFFFF");
  
  if (window.pageYOffset < 70) {
    page = 0;
    if (turn != page) {
      if (turn < page) {
        //Do stuff here
      }
      turn = page;
      console.log(page);
    }
    
    pic = cover;
    h += 0.1*(height-spacing - h);
    w = h*pic.width/pic.height;
    
    x = width/2 - w/2;
    y = height/2 - h/2;
  } else if (window.pageYOffset < off + windowHeight) {
    page = 1;
    if (turn != page) {
      if (turn < page) {
        init = window.pageYOffset;
      }
      turn = page;
      console.log(page);
    }
    
    pic = cover;
    y = height/2 - h/2 - (window.pageYOffset-init);
    image(pgs[0], x, y+h+spacing, w, h);
  } else if (window.pageYOffset < off + 4*windowHeight) {
    page = 4;
    if (turn != page) {
      turn = page;
      console.log(page);
    }
    
    pic = pgs[0];
    
    h += 0.1*(height-spacing - h);
    w = h*pic.width/pic.height;
    
    x = width/2 - w/2;
    if (window.pageYOffset-init < h+spacing) {
      y = height/2 - h/2 - (window.pageYOffset-init)+h+spacing;
    } else {
      y += 0.1*(height/2 - h/2 - y)
    }
    
    image(cover, x, y-h-spacing, w, h);
  } else if (window.pageYOffset < off + 5*windowHeight) {
    page = 5;
    if (turn != page) {
      if (turn < page) {
        //Do stuff here
      }
      turn = page;
      console.log(page);
    }
    
    h += 0.1*(height+h/2 - h);
    w = h*pic.width/pic.height;
    
    x = width/2 - w/2;
    y += 0.1*(height/2 - h*3/4 - y)
    
    
  } else if (window.pageYOffset < off + 6*windowHeight) {
    page = 6;
    if (turn != page) {
      if (turn < page) {
        //Do stuff here
      }
      turn = page;
      console.log(page);
    }
    
    pic = pgs[0];
    
    h += 0.1*(height+h/2 - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w/2 - x);
    y += 0.1*(height/2 - h/2 - y)
    
  } else if (window.pageYOffset < off + 7*windowHeight) {
    page = 7;
    if (turn != page) {
      if (turn < page) {
        //Do stuff here
      }
      turn = page;
      console.log(page);
    }
    pic = pgs[0]
    
    h += 0.1*(height+h*0.7 - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w*1/3 - x);
    y += 0.1*(height/2 - h*0.48 - y);
    
    let tempw = (height-spacing)*pgs[1].width/pgs[1].height;
    image(pgs[1], x-tempw-spacing/2, spacing/2, tempw, height-spacing);
    
  } else if (window.pageYOffset < off + 8*windowHeight) {
    page = 8;
    if (turn != page) {
      if (turn > page) {
        x = width;
        h2 = 3*(height-spacing);
      }
      if (turn < page) {
        h2 = height-spacing;
      }
      turn = page;
      console.log(page);
    }
    
    x += 0.1*(width - x);
    h2 += 0.1*(height-spacing - h2);
   
    if (x != width) {
      image(pgs[1], (x-h2*pgs[1].width/pgs[1].height)/2, (height-h2)/2, h2*pgs[1].width/pgs[1].height, h2);
    } else {
      image(pgs[1], width/2-h2*pgs[1].width/pgs[1].height/3, (height-h2)/2, h2*pgs[1].width/pgs[1].height, h2);
    }
  } else if (window.pageYOffset < off + 9*windowHeight) {
    page = 9;
    if (turn != page) {
      if (turn < page) {
        w = (height-spacing)*pgs[1].width/pgs[1].height
        h = height-spacing
        
        x = (x-(height-spacing)*pgs[1].width/pgs[1].height)/2
        y = (height - h)/2
      }
      turn = page;
      console.log(page);
    }
    
    pic = pgs[1];
    
    h += 0.1*(3*(height-spacing) - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*(height/2 - h/2 - y);
    
  } else if (window.pageYOffset < off + 10*windowHeight) {
    page = 10;
    if (turn != page) {
      if (turn < page) {
        //Do stuff here
      }
      turn = page;
      console.log(page);
    }
    
    pic = pgs[1];
    
    h += 0.1*(3*(height-spacing) - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w*2/3 - x);
    y += 0.1*(height/2 - h/2 - y);
    
  } else if (window.pageYOffset < off + 0*windowHeight) {
    page = 0;
    if (turn != page) {
      if (turn < page) {
        //Do stuff here
      }
      turn = page;
      console.log(page);
    }
    
  }
  
  
  
  
  
  
  image(pic, x, y, w, h);
}

function createArticle() {
  let m = select('.heading');
  let lastMargin = (windowHeight - m.size().height)/2;
  m.style('margin-top', lastMargin + 'px');
  
  var container = select('.article-sidebar');
  
  loadStrings("data/article.txt", lines => {
    for (i = 0; i < lines.length; i++) {
      let line = lines[i];
      let a = createP(line);
      a.parent(container);
      
      let h = lastMargin;
      lastMargin = (windowHeight - a.size().height)/2;
      h += lastMargin;

      a.style('margin', h + 'px 0px ' + lastMargin + 'px 0px');
    }
  })
}

function formatCanvas() {
  var cnv = createCanvas((windowWidth-10)*0.82-120, windowHeight);
  cnv.parent('gallery');
  let parent = select('#gallery');
  parent.size((windowWidth-10)*0.82-120, windowHeight);
}