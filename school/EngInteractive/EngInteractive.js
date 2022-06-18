var pgs;
var cover;

function preload() {
  pgs = new Array(6);
  for (i = 1; i <= 6; i++) {
    pgs[i-1] = loadImage('data/' + i + '.png');
  }

  cover = loadImage('data/coverResized.jpg');
  snake = loadImage('data/snake.jpg');
  medusa = loadImage('data/medusa.jpg');
  tempt = loadImage('data/tempt.jpg');
  femdad = loadImage('data/femdad.png');
  
  createArticle();
}

function setup() {
  formatCanvas();
  
  off = 70 - windowHeight/2;
  h = height;
  
  x = 0;
  y = 0;

  textSize(20);
  textAlign(CENTER, CENTER);
  
  window.scroll(0, getItem('pos'));
  turn = floor((window.scrollY - off)*2/windowHeight)/2;
}

function windowResized() {
  formatCanvas();
  off = 70 - windowHeight/2;

  textSize(20);
  textAlign(CENTER, CENTER);
}


var off;
var x, y, w, h;
var pic;
var turn, page;

var spacing = 150;

//misc
var init;
var tempx, tempy, tempw, temph;
var h2;

function draw() {
  background(255);

  page = floor((window.scrollY - off)*2/windowHeight)/2;
  storeItem('pos', window.scrollY);
  
  if (floor(page) < render.length) {
    render[floor(page)]();
  }
  
  //page number
  fill(0);
  rect(30, 30, 60, 60, 5);
  fill(255);
  text(page, 60, 60);
}

const render = [
   () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //do stuff
      }
      turn = floor(page);
      
    }

    pic = cover;
    h += 0.1*(height-spacing - h);
    w = h*pic.width/pic.height;

    x = width/2 - w/2;
    y = height/2 - h/2 - (window.scrollY-pageY(0));

    image(pic, x, y, w, h);
    image(pgs[0], x, y + windowHeight+pageY(0.5), w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
      
    }

    pic = pgs[0];
    h += 0.1*(height-spacing - h);
    w = h*pic.width/pic.height;

    x = width/2 - w/2;


    if (page == 1) {
      y = height/2 - h/2 - (window.scrollY-pageY(1.5));
    } else if (page == 1.5) {
      y += 0.1*(height/2 - h/2 - y);
    }

    image(cover, x, y - windowHeight - pageY(0.5), w, h);
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }

    pic = pgs[0];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x = width/2 - w/2;
    y += 0.1*(height/2 - h*3/4 - y);

    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //Do stuff here
      }
      turn = floor(page);
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing) - h);
    w = h*pic.width/pic.height;

    x = width/2 - w/2;
    y += 0.1*((height/2 - h/2) - y);

    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //Do stuff here
      }
      turn = floor(page);
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing) - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/2 - x);
    y += 0.1*((height/2 - h/2) - y);

    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //Do stuff here
      }
      turn = floor(page);
      
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*((height/2 - h*14/30) - y);

    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //Do stuff here
      }
      turn = floor(page);
      
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing)*3 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*0.51 - x);
    y += 0.1*((height/2 - h/5) - y);

    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //Do stuff here
      }
      turn = floor(page);
      
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*((height/2 - h*14/30) - y);

    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //Do stuff here
      }
      turn = floor(page);
      
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*2/3 - x);
    y += 0.1*((height/2 - h*14/30) - y);

    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn > page) {
        h = (height-spacing)*4;
        w = h*pic.width/pic.height;

        x = width/2 - w*0.6;
      }
      turn = floor(page);
    }
    
    pic = pgs[0];

    x += 0.1*(width/2 - w*0.6 - x);

    let wid = 0;
    if (page == 9) {
      y += 0.1*(height/2 - h*3/4 - y) ;
    } else if (page == 9.5) {
      y = height/2 - h*3/4;
    }
    
    image(pic, x, y, w, h);
    image(pgs[1], width/2 - w/3, height/2 - h/5 - (window.scrollY-pageY(10.5)), w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        x = width/2 - w/3;
      }
      turn = floor(page);
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x);
    
    if (page == 10) {
      y = height/2 - h/5 - (window.scrollY-pageY(10.5));
      
      image(pgs[0], width/2 - w*0.6, height/2 - h*3/4, w, h);
    } else if (page == 10.5) {
      y += 0.1*(height/2 - h/5 - y);
    }
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*(height/2 - h*0.47 - y);
    
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*2/3 - x);
    y += 0.1*(height/2 - h*0.47 - y);
    
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    y += 0.1*(height/2 - h*0.47 - y);

    if (page == 13) {
      x += 0.1*(width/2 - w*2/3 - x);
    } else if (page == 13.5) {
      x = width/2 - w*2/3 - (window.scrollY - pageY(13.5))*2;
      image(pgs[2], width/2 - w/3 - (window.scrollY - pageY(14.5))*2, y, w, h);
    }  
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    y += 0.1*(height/2 - h*0.47 - y);
    
    if (page == 14) {
      x = width/2 - w/3 - (window.scrollY - pageY(14.5))*2;
      
      image(pgs[1], width/2 - w*2/3 - (window.scrollY - pageY(13.5))*2, y, w, h);
    } else if (page == 14.5) {
      x += 0.1*(width/2 - w/3 - x);
    }  
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    y += 0.1*(height/2 - h*0.47 - y);
    x += 0.1*(width/2 - w/3 - x); 
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn > page) {
        h = (height-spacing)*4;
        w = h*pgs[1].width/pgs[1].height;
        
        y = height/2 - h*0.47;
        x = width/2 - w/3;
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    y += 0.1*(height/2 - h*0.47 - y);
    x += 0.1*(width/2 - w/3 - x);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = height-spacing;
        w = h*pgs[0].width/pgs[0].height;
        
        x = width/2 - w/2;
        y = height/2 - h/2;
      }
      turn = floor(page);
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing) - h);
    w = h*pic.width/pic.height;

    y += 0.1*(height/2 - h/2 - y);
    x += 0.1*(width/2 - w/2 - x);
    
    image(pic, x, y, w, h);
    
    if (page == 17) {
      let tw = (height-spacing)*4*pic.width/pic.height;
      image(pgs[2], width/2 - tw/3, height/2 - (height-spacing)*4*0.47, tw, (height-spacing)*4);
    } else if (page == 17.5) {
      let tw = (height-spacing)*4*pic.width/pic.height;
      image(pgs[2], width/2 - tw/3 + (window.scrollY - pageY(17.5))*3, height/2 - (height-spacing)*4*0.47, tw, (height-spacing)*4);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        //Do stuff here
      }
      turn = floor(page);
      
    }
    
    pic = pgs[0];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*((height/2 - h*14/30) - y);

    image(pic, x, y, w, h);
    
    if (page == 18.5) {
      image(pgs[1], width/2 - w*2/3, height/2 - h*0.47 - (window.scrollY - pageY(19.5))*3, w, h);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        x = width/2 - w*2/3;
        y = height/2 - h*0.47;
        
      }
      turn = floor(page);
      
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*2/3 - x);
    
    image(pgs[0], width/2 - w/3, height/2 - h*14/30, w, h);
    
    if (page == 19) {
      y = (height/2 - h*0.47) - (window.scrollY - pageY(19.5))*3;
    } else if (page == 19.5) {
      y += 0.1*(height/2 - h*0.47 - y);
    }
    
    image(pic, x, y, w, h);
    
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
      
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*3 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/2 - x);
    y += 0.1*(height/2 - h*3/4 - y);
    
    
    image(pic, x, y, w, h);
  },
  () => {
    //prev
    render[20]();
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
      
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*5 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*0.37 - x);
    y += 0.1*(height/2 - h*0.76 - y);
    
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn > page) {
        h = (height-spacing)*5;
        w = h*pic.width/pic.height;

        y += height/2 - h*0.76;
      }
      turn = floor(page);
      
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*5 - h);
    w = h*pic.width/pic.height;

    y += 0.1*(height/2 - h*0.76 - y);
    x += 0.1*(width/2 - w*0.2 - x);
    
    image(pic, x, y, w, h);
    
    if (page == 23.5) {
      image(pgs[2], width/2 - ((height-spacing)*4*pic.width/pic.height)/3 - (window.scrollY - pageY(24))*3, height/2 - (height-spacing)*4*0.47, (height-spacing)*4*pic.width/pic.height, (height-spacing)*4);  
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*4;
        w = h*pgs[2].width/pgs[2].height;
    
        x = width/2 - w/3;
        y = height/2 - h*0.47;
      }
      if (turn > page) {
        h = (height-spacing)*4;
        w = h*pgs[2].width/pgs[2].height;
    
        x = width/2 - w/3;
        y = height/2 - h*0.47 - (window.scrollY - pageY(24.5));
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x); 
    
    if (page == 24) {
      y += 0.1*(height/2 - h*0.47 - y);
    } else if (page == 24.5) {
      y = height/2 - h*0.47 - (window.scrollY - pageY(24.5));
    }
    
    image(pic, x, y, w, h);
    
    fill(255);
    noStroke();
    rect(0, -(window.scrollY - pageY(25.5)), windowWidth, windowHeight);
    
    let tw = (height-spacing)*snake.width/snake.height;
    image(snake, width/2-tw/2, spacing/2-(window.scrollY - pageY(25.5)), tw, height-spacing);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = snake;
    h = height-spacing;
    w = h*pic.width/pic.height;

    x = width/2 - w/2; 
    y = height/2 - h/2;
    
    if (page == 25) {
      let th = (height-spacing)*4;
      let tw = th*pgs[2].width/pgs[2].height;
      image(pgs[2], width/2 - tw/3, height/2 - th*0.47 - (window.scrollY - pageY(24.5)), tw, th);
    }
    
    fill(255);
    noStroke();
    rect(0, -(window.scrollY - pageY(25.5)), windowWidth, windowHeight);
    image(pic, x, spacing/2-(window.scrollY - pageY(25.5)), w, h);
    
    if (page == 25.5) {
      fill(255);
      noStroke();
      rect(0, -(window.scrollY - pageY(26.5)), windowWidth, windowHeight);
      
      let tw = (height-spacing)*medusa.width/medusa.height;
      image(medusa, width/2-tw/2, spacing/2-(window.scrollY - pageY(26.5)), tw, height-spacing);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = medusa;
    h = height-spacing;
    w = h*pic.width/pic.height;

    x = width/2 - w/2; 
    
    
    if (page == 26) {
      fill(255);
      noStroke();
      rect(0, -(window.scrollY - pageY(25.5)), windowWidth, windowHeight);
      
      let tw = (height-spacing)*snake.width/snake.height;
      image(snake, width/2-tw/2, spacing/2-(window.scrollY - pageY(25.5)), tw, height-spacing); 
    } else if (page == 26.5) {
      
    }
    
    y = spacing/2-(window.scrollY - pageY(26.5));
    
    fill(255);
    noStroke();
    rect(0, -(window.scrollY - pageY(26.5)), windowWidth, windowHeight);
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h = (height-spacing)*4;
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*2/3 - x); 
    y += 0.1*(height/2 - h/3 - y);
    
    image(pic, x, y, w, h);
    
    if (page == 27) {
      fill(255);
      noStroke();
      rect(0, -(window.scrollY - pageY(26.5)), windowWidth, windowHeight);
        
      let tw = (height-spacing)*medusa.width/medusa.height;
      image(medusa, width/2-tw/2, spacing/2-(window.scrollY - pageY(26.5)), tw, height-spacing);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x); 
    y += 0.1*(height/2 - h*3/4 - y);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*8 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*0.36 - x); 
    y += 0.1*(height/2 - h*0.79 - y);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*6 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x); 
    y += 0.1*(height/2 - h/2 - y);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*8 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*0.36 - x); 
    y += 0.1*(height/2 - h*0.79 - y);
    
    image(pic, x, y, w, h);
  },
  () => {
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*6 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x); 
    y += 0.1*(height/2 - h/4.5 - y);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn > page) {
        pic = pgs[2];
        h = (height-spacing)*8;
        w = h*pic.width/pic.height;
    
        x = width/2 - w*0.36; 
        y = height/2 - h*0.79;
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*8 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w*0.36 - x); 
    y += 0.1*(height/2 - h*0.79 - y);
    
    image(pic, x, y, w, h);
    
    if (page == 33.5) {
      let th = (height-spacing)*4;
      let tw = th*pgs[1].width/pgs[1].height;
      
      image(pgs[1], width/2 - tw/3 - (window.scrollY - pageY(34))*3, height/2 - th*0.47, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*4
        w = h*pgs[1].width/pgs[1].height;
        
        x = width/2 - w/3;
        y = height/2 - h*0.47;
      }
      turn = floor(page);
    }
    
    pic = pgs[1];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*(height/2 - h*0.47 - y);
    
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn > page) {
      pic = pgs[1];
      h = (height-spacing)*3;
      w = h*pic.width/pic.height;
  
      x = width/2 - w/2;
      y = height/2 - h*3/4;
       
    }
    
    render[20]();
    
    if (page == 35.5) {
      fill(255);
      noStroke();
      rect(0, -(window.scrollY - pageY(36.5)), windowWidth, windowHeight);
        
      let tw = (height-spacing)*tempt.width/tempt.height;
      image(tempt, width/2-tw/2, spacing/2-(window.scrollY - pageY(36.5)), tw, height-spacing);
    }
  },
  () => {
    if (turn != floor(page)) {
        
      h = (height-spacing)
      w = h*tempt.width/tempt.height;
        
      x = width/2 - w/2;
      y = height/2 - h/2;
      
      turn = floor(page);
    }
    
    if (page == 36) {
      pic = pgs[1];
      image(pic, width/2 - (height-spacing)*3*pic.width/pic.height/2, height/2 - (height-spacing)*3*3/4, (height-spacing)*3*pic.width/pic.height, (height-spacing)*3);
    
    } else if (page == 36.5) {
      pic = pgs[0];
      image(pic, width/2 - (height-spacing)*4*pic.width/pic.height*0.6, height/2 - (height-spacing)*4*3/4, (height-spacing)*4*pic.width/pic.height, (height-spacing)*4);
    }
    
    pic = tempt;
    h += 0.1*(height-spacing - h);
    w = h*pic.width/pic.height;

    x += 0.1*(width/2 - w/2 - x);
    y = height/2 - h/2 - (window.scrollY - pageY(36.5));
    
    fill(255);
    noStroke();
    rect(0, -(window.scrollY - pageY(36.5)), windowWidth, windowHeight);
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      h = (height-spacing)*4
      w = h*pgs[0].width/pgs[0].height;
      
      x = width/2 - w*0.6;
      y =height/2 - h*3/4;
      turn = floor(page);
    }
    
    pic = pgs[0];

    x = width/2 - w*0.6;
    if (page == 37.5) {
      x -= (window.scrollY - pageY(37.5))*2;
    }
    y += 0.1*(height/2 - h*3/4 - y);
    
    image(pic, x, y, w, h);

  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*4;
        w = h*pgs[2].width/pgs[2].height;

        x = width/2 - w/2 - (window.scrollY - pageY(38.5))*2; 
        y = height/2 - h/5.3;
      }
      turn = floor(page);
    }
    
    if (page == 38) {
      image(pgs[0], width/2 - (height-spacing)*4*pgs[0].width/pgs[0].height*0.6 - (window.scrollY - pageY(37.5))*2, height/2 - (height-spacing)*4*3/4, (height-spacing)*4*pgs[0].width/pgs[0].height, (height-spacing)*4);
    } 
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
 
    x = width/2 - w/4 - (window.scrollY - pageY(38.5))*2; 
    y = height/2 - h/5.3;
  
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
 
    x += 0.1*(width/2 - w*3/4 - x); 
    y = height/2 - h/5.3;
  
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
 
    x += 0.1*(width/2 - w*3/4 - x); 
    y += 0.1*(height/2 - h/5.3 - y);
  
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
 
    x += 0.1*(width/2 - w*3/4 - x); 
    y += 0.1*(height/2 - h*3/4 - y);
  
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    h += 0.1*((height-spacing)*8 - h);
    w = h*pic.width/pic.height;
 
    x += 0.1*(width/2 - w*0.72 - x); 
    y += 0.1*(height/2 - h*0.83 - y);
  
    image(pic, x, y, w, h);
  },
  () => {
    render[42]();
  },
  () => {
    render[42]();
  },
  () => {
    if (turn > page) {
        pic = pgs[2];
        h = (height-spacing)*8;
        w = h*pic.width/pic.height;
     
        x = width/2 - w*0.72; 
        y = height/2 - h*0.83;
    }
    
    render[42]();
    
    if (page == 45.5) {
      let tw = (height-spacing)*3*pgs[3].width/pgs[3].height;
      image(pgs[3], width/2-tw/2, height/2-(height-spacing)*3/5 - (window.scrollY - pageY(46.25))*2, tw, (height-spacing)*3);
    }
  },
  () => {
    if (turn != floor(page)) {
      h = (height-spacing)*3;
      w = h*pgs[3].width/pgs[3].height;
   
      x = width/2 - w/2; 
      y = height/2 - h/5;
      turn = floor(page);
    }
    
    pic = pgs[3];
    h += 0.1*((height-spacing)*3 - h);
    w = h*pic.width/pic.height;
 
    x += 0.1*(width/2 - w/2 - x); 
    
    if (page == 46) {
      image(pgs[2], width/2 - (height-spacing)*8*pic.width/pic.height*0.72, height/2 - (height-spacing)*8*0.83, (height-spacing)*8*pic.width/pic.height, (height-spacing)*8);
      
      y = height/2-h/5 - (window.scrollY - pageY(46.25))*2;
    } else if (page == 46.5) {
      image(pgs[2], width/2 - (height-spacing)*2*pic.width/pic.height/2, height/2 - (height-spacing)*2*0.61, (height-spacing)*2*pic.width/pic.height, (height-spacing)*2);
      
      y = height/2-h/5 + (window.scrollY - pageY(46.75))*2;
    }
    
    y = max(height/2-h/5, y);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*2;
        w = h*pic.width/pic.height;
        
        x = width/2-w/2;
        y = height/2 - h*0.61;
      }
      turn = floor(page);
    }
    
    pic = pgs[2];
    
    h = (height-spacing)*2;
    w = h*pic.width/pic.height;
    
    x = width/2-w/2;
    y = height/2 - h*0.61;
    
    image(pic, x, y, w, h);
    
    if (page == 47) {
      image(pgs[3], width/2 - (height-spacing)*3*pgs[3].width/pgs[3].height/2, height/2-(height-spacing)*3/5 + (window.scrollY - pageY(46.75))*2, (height-spacing)*3*pgs[3].width/pgs[3].height, (height-spacing)*3);
    } else if (page == 47.5) {
      image(pgs[3], width/2 - (height-spacing)*2*pgs[3].width/pgs[3].height/2, height/2-(height-spacing)*2*0.33 - (window.scrollY - pageY(48.25))*2, (height-spacing)*2*pgs[3].width/pgs[3].height, (height-spacing)*2);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[3];
    
    h = (height-spacing)*2;
    w = h*pic.width/pic.height;
    
    x = width/2-w/2;
    y = max(height/2-h*0.33 - (window.scrollY - pageY(48.25))*2, height/2-h*0.33);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[3];
    
    h += 0.1*((height-spacing)*2 - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2-w/2 - x);
    y += 0.1*(height/2-h*0.33 - y);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn > page) {
          h = (height-spacing)*3;
          w = h*pic.width/pic.height;
          
          x = width/2-w/2;
          y = height/2-h*3/4;
      }
      turn = floor(page);
    }
    
    pic = pgs[3];
    
    h += 0.1*((height-spacing)*3 - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2-w/2 - x);
    y += 0.1*(height/2-h*3/4 - y);
    
    image(pic, x, y, w, h);
    
    if (page == 50.5) {
      let th = (height-spacing)*4;
      let tw = th*pgs[2].width/pgs[2].height;
      
      image(pgs[2], width/2 - tw/3 - (window.scrollY - pageY(51.25))*2, height/2 - th*3/4, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      pic = pgs[2];
  
      h = (height-spacing)*4;
      w = h*pic.width/pic.height;
      
      x = width/2-w/3 - (window.scrollY - pageY(51.25))*2;
      y = height/2-h*3/4;
      turn = floor(page);
    }
    
    pic = pgs[2];
    
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
    
    y += 0.1*(height/2-h*3/4 - y);
    
    if (page == 51) {
      let th = (height-spacing)*3;
      let tw = th*pgs[3].width/pgs[3].height;
      
      image(pgs[3], width/2 - tw/2, height/2 - th*3/4, tw, th);
      
      x = width/2-w/3 - (window.scrollY - pageY(51.25))*2;
      
    } else if (page == 51.5) {
      let th = (height-spacing)*4;
      let tw = th*pgs[4].width/pgs[4].height;
      
      image(pgs[4], width/2 - tw/3, height/2 - th/3, tw, th);
      
      x = width/2-w/3 + (window.scrollY - pageY(51.75))*6;
    }
    
    x = max(width/2-w/3, x);
    
    image(pic, x, y, w, h);
    
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        pic = pgs[4];
        
        h = (height-spacing)*4;
        w = h*pic.width/pic.height;
        
        y = height/2-h/3;
        x = width/2-w/3;
      }
      turn = floor(page);
    }
    
    pic = pgs[4];
    
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
    
    y += 0.1*(height/2-h/3 - y);
    x += 0.1*(width/2-w/3 - x);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[4];
    
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
    
    y += 0.1*(height/2-h/3 - y);
    x += 0.1*(width/2-w/3 - x);
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn > page) {
        h = (height-spacing)*4;
        w = h*pic.width/pic.height;
        
        y = height/2-h/3;
        x = width/2-w/3;
      }
      turn = floor(page);
    }
    
    pic = pgs[4];
    
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
    
    y += 0.1*(height/2-h/3 - y);
    x += 0.1*(width/2-w/3 - x);
    
    image(pic, x, y, w, h);
    
    
    let th = (height-spacing)*4;
    let tw = th*pgs[5].width/pgs[5].height;
    
    if (page == 54) {
      image(pgs[5], width/2 - tw*2/3 + (window.scrollY - pageY(54.5))*6, height/2 - th/5.5, tw, th);
    } else if (page == 54.5) {
      image(pgs[5], width/2 - tw*2/3, height/2 - th/5.5, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*3;
        w = h*pic.width/pic.height;
        
        y = height/2-h*3/4;
        x = width/2-w/2;
      }
      turn = floor(page);
    }
    
    pic = pgs[4];
    
    h += 0.1*((height-spacing)*3 - h);
    w = h*pic.width/pic.height;
    
    y += 0.1*(height/2-h*3/4 - y);
    x += 0.1*(width/2-w/2 - x);
    
    image(pic, x, y, w, h);
    
    if (page == 55) {
      let th = (height-spacing)*4;
      let tw = th*pgs[5].width/pgs[5].height;
      
      image(pgs[5], width/2 - tw*2/3 - (window.scrollY - pageY(55))*6, height/2 - th/5.5, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[4];
    
    h += 0.1*((height-spacing)*3 - h);
    w = h*pic.width/pic.height;
    
    
    x += 0.1*(width/2-w/2 - x);
    
    if (page == 56) {
      y += 0.1*(height/2-h*3/4 - y);
    } else if (page == 56.5) {
      y = height/2-h*3/4 - (window.scrollY - pageY(56.5));
      
      fill(255);
      noStroke();
      rect(0, -(window.scrollY - pageY(57.5)), windowWidth, windowHeight);
      
      let tw = width-spacing;
      let th = tw*femdad.height/femdad.width;
      image(femdad, width/2-tw/2, height/2-th/2 - (window.scrollY - pageY(57.5)), tw, th);
    }
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[4];
    
    h += 0.1*((height-spacing)*3 - h);
    w = h*pic.width/pic.height;
    
    
    x += 0.1*(width/2-w/2 - x);
    
    if (page == 57) {
      y = height/2-h*3/4 - (window.scrollY - pageY(56.5));
      image(pic, x, y, w, h);
    } else if (page == 57.5) {
      let th = (height-spacing)*4;
      let tw = th*pic.width/pic.height;
      
      image(pgs[5], width/2 - tw*2/3, height/2 - th/5.5 - (window.scrollY - pageY(58.5)), tw, th);
    }
    
    fill(255);
    noStroke();
    rect(0, -(window.scrollY - pageY(57.5)), windowWidth, windowHeight);
    
    let tw = width-spacing;
    let th = tw*femdad.height/femdad.width;
    image(femdad, width/2-tw/2, height/2-th/2 - (window.scrollY - pageY(57.5)), tw, th);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*4;
        w = h*pic.width/pic.height;
        
        x = width/2 - w*2/3;
        y = height/2 - h/5.5 - (window.scrollY - pageY(58.5));
      }
      turn = floor(page);
    }
    
    pic = pgs[5];
    
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w*2/3 - x);
    
    if (page == 58) {
      let tw = width-spacing;
      let th = tw*femdad.height/femdad.width;
      image(femdad, width/2-tw/2, height/2-th/2 - (window.scrollY - pageY(57.5)), tw, th);
      
      y = height/2 - h/5.5 - (window.scrollY - pageY(58.5));
    } else if (page == 58.5) {
      y += 0.1*(height/2 - h/5.5 - y);
    }
    
    image(pgs[5], x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[5];
    
    h += 0.1*((height-spacing)*4 - h);
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*(height/2 - h*0.46 - y);
    
    image(pgs[5], x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[5];
    
    h = (height-spacing)*4;
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w/3 - x);
    y += 0.1*(height/2 - h/5.5 - y);
    
    image(pgs[5], x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[5];
    
    h = (height-spacing)*4;
    w = h*pic.width/pic.height;
    
    x += 0.1*(width/2 - w*2/3 - x);
    y += 0.1*(height/2 - h/5.5 - y);
    
    image(pgs[5], x, y, w, h);
    
    if (page == 61.5) {
      let th = (height-spacing)*3;
      let tw = th*pgs[3].width/pgs[3].height;
      
      image(pgs[3], width/2 - tw/2, height/2 - th/2 + (window.scrollY - pageY(62))*6, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*3;
        w = h*pgs[3].width/pgs[3].height;
        
        x = width/2 - w/2;
        y = height/2 - h/2;
      }
      turn = floor(page);
    }
    
    pic = pgs[3];
    
    h = (height-spacing)*3;
    w = h*pic.width/pic.height;
    
    x = width/2 - w/2;
    y = height/2 - h/2;
    
    image(pic, x, y, w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[3];
    
    h = (height-spacing)*3;
    w = h*pic.width/pic.height;
    
    y = height/2 - h/2;
    if (page == 63) { 
      x = width/2 - w/2;
      image(pic, x, y, w, h);
    } else if (page == 63.5) {
        x = width/2 - w/2 - (window.scrollY - pageY(63.5))*2;
        image(pic, x, y, w, h);
    
        let th = (height-spacing)*4;
        let tw = th*pic.width/pic.height;
       
        image(pgs[5], width/2 - tw/3 - (window.scrollY - pageY(64.5))*2,  height/2 - th*0.46, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    pic = pgs[3];
    
    h = (height-spacing)*3;
    w = h*pic.width/pic.height;
    
    y = height/2 - h/2;
    
    let th = (height-spacing)*4;
    let tw = th*pic.width/pic.height;
      
    if (page == 64) { 
      x = width/2 - w/2 - (window.scrollY - pageY(63.5))*2;
      image(pic, x, y, w, h);
      
      image(pgs[5], width/2 - tw/3 - (window.scrollY - pageY(64.5))*2,  height/2 - th*0.46, tw, th);
    } else if (page == 64.5) {
      image(pgs[5], width/2 - tw/3,  height/2 - th*0.46, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    let th = (height-spacing)*4;
    let tw = th*pgs[5].width/pgs[5].height;
    
    image(pgs[5], width/2 - tw/3,  height/2 - th*0.46, tw, th);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*4;
        w = h*pgs[1].width/pgs[1].height
        
        x = width/2 - w/3;
        y = height/2 - h*0.46;
      }
      turn = floor(page);
    }
    
    let th = (height-spacing)*4;
    let tw = th*pgs[5].width/pgs[5].height;
    
    image(pgs[5], width/2 - tw/3,  height/2 - th*0.46, tw, th);
    
    h = (height-spacing)*4;
    w = h*pgs[1].width/pgs[1].height
    
    x = width/2 - w*2/3;
    y = height/2 - h*2/3
    
    if (page == 66) {
      y += (window.scrollY - pageY(66.5))*4;
    }
    
    image(pgs[0], x, y , w, h);
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    
    h = (height-spacing)*4;
    w = h*pgs[1].width/pgs[1].height
    
    x = width/2 - w*2/3;
    y = height/2 - h*2/3;
    
    image(pgs[0], x, y , w, h);
    
    let th = (height-spacing)*4;
    let tw = th*pgs[1].width/pgs[1].height;
    
    if (page == 67) {
      image(pgs[1], width/2 - tw/3,  height/2 - th*0.52 + (window.scrollY - pageY(67.5))*4, tw, th);
    } else if (page == 67.5) {
      image(pgs[1], width/2 - tw/3,  height/2 - th*0.48, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*4;
        w = h*pgs[1].width/pgs[1].height
        
        x = width/2 - w/3;
        y = height/2 - h*2/3;
      }
      turn = floor(page);
    }
    
    h = (height-spacing)*4;
    w = h*pgs[1].width/pgs[1].height
    
    x = width/2 - w/3;
    y = height/2 - h*0.48;
    
    image(pgs[1], x, y , w, h);
    
    let th = (height-spacing);
    let tw = th*cover.width/cover.height;
    
    if (page == 68) {
      fill(255);
      noStroke();
      rect(0, (window.scrollY - pageY(68.5))*4, windowWidth, windowHeight);
      image(cover, width/2 - tw/3,  height/2 - th*0.52 + (window.scrollY - pageY(68.5))*4, tw, th);
    } else if (page == 68.5) {
      fill(255);
      noStroke();
      rect(0, 0, windowWidth, windowHeight);
      image(cover, width/2 - tw/3,  height/2 - th*0.48, tw, th);
    }
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
        h = (height-spacing)*3;
        w = h*pgs[3].width/pgs[3].height;
     
        x = width/2 - w/2; 
        y = height/2 - h/5;
      }
      turn = floor(page);
    }
    
    let th = (height-spacing);
    let tw = th*cover.width/cover.height;
    image(cover, width/2 - tw/3,  height/2 - th*0.48, tw, th);
    
    pic = pgs[3];
    
    h = (height-spacing)*3;
    w = h*pgs[3].width/pgs[3].height;
 
    x = width/2 - w/2; 
    y = height/2 - h/5;
    if (page == 69) {
      y -= (window.scrollY - pageY(69.5))*3;
    }
    image(pic, x, y, w, h);
    
  },
  () => {
    if (turn != floor(page)) {
      if (turn < page) {
      }
      turn = floor(page);
    }
    pic = pgs[3];
    
    h = (height-spacing)*3;
    w = h*pgs[3].width/pgs[3].height;
 
    x = width/2 - w/2; 
    y = height/2 - h/5;
    image(pic, x, y, w, h);
  },
  () => {
    render[70]();
  }
];



function pageY(p) {
  if (p == 0) {
    return 0;
  }
  return p*windowHeight+off;
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
