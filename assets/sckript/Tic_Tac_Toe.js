var divSquare = '<div id="s$coord" class="square $color"></div>';
var count = 0;
let res = [];
$(function(){
    addSquares();
    let array = [...$('.square')];
    console.log($('.square'));
    let len = array.length;
    let n = 3; // Предполагая, что каждая строка показывает 4
    let lineNum = len % n === 0 ? len / n : Math.floor( (len / n) + 1 );
    for (let i = 0; i < lineNum; i++) {
        // Метод slice () возвращает мелкую копию части выбранного массива от начала до конца (не включая конец) в новый объект массива. И исходный массив не будет изменен.
        let temp = array.slice(i*n, i*n+n);
        res.push(temp);
    }
});
function addSquares (){
    console.log('addSquares');
    $('.board').html('');
    for (var coord = 0; coord < 9; coord++){
        $('.board').append(divSquare.replace('$color', isBlackSquareAt(coord) ? 'square_black' : "square_white").replace('$coord', coord));
    }
}
function isBlackSquareAt(coord){
    return(coord % 3 + Math.floor (coord/3))%2;
}

 
$('body').on('click', '.square', function(){
    if($(this) .html()){
        console.log('This square have symbol')
        count --;
    }else if(count %2){
        $(this).html('O');
    }else $(this).html('X');
    console.log(this, count);
    count++;
    isWin();
});
function isWin(){
    for (let i=0; i<3; i++){ //перевірка строк
        let firstSymbol = $(res[i][0]).html();
        if(firstSymbol == ''){
            continue;
        }
        let win = true;
        for (let j=1; j<3; j++){

            if ($(res[i][j]).html() != firstSymbol){
                win = false;
            }
        }
    
        if (win == true){
            console.log(firstSymbol + ' wins');
            return 0;
        }
    }
    for (let i=0; i<3; i++){ //перевірка рядків
        let firstSymbol = $(res[0][i]).html();
        if(firstSymbol == ''){
            continue;
        }
        let win = true;
        for (let j=1; j<3; j++){

            if ($(res[j][i]).html() != firstSymbol){
                win = false;
            }
        }
    
        if (win == true){
            console.log(firstSymbol + ' wins');
            return 0;
        }
    }

    let win = true; //діагональ
    for(let i=1; i<3; i++){
        if ($(res[i][i]).html() != $(res[0][0]).html()){
            win = false;
        }
    }
    if (win == true){
        console.log($(res[0][0]).html() + ' wins');
        return 0;
    }
    win = true;
    for(let i=1; i<3; i++){
        if ($(res[i][2-i]).html() != $(res[0][2]).html()){
            win = false;
        }
    }
    if (win == true){
        console.log($(res[0][2]).html() + ' wins');
        return 0;
    }
}

    let i = 10;

