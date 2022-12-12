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
import { ChildrenEx } from "./components/childrenComp/ChildrenEx";
import {
  RadioGroup,
  RadioOption,
} from "./components/childAndCloneApi/radiogroup/RadioGroup";
import { useState } from "react";
import {
  SelectGroup,
  SelectOption,
} from "./components/childAndCloneApi/dropdownEx/SelectGroup";
import { CoursesList } from "./components/spreadOperators/CoursesList";
import { LoginButton } from "./components/spreadOperators/login_signUp_Button/Button";
import { EnhancedCursorTracker } from "./components/HOC/CursorTracker";
import { CursorTrackerRendered } from "./components/HOC/RenderProp/CursorTrackerRenderPropUse";

function App() {
  const [selected, setSelected] = useState("");
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
      {/* <UseRefExTwo /> */}
      <ChildrenEx>
        delete my account
        {/* <Counter/> */}
      </ChildrenEx>
      <div className="radio">
        <h2>Which course do u prefere ?</h2>

        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="Javascript">Javascript</RadioOption>
          <RadioOption value="HTML">HTML</RadioOption>
          <RadioOption value="CSS">CSS</RadioOption>
        </RadioGroup>
        <button disabled={!selected}>Submit</button>
      </div>{" "}
      <hr />
      <br /> <hr />
      <br /> <hr />
      <br />
      <SelectGroup
        name="pets"
        id="pet-select"
        onChange={setSelected}
        selected={selected}
      >
        <SelectOption value="">--Please choose an option--</SelectOption>
        <SelectOption value="dog">Dog</SelectOption>
        <SelectOption value="cat">Cat</SelectOption>
        <SelectOption value="hamster">Hamster</SelectOption>
        <SelectOption value="parrot">Parrot</SelectOption>
        <SelectOption value="spider">Spider</SelectOption>
        <SelectOption value="goldfish">Goldfish</SelectOption>
      </SelectGroup>
      <CoursesList />
      <LoginButton title='login' />
      {/* <EnhancedCursorTracker /> */}
      <CursorTrackerRendered/>
    </div>
  );
}

export default App;
