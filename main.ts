let Numero = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    Numero = randint(1, 4)
    if (Numero == 1) {
        basic.showArrow(ArrowNames.North)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (Numero == 2) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (Numero == 3) {
        basic.showArrow(ArrowNames.East)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (Numero == 4) {
        basic.showArrow(ArrowNames.West)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    basic.pause(2000)
})
