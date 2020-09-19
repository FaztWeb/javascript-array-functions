// Higher Order functions
function hello(callback) {
  if (callback) {
   console.log('Hello ' + callback())
  }
  console.log('Hello!')  
}

function myName(name) {
  return name
}

hello()
hello(() => "fabian")