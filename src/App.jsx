import "./App.css";
// import {} from // PasswordValidation,
// AndOperatorRendering,
// Greetings,
// Weather,
// UserStatus,
// "./React-Practice/ConditionalRendering";
import Counter, { TodoList } from "./React-Practice/StateAndHooks";
// import InteractiveRendering from "./React-Practice/InteractiveRendering";

function App() {
  return (
    <>
      {/* <PasswordValidation isValid={false} />
      <AndOperatorRendering /> */}
      {/* <Weather temp={23} /> */}
      {/* <Greetings loggedIn={true} isAdmin={true} /> */}
      {/* <UserStatus /> */}

      {/* <InteractiveRendering /> */}
      <Counter />
      <TodoList />
    </>
  );
}

export default App;
