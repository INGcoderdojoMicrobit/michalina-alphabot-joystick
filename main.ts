let v2 = 0
let x = 0
let Y = 0
let V = 0
WSJoyStick.JoyStickInit()
radio.setGroup(123)
radio.sendString("S,W,N,E")
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    serial.writeValue("y", V)
    Y = pins.analogReadPin(AnalogPin.P2)
    V = Math.round(Math.map(Y, 0, 1023, -100, 100))
    x = pins.analogReadPin(AnalogPin.P1)
    v2 = Math.round(Math.map(x, 0, 1023, -100, 100))
    radio.sendValue("v", V)
    radio.sendValue("v2", v2)
    basic.pause(10)
})
