let my_score1 = 0
let my_score2 = 0
while (my_score1 <= 29 && my_score2 <= 29) {
    if (input.buttonIsPressed(Button.A)) {
        my_score1 = my_score1 + 1
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    if (input.buttonIsPressed(Button.B)) {
        my_score2 = my_score2 + 1
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
    }
    basic.showNumber(my_score1)
    basic.showNumber(my_score2)
}
