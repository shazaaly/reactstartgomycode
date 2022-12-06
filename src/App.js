import "./App.css";
import { ControlledComponent } from "./components/Forms/ControlledComponent";
import { Form } from "./components/Forms/Form";
import { LittleForm } from "./components/Forms/LittleForm";
import TaskForm from "./components/Forms/TaskForm";
import { Switch } from "./components/Switch";
import { UserLoggedIn } from "./components/users/UserLoggedIn";
import { UsersList } from "./components/users/UsersList";
import { UseTheme } from "../src/contexts/ThemeContext";
import { UseStHook } from "./Hooks/useState/UseStHook";
import { UseStPrev } from "./Hooks/useState/UseStPrev";
import { SetGoals } from "./Hooks/useState/SetGoals";
import { AllGoals } from "./Hooks/useState/AllGoals";
import { TitleToggle } from "./Hooks/useEffectHook/TitleToggle";
import { UseReducerEx } from "./Hooks/useReducerHook/UseReducerEx";
import { UseRefEx } from "./Hooks/useRefEx/UseRefEx";
import { Counter } from "./Hooks/customHooks/Counter";
import { UseRefExTwo } from "./Hooks/useRefEx/UseRefExTwo";

function App() {
  const { theme, toggleFunction } = UseTheme();

  return (
    <div
      className="App"
      style={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "blue" }
      }
    >
      {/* <Form> */}
      {/* <button style={{ backgroundColor: 'red' }}>Click me</button> */}
      {/* </Form> */}

      {/* <UsersList /> */}
      {/* <SetGoals /> */}
      {/* <LittleForm />
      <ControlledComponent />
      <TaskForm />
      <UserLoggedIn />
      <Switch />
      <UseStHook />
      <UseStPrev />  */}
      {/* <TitleToggle /> */}
      {/* <UseReducerEx /> */}
      {/* <UseRefEx /> */}
      {/* <Counter /> */}
      <UseRefExTwo />
    </div>
  );
}

export default App;
