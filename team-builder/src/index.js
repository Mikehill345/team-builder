import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// const friendList = [
//   { name: 'Mike', email: 'something@something.com' },
//   { name: 'Katie', email: 'katie@katie.com' },
//   { name: 'Maisie', email: 'maisie@maisie.com' },
// ]
// const initialFormValues = {
//   name:'',
//   email:'',
// }



// function SimpleForm() {
//   const [friend, setfriend] = useState(friendList)
//   const [formValues, setFormValues] = useState(initialFormValues)

//   const change = evt => {
//     const {name, value} = evt.target
//     setFormValues({...formValues, [name]: value})
//     }
    
//     const submit = evt => {
//       evt.preventDefault()
//     const newFriend = {name: formValues.name.trim(), email: formValues.email.trim()}

//     setfriend(friend.concat(newFriend))
//     setFormValues(initialFormValues)
//     }


//   return (
//     <div className= 'container'>
//       <h1>Simple Form</h1>

//       {
//       friend.map((friend,index) => {
//         return <div key= {index}>{friend.name}{friend.email}</div>
//       })
//       }
//       <form onSubmit={submit}>
//         <input name="name" type="text" value={formValues.name} onChange={change}/>
//         <input name="email" type="text" value={formValues.email} onChange={change}/>

//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

ReactDOM.render(
  // <SimpleForm />,
      <App />,
  document.getElementById('root'));



