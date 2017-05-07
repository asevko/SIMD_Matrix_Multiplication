$(document).ready(function(){

    $("input").on('keyup', function(){
        $(this).val($(this).val().replace (/\D/, ''));
    });

    $('#start').click(function() {
        //$('#t').forEach(remove());
        $('#t').remove();
        $('#t').remove();
        $('#t').remove();
        $('#A').remove();
        $('#B').remove();
        $('#C').remove();

        p=$('#size_p').val();
        m=$('#size_m').val();
        q=$('#size_q').val();
        n=parseInt($('#n').val());

        compare = parseInt($('#t_c').val());
        multi = parseInt($('#t_y').val());
        addition = parseInt($('#t_s').val());
        difference = parseInt($('#t_r').val());
        div = parseInt($('#t_d').val());
        abs = parseInt($('#t_m').val());


        A=generateMatrix(p,m);
        B=generateMatrix(m,q);

        result();
        time = timeCounting(n, parseInt(p), parseInt(m), parseInt(q));
        T1 = timeCounting(1, parseInt(p), parseInt(m), parseInt(q));
        Ky = T1 / time;

        $(document.body).append('<div id="A">A:</div>');
        viewMatrix(A);
        $(document.body).append('<div id="B">B:</div>');
        viewMatrix(B);
        $(document.body).append('<div id="C">C:</div>');
        viewMatrix(C);

        $("#output").text("Время выполнения: "+time + "    Ky: " + Ky.toFixed(4));
    });

    // $('#clean').click(function () {
    //     $('#t').remove();
    //     $('#t').remove();
    //     $('#t').remove();
    //     $('#A').remove();
    //     $('#B').remove();
    //     $('#C').remove();
    //     $('#table').remove();
    //
    //     $("input").remove('keyup', function(){
    //         $(this).val($(this).val().replace (/\D/, ''));
    //     });
    // });
});