let Y = 0
let V = 0
WSJoyStick.JoyStickInit()
radio.setGroup(123)
radio.sendString("S,W,N,E")
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    serial.writeValue("y", V)
    Y = pins.analogReadPin(AnalogPin.P2)
    V = Math.round(Math.map(Y, 0, 1023, -255, 255))
    radio.sendNumber(V)
    basic.pause(10)
})
