var socket = new WebSocket("ws://localhost:8080/ws");


// connects to the WebSocket endpoint
// listens to events 
// such as succussful connection with 'onopen'
// if it sees any issue it will proceed to print out the error to the console
let connect = () => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };
    
    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};
// allows to send messages from the frontend to the backend via the WebSocket
// connection using 'socket.send()'
let sendMsg = msg => {
    console.log("Sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };