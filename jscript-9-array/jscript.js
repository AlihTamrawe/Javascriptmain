function alwaysHungry(arr) {
        var counter=0;
    for (var i=0; i<arr.length;i++)
    {
        if(arr[i]=="food")
        { 
            counter++;
            console.log("yummy");
        }
    
    }
    if(counter==0){
        console.log("I'm hungry");
    }
    
    }
    
    alwaysHungry([3.14, "food", "pie", true, "food"]);
    // this should console log "yummy", "yummy"
    alwaysHungry([4, 1, 5, 7, 2]);
    // this should console log "I'm hungry"
    






/* ----------------------------- */

    
    function highPass(arr, cutoff) {
        var filteredArr = [];var x=0;
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]>cutoff)
            {
                filteredArr[x]= arr[i];
                x++
            }
        }
        return filteredArr;
    }
    var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
    console.log(result); // we expect back [6, 8, 10, 9]
    
    function betterThanAverage(arr) {
        var sum = 0;
        for (i=0;i<arr.length;i++)
        {
        sum=sum+arr[i];
        }
        var count = 0
        // count how many values are greated than the average
        return count;
    }
    var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
    console.log(result); // we expect back 4
    