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

});