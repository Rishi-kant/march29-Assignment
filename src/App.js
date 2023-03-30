
import { NavLink } from "react-router-dom";
import "./App.css"

function App() {

  const data=[
    {
      path:"/",
      name: "Home"
    },
    {
      path:"/about",
      name: "ABOUT"
    },
    {
      path:"/login",
      name: "LOGIN"
    },
    {
      path:"/register",
      name: "REGISTER"
    }
  ]
  return (
    <div className="header">
     {
      data.map((ele)=>{
        return(
          <div>
          <NavLink to={ele.path}>
              <h3 className="h3">{ele.name}</h3>
          </NavLink>
          </div>
        )
      })
     }
    </div>
  );
}

export default App;
