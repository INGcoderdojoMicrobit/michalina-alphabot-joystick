WSJoyStick.JoyStickInit()
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
            # # # # .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
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
    }
})
