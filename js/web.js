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

        compare = $('#t_c').val();
        multi = $('#t_y').val();
        addition = $('#t_s').val();
        difference = $('#t_r').val();
        div = $('#t_d').val();
        abs = $('#t_m').val();
        time = 0;

        A=generateMatrix(p,m);
        B=generateMatrix(m,q);

        result();

        $(document.body).append('<div id="A">A:</div>');
        viewMatrix(A);
        $(document.body).append('<div id="B">B:</div>');
        viewMatrix(B);
        $(document.body).append('<div id="C">C:</div>');
        viewMatrix(C);

        $("#output").text("Время выполнения: "+time);
    });

    $('#clean').click(function () {
        $('#t').remove();
        $('#t').remove();
        $('#t').remove();
        $('#A').remove();
        $('#B').remove();
        $('#C').remove();

        $("input").remove('keyup', function(){
            $(this).val($(this).val().replace (/\D/, ''));
        });
    });
});