import React, { useState } from "react";
import "./App.css";
import MembersForm from './Forms/Form'
import MemberCard from './Forms/MemberCard'
// comment
const memberList = [
  { name: 'Mike', email: 'mike@something.com', role: 'student' },
  { name: 'Katie', email: 'katie@something.com', role: 'Team Lead' },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [members, setMembers] = useState(memberList);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setMembers(members.concat(newMember))
    setFormValues(initialFormValues)
  };

  return (
    <div className="App">
      <MembersForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      <h1>Members Of Club Awesome!</h1>
      {
        members.map(member => {
          return (
            <MemberCard key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;