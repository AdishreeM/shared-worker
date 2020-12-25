counter = 0;
self.onmessage = function(e) {
      console.log('Web Worker received ' + e.data + ' from main thread');
      self.postMessage('worker pong ' + counter++);
};