radio.onReceivedNumber(function (receivedNumber) {
    radio.sendNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    let HAND2 = 0
    if (HAND2 == 0) {
        basic.showLeds(`
            . # # . .
            # # # # .
            # # # # .
            . # # . .
            . . . . .
            `)
    }
    if (HAND2 == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (HAND2 == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    let HAND = 0
    basic.showString("" + (randint(0, 2)))
    if (HAND == 0) {
        basic.showLeds(`
            . # # . .
            # # # # .
            # # # # .
            . # # . .
            . . . . .
            `)
    }
    if (HAND == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (HAND == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    radio.sendNumber(HAND)
})
radio.setGroup(20)
