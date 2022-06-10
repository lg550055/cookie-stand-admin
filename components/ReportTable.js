import useResource from "../hooks/useResource"

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export default function ReportTable() {

  const { resources, deleteResource } = useResource()

  if (resources) {

    let hr_tot = []
    for (let i in hours) {
      let hr = []
      resources.forEach(loc => hr.push(loc.hourly_sales[i]))
      hr_tot.push(hr.reduce((p,c) => p+c))
    }
    hr_tot.push(hr_tot.reduce((p,c) => p+c))
    
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
            <tr key={loc.id}>
              <td>
                {loc.location} <button onClick={()=>deleteResource(loc.id)} className="float-right">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 fill-blue-400" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg></button>
              </td>
              {loc.hourly_sales.map((hr, i) => <td key={i}>{hr}</td>)}
              <td>{loc.hourly_sales.reduce((p,c) => p+c,0)}</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            {hr_tot.map(e => <th>{e}</th>)}
          </tr>
        </tfoot>
      </table>
    )
  } else {
    return <h2 className="text-xl text-blue-400 mb-6">No Cookie Stands Available</h2>
  }
}
