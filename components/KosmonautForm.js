function KosmonautForm() {
  const inputValues = {}
  const handleInputChange = () => null
  const addNewAstronaut = () => null
  const saveEditedAstronaut = () => null

  return (
    <form>
      <label htmlFor="name">Jméno:</label>
      <input type="text" id="name" name="name" value={inputValues.name} onChange={handleInputChange} />

      <label htmlFor="surname">Příjmení:</label>
      <input type="text" id="surname" name="surname" value={inputValues.surname} onChange={handleInputChange} />

      <label htmlFor="date">Datum narození:</label>
      <input type="date" id="date" name="date" value={inputValues.date} onChange={handleInputChange} />

      <label htmlFor="superpower">Superschopnost:</label>
      <input type="textarea" id="superpower" name="superpower" value={inputValues.superpower} onChange={handleInputChange} />

      <button type="submit" onClick={addNewAstronaut}>PŘIDAT</button>
      <button type="submit" onClick={saveEditedAstronaut}>ULOŽIT ÚPRAVY</button>
    </form>
  )
}

export default KosmonautForm