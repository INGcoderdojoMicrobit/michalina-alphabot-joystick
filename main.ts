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
    radio.sendNumber(V)
    basic.pause(10)
    if (WSJoyStick.Listen_Key(KEY.E)) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
        radio.sendString("E")
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        radio.sendString("C")
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        radio.sendString("D")
    } else if (WSJoyStick.Listen_Key(KEY.F)) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
        radio.sendString("F")
    } else if (WSJoyStick.Listen_Dir(DIR.U)) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        images.arrowImage(ArrowNames.East).showImage(0)
    }
})
