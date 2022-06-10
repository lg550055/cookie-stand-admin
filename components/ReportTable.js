import useResource from "../hooks/useResource"

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export default function ReportTable() {

  const { resources, deleteResource } = useResource()

  function clickHandler() {
    deleteResource(loc.id)
  }

  if (resources.length > 0) {
    return (
      <table className="bg-green-500 text-gray-50 mb-6 rounded-lg">
        <thead>
          <tr>
            <th>Location</th>
            {hours.map(hr => <th>{hr}</th>)}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            {resources.map(loc =>
              <tr>
                <td>{loc.location} <button onClick={clickHandler}>[x]</button></td>
                {loc.hourly_sales.map((hr, i) =>
                  <td key={i}>{hr}</td>
                )}
                <td>{loc.hourly_sales.reduce((p,c) => p+c,0)}</td>
              </tr>
            )}
        </tbody>
        <tfoot>
        <tr>
            <th>Total</th>
            {hourlytot.map(tot => 
                <th>{tot}</th>
              )}
          </tr>
        </tfoot>
      </table>
    )
  } else {
    return <h2 className="text-xl text-blue-400 mb-6">No Cookie Stands Available</h2>
  }
}
