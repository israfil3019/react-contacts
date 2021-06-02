import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import Form from "./components/form/Form";

const initialValues = { username: "", phoneNumber: "", gender: "NO INFO!" };

function App() {
  const [info, setInfo] = useState(initialValues);

  return (
    <div className="App">
      <Form className="form" info={info} setInfo={setInfo} />
      <Contacts className="contacts" />
    </div>
  );
}

export default App;
