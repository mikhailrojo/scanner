#### Ugly radar of internet of things ####

This is ugly radar first tryout.
I combined:
* sonar radar HC-SR04
* Servo SG90
* Arduino Uno

Software:
* regular Arduino C programm
* D3.js, Socket.io, Serialport.js and express

```javascript
npm i socket.io express serialport -g

```
The main principle:
- The servo rotates on 180 degrees
- The sonar is installed on servo
- Each 100ms it sends data with the distance to Arduino
- Arduino sends it to serial port
- Server.js  starts the server, reads from serial port and emits messages(with data from Arduino) though Socket.io to index.html (via socket connection)
-index.html reads this data and draws rects on SVG with D3.js library.

    This is how it looks on the screen:
    ![screenshoot](https://github.com/mikhailrojo/scanner/blob/master/radar.jpg "Screen shot")

    This is how it looks like assembled:
    ![photo](https://github.com/mikhailrojo/scanner/blob/master/photo.JPG "Assembled")
