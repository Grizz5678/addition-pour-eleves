let n1 = 0
let n2 = 0
let tot = 0
input.onButtonPressed(Button.A, function () {
	
})
function faire_une_addition () {
    n1 = randint(0, 10)
    n2 = randint(0, 10)
    tot = n1 + n2
    basic.showNumber(n1)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showNumber(n2)
    basic.pause(2000)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function Montrer_la_somme () {
    for (let index = 0; index < 4; index++) {
        basic.showNumber(tot)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.B, function () {
	
})
