var divSquare = '<div id="s$coord" class="square $color"></div>';
$(function(){
    addSquares();
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