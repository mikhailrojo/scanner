#### Ugly radar of internet of things ####

This is ugly radar first tryout.
I combined:
* sonar radar HC-SR04
* Servo SG90
* Arduino Uno

Software:
* regular Arduino C programm (radar1.0.ino)
* D3.js, Socket.io, Serialport.js and express

```javascript
npm i && npm start

// then open index.html and all will work
```
The main principle:
- The servo rotates on 180 degrees
- The sonar is installed on servo
- Each 100ms it sends data with the distance to Arduino
- Arduino sends it to serial port
- Server.js  starts the server, reads from serial port and emits messages(with data from Arduino) though Socket.io to index.html (via socket connection)
-index.html reads this data and draws rects on SVG with D3.js library.

    This is how it looks on the screen v1:
    ![screenshoot](https://github.com/mikhailrojo/scanner/blob/master/radar.jpg "Screen shot")

    Version -2
    ![screenshoot2](https://github.com/mikhailrojo/scanner/blob/master/scan2.png "Screen shot-2")

    Here it was *very difficult* to make it look like a radar...

    This is how it looks like assembled:
    ![photo](https://github.com/mikhailrojo/scanner/blob/master/photo.JPG "Assembled")
