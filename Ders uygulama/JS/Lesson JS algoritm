  var arr = [-4, 3, -9, 0, -4, 1];
        Show('result', arr);

    function plusMinus() {
    // Write your code here
    const len = arr.length;
    let poss = 0;
    let neg = 0;
    let zero = 0;
    
    for (let i = 0; i < len; i++) {
        if (arr[i]>0) {
            poss ++;
        }
        else if (arr[i]<0) {
            neg ++;
        }
        else {
            zero ++;
        }
    }
    
    const positiveRatio = (poss / len).toFixed(6);
    const negativeRatio = (neg / len).toFixed(6);
    const zeroRatio = (zero / len).toFixed(6);
    const totalRatio = positiveRatio + "</br>" + negativeRatio +"</br>"+ zeroRatio;
    Show('result2', totalRatio);

}
        function Show(par,par2) {  
            document.getElementById(par).innerHTML = par2;
        }