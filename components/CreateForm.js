
export default function CreateForm(props) {
  return (
    <form onSubmit={props.onSubmit} className='my-6 px-4 bg-green-500 text-gray-50 rounded-lg'>
      <fieldset>
        <legend className='text-2xl py-4'>Create Cookie Stand</legend>
        <label>Location</label>
        <input name='location' className='w-1/2 text-black px-2' required />
        <br></br>
        <div className='inline-block px-2 py-6'>
          <label>Minimum Customers per Hour</label><br></br>
          <input name='mincust' type='number' required className='text-black px-2'/>
        </div>
        <div className='inline-block px-2 py-6'>
          <label>Maximum Customers per Hour</label><br></br>
          <input name='maxcust' type='number' required className='text-black px-2'/>
        </div>
        <div className='inline-block px-2 py-6'>
          <label>Average Cookies per Sale</label><br></br>
          <input name='avgcookies' type='number' placeholder="1.0" step="0.1" min="0" max="10" required className='text-black px-2'/>
        </div>
        <div className='inline-block px-2 py-6'>
          <button type='submit' className='bg-blue-400 px-8 rounded-lg'>Create</button>
        </div>
      </fieldset>
    </form>
  )
}
