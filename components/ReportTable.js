import { hours } from "../data"


export default function ReportTable({ locations }) {

  let sales = []
  let hourly = []
  locations.forEach( loc => {
    hourly = hours.map(_ => Math.floor((loc.mincust+loc.maxcust)/2 * loc.avgcookies*Math.random()))
    let loctotal = Math.floor(hourly.reduce((p,c) => p+c, 0))
    hourly = [...[loc.location], ...hourly, ...[loctotal]]
    sales.push(hourly)
  })

  let hourlytot = []
  for (let i=1; i<hourly.length; i++) {
    let acc = 0
    sales.forEach( st => {
      acc += st[i]
    })
    hourlytot.push(acc)
  }

  if (locations.length > 0) {
    return (
      <table className="bg-green-500 text-gray-50 mb-6 rounded-lg">
        <thead>
          <tr>
            <th>Location</th>
            {hours.map(hr => 
              <th>{hr}</th>
            )}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            {sales.map(loc =>
              <tr>
                {loc.map(item =>
                  <td>{item}</td>
                )}
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
