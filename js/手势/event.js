window.addEventListener('contextmenu', e => e.preventDefault())
const my = document.querySelector('#my');
// 即兼容mobile pc

// mousedown

my.addEventListener('mousedown', (event) => {
  start(event);
  function mouseMove(e) {
    move(e);
  }
  function mouseEnd(e) {
    end(e)
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseEnd);
  }
  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseup', mouseEnd)
})

my.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  // console.log(touch);
  start(touch);
})
my.addEventListener('touchmove', (event) => {
  const touch = event.changedTouches[0];
  move(touch);
})
my.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];
  end(touch)
})
let isTap = false; isPan = false; isPress = false;
let timeout = null; 
let startX = 0, startY = 0;
function start(point) {
  console.log('start', point);
  isTap = true;
  startX = point.clientX, startY = point.clientY;
  // tap
  timeout = setTimeout(() => {
    isPress = true;
    isTap = false;
  }, 500);
}
function move(point) {
  console.log('move', point);
  let dx = point.clientX - startX;
  let dy = point.clientY - startY;
  // 距离
  if (dx ** 2 + dy ** 2 > 100) {
    isPan = true;
    isTap = false;
    isPress = false;
  }
  if(isPan) {
      moves.push({dx, dy, t:Date.now()});
      moves = moves.filter( r => Date.now() - r.t < 300);

  }
}
function end(point) {
  console.log('end', point);
  if (isTap) {
    isTap = false;console.log('tap发生了');
  }
  if (isPress) {
    isPress = false;console.log('长按发生了');
  }
  if (isPan) {
    isPan = false; console.log('pan 发生了');
  }
  let lastPoint = moves[0];
  let dx = point.clientX - startX;
  let dy = point.client - startY;
  let time300msdx = dx - lastPoint.dx;
  let time300msdy = dy - lastPoint.dy;
  let speed = Math.sqrt(time300msdx ** 2 + time300msdy ** 2) / (Date.now - lastPoint.t)
  if(speed > 2.5) {
      console.log('flick')
  }
  clearTimeout(timeout);
}
// alloyFinger
// hammer