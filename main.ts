WSJoyStick.JoyStickInit()
radio.setGroup(123)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (WSJoyStick.Listen_Key(KEY.E)) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
    } else if (WSJoyStick.Listen_Key(KEY.F)) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
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
