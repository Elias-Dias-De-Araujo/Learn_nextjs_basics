import Head from "next/head";
import { useState } from "react";
import Person from "../components/Person";

export default function Home() {
  const [age, setAge] = useState(18);

  const incrementAge = () => {
    setAge(++age);
  };

  return (
    <>
      <Person name="Elias" age={age} />

      <button onClick={incrementAge}>Incrementar idade</button>
    </>
  );
}
