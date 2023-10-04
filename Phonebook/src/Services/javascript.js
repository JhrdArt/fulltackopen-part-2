function add(b) {
  let a = 5;
  return a * b + 10 ;
}

function bar(x){
    let y = 3;
    return add(x * y)
}

console.log(bar(6))