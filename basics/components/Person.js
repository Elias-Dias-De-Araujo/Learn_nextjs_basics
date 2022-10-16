export default function Person(props) {
  return (
    <div className="person">
      <b>Nome:</b> {props.name}
      <br />
      <b>Idade:</b> {props.age}
    </div>
  );
}
