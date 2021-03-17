import React, { useState } from 'react'

// https://reactjs.org/docs/forms.html

function KosmonautForm({ value, onSubmit }) {
  const [ inputValues, setInputValues ] = useState(value || {})

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(inputValues)
    setInputValues({})
  }

  return (
    <div>
      <h3>Přidat nového kosmonauta</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Jméno:
          <input type="text" name="name" value={inputValues.name || ''} onChange={handleInputChange} autoComplete='off' />
        </label>
        <br />

        <label>
          Příjmení:
          <input type="text" id="surname" name="surname" value={inputValues.surname || ''} onChange={handleInputChange} autoComplete='off' />
        </label>
        <br />

        <label>
          Datum narození:
          <input type="date" name="date" value={inputValues.date || ''} onChange={handleInputChange} autoComplete='off' />
        </label>
        <br />

        <label>
          Superschopnost:
          <input type="text" name="superpower" value={inputValues.superpower || ''} onChange={handleInputChange} autoComplete='off' />
        </label>
        <br />

        <button type="submit">ULOŽIT</button>
      </form>
    </div>
  )
}

export default KosmonautForm
