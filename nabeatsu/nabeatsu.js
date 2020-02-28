for (let num = 1; num <= 100; num++) {
    var str = String(num);

    if (num % 3 === 0 || str.indexOf("3") != -1) {
        console.log(num + "!");
    }else{
        console.log(num);
    }
}
