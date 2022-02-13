export {};

function error (message:string): never{
  throw new Error(message);
}

try{
  error('test')
}catch(error){
  console.log({error})
}