input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("C5 C5 B B A A G F ", 120)
    music.playMelody("C5 B F A C5 B F C ", 248)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showString("Hello!")
    }
})
