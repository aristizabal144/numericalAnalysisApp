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

  functionPlot({
    target: '#general',
    data: arrayFunc,
    width: 800,
    height: 700,

  })
}