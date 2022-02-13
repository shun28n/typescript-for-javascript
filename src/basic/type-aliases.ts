export {};

type Mojiretsu = string;

const fooString: Mojiretsu = 'hello';

const example1 ={
  name: 'Shun',
  age: 25
}

type profile ={
    name: string;
    age: number;
}

const example2: profile ={
  name: 'shun',
  age: 11
}

type profile2 = typeof example1;

const example3: profile2 ={
  name: 'shun',
  age: 11
}
