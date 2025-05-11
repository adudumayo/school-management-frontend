import { useState } from "react";

function AdminLogin() {

  const [isApproved, setIsApproved] = useState(false);

  const AdminLoginRequest = (e) => {
    e.preventDefault();
    setIsApproved(true);
  }

  if (isApproved) {
    return <>WHAT OP DO YOU WANNA ADMIN MY ADMIN?</>
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
