const fizzBuzz = (total) => {
  for (let i = 1; i <= total; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.info("FizzBuzz");
    }
    if (i % 3 === 0) {
      console.info("Fizz");
    }
    if (i % 5 === 0) {
      console.info("Buzz");
    }
    console.info(i);
  }
};

fizzBuzz(100);
