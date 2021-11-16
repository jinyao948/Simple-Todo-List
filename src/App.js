import Todo from "./components/Todo"
import Modal from "./components/Modal"
import Backdrop from "./components/Backdrop"

export default function App() {
  return (
    <div >
      <h1>My Todo</h1>
      <Todo text="Clean houes" />
      <Todo text="Destory houes"/>
      <Todo text="Rebuild houes" />
      <Modal />
      <Backdrop/>
    </div>
  );
}

