import React from "react";

export default function NewMembersForm(props) {


  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target

    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div>
        <div>
          <label>Name
          <input
              type='text'
              name='name'
              onChange={onChange}
              value={values.name}
              placeholder='enter name'
              maxLength='30'
            />
          </label>
        </div>
        <div>
          <label>Email
          <input
              type='email'
              name='email'
              onChange={onChange}
              value={values.email}
              placeholder='enter email'
              maxLength='30'
            />
          </label>
        </div>
        <div>
          <label>Role
          <select name='role' value={values.role} onChange={onChange}>
              <option value=''>--pick a role--</option>
              <option value='instructor'>instructor</option>
              <option value='student'>Student</option>
              <option value='team Lead'>Team Lead</option>
            </select>
          </label>
          <div className='submit'>
            <button className='submit-button' disabled={!values.name || !values.email || !values.role}>submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}