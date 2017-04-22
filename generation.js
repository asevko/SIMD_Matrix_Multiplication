/**
 * Created by Лёша on 23.04.2017.
 */
function call() {
    var output = document.getElementById("output");
    const LOW_LIMIT = -1;
    const HIGH_LIMIT = 1;
    var _P = 7, _M = 3, _Q = 7;
    var A = [], B = [], C =[];
    var isNegative = function() {
        return Math.floor(Math.random() * 2) == 1;
    };

    var randomFloat = function(){
        return parseFloat(LOW_LIMIT * Math.random().toFixed(4) * (isNegative() ? LOW_LIMIT : HIGH_LIMIT));
    };

    function createMatrix(row, col) {
        var array = [];
        for (var i = 0; i < row; i++) {
            array[i] = [];
            for (var j = 0; j < col; j++)
                array[i][j] = randomFloat();
        }
        return array;
    }

    function showMatrix(array, row, col) {
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++)
                output.innerHTML += (array[i][j] + " ");
            output.innerHTML += "<br />";
        }
    }
    A = createMatrix(_P, _M);
    B = createMatrix(_M, _Q);
    showMatrix(A, _P, _M);
    output.innerHTML += "<br />";
    output.innerHTML += "<br />";
    showMatrix(B, _M, _Q);
    output.innerHTML += "<br />";
    output.innerHTML += "<br />";
    /**
     * @return {number}
     */
    var SUM = function (i, j) {
        var sum = 0;
        for (var k = 0; k < _M; k++){
            sum += (Math.pow(A[i][k], 2) > Math.abs(A[i][k] * B[k][j])) ?
                Math.pow(A[i][k], 2) - Math.abs(A[i][k] * B[k][j]) :
                (B[k][j] == 0 ?
                    Math.pow(A[i][k], 2) :
                    Math.pow(A[i][k], 2) / Math.abs(B[k][j]));
        }
        return sum;
    };

    var createMatrix_C = function(_P, _Q) {
        for (var i = 0; i < _P; i++) {
            C[i] = [];
            for (var j = 0; j < _Q; j++)
                C[i][j] = SUM(i,j).toFixed(4);
        }
    };
    createMatrix_C(_P, _Q);
    showMatrix(C, _P, _Q);
}