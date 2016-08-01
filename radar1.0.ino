int echoPin = 13; 
int trigPin = 12; 
#include <Servo.h> 
int angle = 0;
Servo servo;

void setup() { 
  Serial.begin (9600); 
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT); 
  servo.attach(10);
} 

void loop() { 
  

servo.write(angle);
int duration, cm; 
digitalWrite(trigPin, LOW); 
delayMicroseconds(2); 
digitalWrite(trigPin, HIGH); 
delayMicroseconds(10); 
digitalWrite(trigPin, LOW); 
duration = pulseIn(echoPin, HIGH); 
cm = duration / 58;
Serial.print(cm); 
Serial.println(" cm"); 
delay(100);
angle = angle + 3.6;
if (angle > 180){ angle = 0;};
servo.write(angle);








  

}
