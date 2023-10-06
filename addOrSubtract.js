function result(numOne, numTwo, numThree) {

    function add() {

        return numOne + numTwo;
    }

    function subtract() {

        return add() - numThree
    }
    console.log(subtract());
}
result(23, 6, 10)


