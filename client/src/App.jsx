import JobList from "./components/jobs/JobList";
import UserLogin from "./components/auth/Login";
import SignupForm from "./components/auth/Signup";

function App() {
  const onLogin = (data) => {
    console.log("Login Data:", data);
  };
   const onSignin = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div>
      {/* <h1>My Job list</h1> */}
    {/* <JobList /> */}
      <UserLogin onLogin={onLogin} />
      {/* <SignupForm onSignin={onSignin}/> */}
    </div>
  );
}

export default App;
