function countPositivesSumNegatives(input) {
    if (!input.length) {
        return []
    } //if no length exists

    var result = [0, 0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            result[0]++;
        } else {
            result[1] += input[i];
        }
    }


    return result;
}
countPositivesSumNegatives([4, 22, 5, 6, 3, 7]);
