let socket = new WebSocket(
  "wss://javascript.info/article/websocket/demo/hello"
);

socket.onopen = () => socket.send("hello");

socket.onmessage = e => console.log(e);

socket.onclose = event => {
  if (event.wasClean) {
    console.log(`[close] Соединение прервано`);
  }
};

socket.onerror = error => {
  console.log(`[error] ${error.message}`);
};
