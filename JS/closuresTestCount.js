function changeCount(incMax) {
    let counter = 0;
    return {
      increment: function (incMax) {
          for(let i =0; i<incMax; i++){
            counter += 1;
          }
      },
      decrement: function (decMax) {
            for(let j=0; j<decMax; j++){
            counter -= 1;
            }
        },

      value: function () {
        return counter;
      },
    };
  }
  let count = changeCount();
  console.log(count.value()); // 0
  count.increment(5);
  count.increment(10);
  console.log(count.value()); // 15
  count.decrement(10);
  console.log(count.value()); // 5