import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Althaf" age={20} isStudent={true}/>
      <Student name="Arun" age={21} isStudent={true}/>
      <Student name="Anand" age={22} isStudent={false}/>
      <Student name="Aruna" age={23} isStudent={true}/>
      <Student/>
    </>
  );
}

export default App;