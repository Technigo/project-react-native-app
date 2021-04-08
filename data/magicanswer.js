import { MAGIC_API } from '../components/reusable/urls';

//let magicanswer
//let magicdataobjects

const getData = () => fetch(MAGIC_API)
    .then(res => res.json())


/* let magicanswer = [
    {"Id": 0,
    "Answer": "Foo",
  "Type": "bar"}
    ] */


export default getData