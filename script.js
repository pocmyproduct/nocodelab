$(document).ready(function(){
    var ProtoStep1Val;

    /* ON CLICK : Prototype */
    $('#proto').on('click', function(){
        location.href='./proto.html';
    })
    $('#proto').keypress(function(event){
        if ( event.which == 13 ) {
            location.href='./proto.html';
        }
    })

    var option = 0;

    // Navigate with arrows 
    $(document).on("keydown", function(event){

        $("li").removeClass('focus-select');
        $("li img.enter-icon").css('opacity', '0');

        if(event.key == "ArrowDown" && option < $("li").length-1){
            option++;
            $("li")[option].classList.add('focus-select');
            $("li")[option].querySelector('.enter-icon').style.opacity = "1";
        } else if (event.key == "ArrowDown" && option >= $("li").length-1){
            option=1;
            $("li")[option].classList.add('focus-select');
            $("li")[option].querySelector('.enter-icon').style.opacity = "1";
        }

        if(event.key == "ArrowUp" && option > 1){
            option = option-1;
            $("li")[option].classList.add('focus-select');
            $("li")[option].querySelector('.enter-icon').style.opacity = "1";
        } else if (event.key == "ArrowUp" && option <= 1){
            option=$("li").length-1;
            $("li")[option].classList.add('focus-select');
            $("li")[option].querySelector('.enter-icon').style.opacity = "1";
        }

        if(event.key == "Enter"){
            if ($("li")[option].id == "proto"){
                location.href='./proto.html';
            }
        }
    });
});