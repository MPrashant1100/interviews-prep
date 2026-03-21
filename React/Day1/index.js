

function App() {
  return (
    <div>
      <UserCard name="Prashant" />
      <UserCard name="Rahul" />
      <UserCard name="Aman" />
    </div>
  );
}

function UserCard(props) {
  return <h1>{props.name}</h1>;
}