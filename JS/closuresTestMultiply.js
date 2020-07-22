function myCalc(number1) {
    let calcIntro = "Your multiplication ";
    // Inner function has access to outer function's variables, including parameters
    function multiplication(number2) {
        let times = number1*number2;
        return `${calcIntro} ${number1} x ${number2} is ${times}`;
    }
  
    return multiplication;
  }

  let call1 = myCalc(5);
  let sum1 = call1(6);

  console.log(sum1);