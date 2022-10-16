import Head from "next/head";
import { useState } from "react";
import Person from "../components/Person";
import callWithAutorization from "../hoc/callWithAutorization";

function Home() {
  const [age, setAge] = useState(16);
  const persons = [
    {
      name: "Elias",
      age: 17,
    },
    {
      name: "Diego",
      age: 20,
    },
    {
      name: "Rivanio",
      age: 40,
    },
  ];

  const incrementAge = () => {
    setAge(++age);
  };

  return (
    <>
      <h1>Hello World e {process.env.NEXT_PUBLIC_TESTE}</h1>

      {persons.map(({ name, age }, index) => (
        <Person key={index} name={name} age={age} />
      ))}

      <button onClick={incrementAge}>Incrementar idade</button>
    </>
  );
}
export default callWithAutorization(Home);
