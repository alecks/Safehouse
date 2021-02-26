import NavItem from "./navitem";
import { routes } from "../index";

export default function () {
  return (
    <div class="container">
      <div class="terminal-nav">
        <header>
          <div class="logo terminal-prompt">
            <a href="#">Safehouse</a>
          </div>
        </header>
        <nav class="terminal-menu">
          <ul>
            {routes.map((r) => {
              return <NavItem to={r.path}>{r.name}</NavItem>;
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
