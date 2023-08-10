function canPay(changeArray, totalDue) {
    const checkArray = (changeArray.length !== 0)

    if (checkArray) {
        const sum = changeArray.reduce((acc, cur) => acc += cur)
        const result = (sum >= totalDue)
        console.log(result);
        return(result);
    }
    else {
        console.log("Empty Array Is Not Accepted");
        return("Empty Array Is Not Accepted");
    }
}

canPay([], 10)
