function repeat(str, count) {


    let result = '';

    for (let i = 0; i < count; i++) {
        result += str;
    }
    console.log(result);
}

repeat("abc", 3);