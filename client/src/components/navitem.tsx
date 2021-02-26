import { Component } from "inferno";
import { Link, withRouter } from "inferno-router";

interface Props {
  children: Component[];
  to: string;
  location: { pathname: string };
}

export default withRouter((props: Props) => (
  <li>
    <Link
      to={props.to}
      class={
        "menu-item" + (props.to === props.location.pathname ? " active" : "")
      }
    >
      <span>{props.children}</span>
    </Link>
  </li>
));
