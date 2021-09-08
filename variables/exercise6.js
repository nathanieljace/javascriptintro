const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// this will not produce an error because the second FOO was initialzed outside the scope of the first
// the two variables are seperate entities
