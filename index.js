const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  new Promise((resolve, reject) =>
    resolve('...should be after the stack is empted, but before bar...')
  ).then((value) => console.log(value));
  baz();
};

const fum = () => {
  foo();
  console.log('...Right after foo()...');
};

fum();
console.log();

foo();
console.log('...This is also right after foo()...');

console.log('\n|                          |');
console.log('V  - STACK EMPTIES HERE -  V\n');
