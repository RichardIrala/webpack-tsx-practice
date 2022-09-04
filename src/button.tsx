import React from "react";

export class Boton extends React.Component {
  count = 1;
  constructor(props) {
    super(props);
  }
  componentDidMount(): void {
    this.setState({ number: 0 });
  }

  render() {
    return React.createElement(
      "button",

      {
        className: "botoncito",
        style: { background: "aqua", fontSize: "24px" },
        onClick: () => {
          this.setState({ number: this.state["number"] + 1 });
        },
      },

      "Se ha presionado el boton: " +
        this.state?.["number"] +
        " veces " +
        this.props["children"]
    );
  }
}
