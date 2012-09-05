function pos(n) {
  return (n < 0) ? 0 : n;
}

function hex(n) {
  var s = n.toString(16);
  if (s.length < 2) {
    s = "0" + s;
  }
  return s;
}

function lim(n) {
  return (n > 255) ? 255 : (n < 0) ? 0 : n;
}

var amazing = function(options, element) {
  options = options || {};
  amazing.elem = !element ? document.getElementsByTagName('body')[0] : element;
  amazing.step = (typeof options.step === "undefined") ? 1 : options.step;
  amazing.delay = (typeof options.delay === "undefined") ? 1 : options.delay;
  amazing.cont = true;
  amazing.tick(0);
};

amazing.tick = function(i) {
  var r, g, b, m = 255;
  r = (i > m) ? (i > 4*m) ? lim(i - 4*m) : pos(2*m - i) : m; 
  b = (i <= m) ? i : (i > 3*m) ? pos(4*m - i) : m;
  g = (i <= 3*m) ? pos(i - 2*m) : (i > 5*m) ? pos(6*m - i) : m;
  amazing.elem.style.backgroundColor = '#' + hex(r) + hex(g) + hex(b);
  setTimeout(function() {
    if (amazing.cont) {
      amazing.tick(i >= 1530 ? 0 : i+amazing.step);
    }
    else {
      amazing.stopped_at = i;
    }
  },amazing.delay);
};

amazing.stop = function() {
  amazing.cont = false;
};

amazing.start = function(i) {
  amazing.cont = true;
  amazing.tick(i || amazing.stopped_at || 0);
};