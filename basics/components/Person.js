export default function Person({ name, age }) {
  return (
    <div className="person">
      <b>Nome:</b> {name}
      <br />
      <b>Idade:</b> {age}
      <br />
      {age >= 18 ? (
        <>
          <span>Maior de idade</span>
        </>
      ) : (
        <>
          <span>Menor de idade</span>
        </>
      )}
      <br />
      <br />
    </div>
  );
}
