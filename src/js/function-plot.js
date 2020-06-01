function showFunction(fnc){

  console.log(fnc);
  arrayFunc = [];
  try{
    let regE = new RegExp("e", 'g')
    let regPi =   new RegExp("pi", 'g')
    for(let i = 0; i < fnc.length; i++){
      fnc[i] = fnc[i].replace(regE,"exp").replace(regPi,"PI")
      let element = fnc[i]
      arrayFunc.push({fn: element});
    }
  }catch (e) {

  }


  functionPlot({
    target: '#quadratic',
    data: arrayFunc
  })

  functionPlot({
    target: '#quadraticSplineL',
    data: arrayFunc,
    width: 900,
    height: 700,
  })

}
