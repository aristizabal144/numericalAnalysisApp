function showFunction(fnc){

  console.log(fnc);

  arrayFunc = [];
  try{
    fnc.forEach(element => {
      arrayFunc.push({fn: element});
    });
  }catch{
    
  }
  
  functionPlot({
    target: '#quadratic',
    data: arrayFunc
  })
}