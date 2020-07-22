function person() {
    let firstName = "Jack";
    return {
      getName: function () {
        return firstName;
      },
      setName: function (newName) {
        firstName = newName;
      },
    };
  }
  
  let jDepp = person();
  let returnedName = jDepp.getName();
  console.log(`The initial value of getName() is ... ${returnedName}`); // Jack
  jDepp.setName("Johnny");
  returnedName = jDepp.getName();
  console.log(`The value of getName() is now ... ${returnedName}`); // Johnny