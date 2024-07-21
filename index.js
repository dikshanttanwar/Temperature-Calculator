
const CalTemp=()=>{
    let temp = document.querySelector("#temp").value;
    let temp_selected = document.querySelector("#temp_diff");
    let select_temp = temp_diff.options[temp_selected.selectedIndex].value;

    let result_box = document.querySelector("#result_box");
    let result; 

    const celTofah=(val)=>{
        let fahrenheit =  Math.round((val*9/5)+32)
        return fahrenheit;
    }
    const fahTOcel=(num)=>{
        let celsius = Math.round(((num-32)*5)/9)
        return celsius;
    }   

    if(select_temp == 'cel'){
        result = celTofah(temp);
        result_box.innerHTML = `${result} Fahrenheit`;
        console.log("HEllo")
    }
    else{
        result = fahTOcel(temp);
        result_box.innerHTML = `${result} Celsius`;
        console.log("Celsius")
    }

}