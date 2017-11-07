var color = 'blue';

function changeColor() {
    var anotherColor = 'red';

    function swapColor() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    }
    swapColor()
}
// 第五章