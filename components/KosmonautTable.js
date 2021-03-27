function KosmonautTable({ items, onEditClick, onDeleteClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Jméno</th>
          <th>Příjmení</th>
          <th>Datum narození</th>
          <th>Superschopnost</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.birthDate}</td>
            <td>{item.superpower}</td>
            <td><button onClick={() => onEditClick(item.id)}>edit</button></td>
            <td><button onClick={() => onDeleteClick(item.id)}>delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default KosmonautTable
