function AdminLogin() {

  const AdminLoginRequest = () => {
    alert("Hello Admin");
  }

  return (
    <>
      <h1>Hello, Administrator</h1>

      <form onSubmit={AdminLoginRequest}>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}
export default AdminLogin;
