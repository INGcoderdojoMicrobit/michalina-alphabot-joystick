WSJoyStick.JoyStickInit()
basic.forever(function () {
    if (WSJoyStick.Listen_Key(KEY.E)) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (WSJoyStick.Listen_Key(KEY.E)) {
        images.arrowImage(ArrowNames.West).showImage(0)
    }
})
