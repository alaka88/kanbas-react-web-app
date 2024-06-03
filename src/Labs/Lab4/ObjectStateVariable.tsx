import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
export default function ObjectStateVariable() {
const [person, setPerson] = useState({ name: "Peter", age: 24 });
return (
<div>
      <h2>Object State Variables</h2>
      <pre className="p-3 bg-light border rounded">{JSON.stringify(person, null, 2)}</pre>
      <div className="mb-3">
        <input
          className="form-control"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="number"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
          placeholder="Age"
        />
      </div>
      <hr />
    </div>
  );
}