var divSquare = '<div id="s$coord" class="square $color"></div>';
var divFigure = '<div id="f$coord" class="figure"> $figure</div>';
$(function(){
    addSquares();
    showFigures('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');
    setDraggableChess();
    showFigureAt();
});

function setDraggableChess(){
    $('.figure').draggable();
}

function addSquares (){
    console.log('addSquares');
    $('.board').html('');
    for (var coord = 0; coord < 64; coord++){
        $('.board').append(divSquare.replace('$color', isBlackSquareAt(coord) ? 'square_bkack' : "square_white").replace('$coord', coord));
    }
}

function showFigures(figure){
    for (var coord = 0; coord < 64; coord++){
        showFigureAt(coord, figure.charAt(coord));
    }
}

function showFigureAt(coord, figure){
    $('#s'+coord).html(divFigure.replace('$figure', getChessSymbol(figure)));
}

function getChessSymbol(figure){
 switch (figure){
     case "K" : return '&#9812;';
     case "Q" : return '&#9813;';
     case "R" : return '&#9814;';
     case "B" : return '&#9815;';
     case "N" : return '&#9816;';
     case "P" : return '&#9817;';
     case "k" : return '&#9818;';
     case "q" : return '&#9819;';
     case "r" : return '&#9820;';
     case "b" : return '&#9821;';
     case "n" : return '&#9822;';
     case "p" : return '&#9823;';
     default : return '';
 }
}

function isBlackSquareAt(coord){
    return(coord % 8 + Math.floor (coord/8))%2;
}
