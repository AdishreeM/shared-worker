onconnect = function(e) {
    var port = e.ports[0];
    port.counter = 0;
    port.onmessage = function(e) {
      console.log('Shared Worker received ' + e.data + ' from main thread');
      port.postMessage('shared pong ' + port.counter++);
    };
  }