
export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <form onSubmit={handleSubmit} className='mx-12 my-6 py-4 bg-green-500 text-center text-gray-50 rounded-lg'>
        <fieldset autoComplete='off'>
            {/* <legend className='text-2xl py-4'>Log In</legend> */}
            <label htmlFor="username">USER NAME</label>
            <br></br>
            <input name="username" placeholder="user name" className='text-blue-500 text-center' />
            <br></br><br></br>
            <label htmlFor="password">PASSWORD</label>
            <br></br>
            <input type="password" name="password" placeholder="password" className='text-blue-500 text-center' />
            <br></br><br></br>
            <button className="px-8 py-1.5 bg-blue-400 text-gray-50 rounded-lg">Log In</button>
        </fieldset>
    </form>
  );
}
