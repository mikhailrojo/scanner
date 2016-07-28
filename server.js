var socket = require("socket.io")(80),
    http = require("http"),
    app = require("express")(),
    SerialPort = require("serialport");


var h = http.createServer(app).listen(3000);
var io = socket.listen(h);

app.get("/", function(req, res){
    res.send("<h1>Сервер врубился</h1>")
});

port = new SerialPort("COM3", {
    baudrate: 9600
});

port.on('open', function() {
  port.write('main screen turn on', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });

  port.on("data", function(e){
      var data = e.toString();
      //console.log(data);
      io.sockets.emit("message", data);
      data = "";
  })
});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
});

socket.on("connection", function(){
    console.log("Socket opened");

    socket.on("message", (data)=>{
        console.log(data);
    })

    socket.on('disconnect', (e)=>{
        console.log(e);
    })

})
