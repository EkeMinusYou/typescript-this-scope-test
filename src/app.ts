function main() {
  const test = new Test();
  const fn = test.returnValue;
  console.log(fn()); // undefined

  const arrowFn = test.arrowReturnValue;
  console.log(arrowFn()); // undefined

  const arrowFn2 = () => {
    return test.returnValue();
  }
  console.log(arrowFn2()); // value

  console.log(test.returnValue()); // value
}

class Test {
  value = 'value';
  returnValue() {
    return this?.value;
  }
  arrowReturnValue = () => {
    return this?.value;
  }
}

main();