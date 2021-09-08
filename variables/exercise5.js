let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// bar is logged to the console because qux is outside the scope of console.log
