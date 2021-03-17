function KosmonautTable({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Jméno</th>
          <th>Příjmení</th>
          <th>Datum narození</th>
          <th>Superschopnost</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.birthDate}</td>
            <td>{item.superpower}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default KosmonautTable
