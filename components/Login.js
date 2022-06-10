
export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset autoComplete='off'>
              <legend>Log In</legend>
              <label htmlFor="username">Username</label>
              <input name="username" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <button>Log In</button>
          </fieldset>
      </form>
  );
}
