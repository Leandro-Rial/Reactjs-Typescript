import Counter from "./components/Counter";
import User from "./components/User";

import TimerPadre from "./components/TimerPadre";

import CounterRed from "./components/CounterReducer";

import Formulario from "./components/Formulario";


function App() {
  return (
    <div>
      <h1 className="mt-5">React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <hr />
      <Counter />
      <User />

      <h2 className="mt-5">useEffect - useRef</h2>
      <hr />
      <TimerPadre />

      <h2 className="mt-5">useReducer</h2>
      <hr />
      <CounterRed />

      <h2 className="mt-5">customHooks</h2>
      <hr />
      <Formulario />
    </div>
  );
}

export default App;
