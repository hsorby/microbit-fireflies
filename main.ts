radio.onReceivedString(function (receivedString) {
    if (clock < 8) {
        clock += 1
    }
})
let clock = 0
radio.setGroup(8)
radio.setTransmitPower(1)
basic.forever(function () {
    if (clock >= 8) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(200)
        clock = 0
    } else {
        basic.pause(100)
        clock += 1
    }
})
