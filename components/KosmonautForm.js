function KosmonautForm() {
  const inputValues = {}
  const handleInputChange = () => null
  const addNewAstronaut = () => null
  const saveEditedAstronaut = () => null

  return (
    <form>
      <label>
        Jméno:
        <input type="text" name="name" value={inputValues.name} onChange={handleInputChange} />
      </label>

      <label>
        Příjmení:
        <input type="text" id="surname" name="surname" value={inputValues.surname} onChange={handleInputChange} />
      </label>

      <label>
        Datum narození:
        <input type="date" name="date" value={inputValues.date} onChange={handleInputChange} />
      </label>

      <label>
        Superschopnost:
        <input type="textarea" name="superpower" value={inputValues.superpower} onChange={handleInputChange} />
      </label>

      <button type="submit" onClick={addNewAstronaut}>PŘIDAT</button>
      <button type="submit" onClick={saveEditedAstronaut}>ULOŽIT ÚPRAVY</button>
    </form>
  )
}

export default KosmonautForm