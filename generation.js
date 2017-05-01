/**
 * Created by Лёша on 23.04.2017.
 */
const LOW_LIMIT = -1;
const HIGH_LIMIT = 1;
let _P, _M, _Q;
let A = [], B = [], C = [];
let consecutive_time = {
    t_s: 1,
    t_r: 1,
    t_y: 1,
    t_d: 1,
    t_c: 1,
    t_m: 1,
    t_all: 6
};
let statement = {
    time_c: 0,
    time: 0,
    n: 0,
    r: 0,
    Ky_r: 0
};
let params = function() {
   return {
       p_size: getInputParameter("size_p"),
       m_size: getInputParameter("size_m"),
       q_size: getInputParameter("size_q"),
       t_s: getInputParameter("t_s"),
       t_r: getInputParameter("t_r"),
       t_y: getInputParameter("t_y"),
       t_d: getInputParameter("t_d"),
       t_c: getInputParameter("t_c"),
       t_m: getInputParameter("t_m")
   };
};

function run() {
    if (document.getElementById("output").innerHTML !== "") {
        document.getElementById("output").innerHTML = "";
    }
    let parameters = params();
    _M = parameters.m_size;
    _Q = parameters.q_size;
    _P = parameters.p_size;
    consecutive_time.t_s = parameters.t_s;
    consecutive_time.t_r = parameters.t_r;
    consecutive_time.t_y = parameters.t_y;
    consecutive_time.t_d = parameters.t_d;
    consecutive_time.t_c = parameters.t_c;
    consecutive_time.t_m = parameters.t_m;
    consecutive_time.t_all = 6;
    call();
}

function clean() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("size_p").value = "";
    document.getElementById("size_m").value = "";
    document.getElementById("size_q").value = "";
    document.getElementById("t_s").value = "";
    document.getElementById("t_r").value = "";
    document.getElementById("t_y").value = "";
    document.getElementById("t_d").value = "";
    document.getElementById("t_c").value = "";
    document.getElementById("t_m").value = "";
}

function getInputParameter(id) {
    if (+document.getElementById(id).value < 1 ||
        typeof +document.getElementById(id).value != "number")
        throw new Error("Bad types");
    return parseInt(document.getElementById(id).value);
}

function call() {
    let output = document.getElementById("output");
    let isNegative = function () {
        return Math.floor(Math.random() * 2) == 1;
    };

    let randomFloat = function () {
        return parseFloat(LOW_LIMIT * Math.random().toFixed(4) * (isNegative() ? LOW_LIMIT : HIGH_LIMIT));
    };

    function createMatrix(row, col) {
        let array = [];
        for (let i = 0; i < row; i++) {
            array[i] = [];
            for (let j = 0; j < col; j++)
                array[i][j] = randomFloat();
        }
        return array;
    }

    function showMatrix(array, row, col) {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                // if(parseInt(array[i][j]) < 10)
                //     output.innerHTML += "&nbsp;";
                output.innerHTML += (array[i][j] + " ");
            }
            output.innerHTML += "<br />";
        }
    }
    A = createMatrix(_P, _M);
    B = createMatrix(_M, _Q);

    /**
     * @return {number}
     */
    let SUM = function (i, j) {
        let sum = 0;
        for (let k = 0; k < _M; k++) {
            // sum += (Math.pow(A[i][k], 2) > Math.abs(A[i][k] * B[k][j])) ?
            //     Math.pow(A[i][k], 2) - Math.abs(A[i][k] * B[k][j]) :
            //     (B[k][j] == 0 ?
            //         Math.pow(A[i][k], 2) :
            //         Math.pow(A[i][k], 2) / Math.abs(B[k][j]));
            let a = Math.pow(A[i][k], 2);
            let b = Math.abs(A[i][k] * B[k][j]);
            consecutive_time.t_y += 2;
            consecutive_time.t_m++;
            consecutive_time.t_c++;
            consecutive_time.t_s++;
            if (a > b) {
                consecutive_time.t_r++;
                sum += a - b;
            }
            else {
                consecutive_time.t_c++;
                if (B[k][j] == 0) {
                    sum += a;
                }
                else {
                    consecutive_time.t_m++;
                    consecutive_time.t_d++;
                    sum += a / Math.abs(B[k][j]);
                }
            }
        }
        return sum;
    };

    let createMatrix_C = function (_P, _Q) {
        for (let i = 0; i < _P; i++) {
            C[i] = [];
            for (let j = 0; j < _Q; j++) {
                C[i][j] = SUM(i, j).toFixed(4);
            }
        }
    };

    createMatrix_C(_P, _Q);
    showMatrix(C, _P, _Q);
    consecutive_time.t_all = consecutive_time.t_d + consecutive_time.t_y + consecutive_time.t_c
        + consecutive_time.t_s + consecutive_time.t_r + consecutive_time.t_m;
    console.log(consecutive_time);
}

function makeClone(obj) {
    let clone = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if ("object"===typeof obj[prop])
                clone[prop] = makeClone(obj[prop]);
            else
                clone[prop] = obj[prop];
        }
    }
    return clone;
}