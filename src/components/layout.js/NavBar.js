import React, {Component} from "react";

export class NavBar extends Component {
  static defaultProps = {
    title: "github finder",
    icon: "fab fa-github-alt",
  };
  render() {
    return (
      <nav className="navbar bg-dark">
        <h1>
          <a href="/">
            <i className={this.props.icon}> </i> {this.props.title}
          </a>
        </h1>
      </nav>
    );
  }
}

export default NavBar;
