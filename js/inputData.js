let A = [], B = [];
let p, m, q;
const LOW_LIMIT = -1;
const HIGH_LIMIT = 1;

InitialState = {
    init: function () {
        p = tryInitParameter("size_P");
        m = tryInitParameter("size_m");
        q = tryInitParameter("size_q");

        function tryInitParameter(id) {
            if (isCorrectInput(id))
                initParameter(id);
            else
                throwError("Uncorrected types");
        }

        function isCorrectInput(id) {
            return !(+document.getElementById(id).value < 1 ||
            typeof +document.getElementById(id).value !== "number")
        }

        function initParameter(id) {
            return parseInt(document.getElementById(id).value);
        }

        function throwError(msg) {
            throw new Error(msg);
        }
    },

    generateInputMatrix: function () {
        A = generateMatrix(p, m);
        B = generateMatrix(m, q);

        function generateMatrix(row, col) {
            let array = [];
            for (let i = 0; i < row; i++) {
                array[i] = [];
                for (let j = 0; j < col; j++)
                    array[i][j] = randomFloat();
            }
            return array;
        }

        let randomFloat = function () {
            return parseFloat(LOW_LIMIT * Math.random().toFixed(4) * (isNegative() ? LOW_LIMIT : HIGH_LIMIT));
        };

        let isNegative = function () {
            return Math.floor(Math.random() * 2) === 1;
        };
    }
};