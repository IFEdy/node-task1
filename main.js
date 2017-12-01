
let arrayDisplay = [3,4,5,7,1,7,3,7,3,4,5,1,6,8];
let $k = 3;

function generatePair(arrayDisplay,$constant){
    pair_arry = [];
    ind_pair = [];
    for(i = 0;i<arrayDisplay.length;i++)
        for($j = 1;$j<arrayDisplay.length;$j++)
            if(i < $j){
                newVal=arrayDisplay[i] + arrayDisplay[$j];
                let div_value = (arrayDisplay[i] + arrayDisplay[$j]);
                if(div_value % $constant == 0){
                    pair ='['+ arrayDisplay[i]+',' + arrayDisplay[$j] + ']'
                    ind_pair.push(pair);  
                }
            }
         else{
         }
        newVal = ind_pair;
        document.write("The paired array is " +  newVal.length + "<br/>" )
        document.write("The paired arrays are  " + "<br/>" );
            for($i = 0;$i<newVal.length;$i++){
                    document.write(newVal[$i] + "<br/>" );
            }
    
}

generatePair(arrayDisplay,$k)
