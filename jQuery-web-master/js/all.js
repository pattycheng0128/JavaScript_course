$(document).ready(function(){

    $('#calcu').click(function rate(event){
        var pv = Number($('#pv').val()); 
        var rate = Number($('#rate').val());
        var nper = Number($('#nper').val());
        var result =  Math.round((pv * (1 + (rate/100))**nper));
        $('#result').val(result);

    });

});