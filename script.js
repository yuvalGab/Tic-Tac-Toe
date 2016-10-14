
$(function() {
    
    
    $('.warpper').fadeIn(1000);
    $('.box').fadeIn(4000);
    
    var alternate = 1;
    var plays = 0;

    var gameStatus = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    $('.box').on('click', function () {
      if (alternate == 1) {
          $(this).text('X');
          alternate = 2;
          gameStatus[$(this).attr('data-y')][$(this).attr('data-x')] = 1;
      }else if (alternate == 2) {
          $(this).text('O');
          alternate = 1;
          gameStatus[$(this).attr('data-y')][$(this).attr('data-x')] = 2;
      }
        
        $(this).css({'box-shadow':'none'});
        
        plays++;

        setTimeout(function(){
            checkStatus();
        }, 100);

    });


    function checkStatus() {

        if (((gameStatus[0][0] == 1) && (gameStatus[0][1] == 1) && (gameStatus[0][2] == 1)) ||
            ((gameStatus[1][0] == 1) && (gameStatus[1][1] == 1) && (gameStatus[1][2] == 1)) ||
            ((gameStatus[2][0] == 1) && (gameStatus[2][1] == 1) && (gameStatus[2][2] == 1)) ||
            ((gameStatus[0][0] == 1) && (gameStatus[1][0] == 1) && (gameStatus[2][0] == 1)) ||
            ((gameStatus[0][1] == 1) && (gameStatus[1][1] == 1) && (gameStatus[2][1] == 1)) ||
            ((gameStatus[0][2] == 1) && (gameStatus[1][2] == 1) && (gameStatus[2][2] == 1)) ||
            ((gameStatus[0][0] == 1) && (gameStatus[1][1] == 1) && (gameStatus[2][2] == 1)) ||
            ((gameStatus[0][2] == 1) && (gameStatus[1][1] == 1) && (gameStatus[2][0] == 1))) {
                alert('X win!');
                window.location.reload();
            } else if (((gameStatus[0][0] == 2) && (gameStatus[0][1] == 2) && (gameStatus[0][2] == 2)) ||
            ((gameStatus[1][0] == 2) && (gameStatus[1][1] == 2) && (gameStatus[1][2] == 2)) ||
            ((gameStatus[2][0] == 2) && (gameStatus[2][1] == 2) && (gameStatus[2][2] == 2)) ||
            ((gameStatus[0][0] == 2) && (gameStatus[1][0] == 2) && (gameStatus[2][0] == 2)) ||
            ((gameStatus[0][1] == 2) && (gameStatus[1][1] == 2) && (gameStatus[2][1] == 2)) ||
            ((gameStatus[0][2] == 2) && (gameStatus[1][2] == 2) && (gameStatus[2][2] == 2)) ||
            ((gameStatus[0][0] == 2) && (gameStatus[1][1] == 2) && (gameStatus[2][2] == 2)) ||
            ((gameStatus[0][2] == 2) && (gameStatus[1][1] == 2) && (gameStatus[2][0] == 2))) {
                alert('O win!');
                window.location.reload();
            } else if (plays == 9) {
                alert("nobody win...")
                window.location.reload();
            }

    }
    
});

