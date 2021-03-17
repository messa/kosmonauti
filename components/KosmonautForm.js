import React, { useState } from 'react'

// https://reactjs.org/docs/forms.html

const defaultInputValues = {
  name: '',
  surname: '',
  date: '',
  superpower: ''
}

function KosmonautForm({ onSubmit }) {
  const [ inputValues, setInputValues ] = useState(defaultInputValues)

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(inputValues)
    setInputValues(defaultInputValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Jméno:
        <input type="text" name="name" value={inputValues.name} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Příjmení:
        <input type="text" id="surname" name="surname" value={inputValues.surname} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Datum narození:
        <input type="date" name="date" value={inputValues.date} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Superschopnost:
        <input type="textarea" name="superpower" value={inputValues.superpower} onChange={handleInputChange} />
      </label>
      <br />

      <button type="submit">ULOŽIT</button>
    </form>
  )
}

export default KosmonautForm