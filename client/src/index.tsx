import { render } from "inferno";
import { BrowserRouter, Switch, Route } from "inferno-router";

import NavBar from "./components/navbar";
import "terminal.css";
import "./main.css";

import { initDevTools } from "inferno-devtools";
import PasswordsPage from "./pages/passwords";
if (process.env.NODE_ENV === "development") {
  initDevTools();
}

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Info",
    render: () => <p>This page is WIP.</p>,
  },
  { path: "/passwords", name: "Passwords", component: PasswordsPage },
];

function App() {
  return (
    <BrowserRouter>
      <>
        <div class="terminal">
          <NavBar />
        </div>

        <div className="container">
          <Switch>
            {routes.map((props, i) => (
              <Route key={i} {...props} />
            ))}
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("app"));
