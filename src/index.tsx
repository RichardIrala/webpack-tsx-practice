import React from "react";
import ReactDom from "react-dom/client";
import { Boton } from "./button";
console.log(process.env.NODE_ENV);
//div 1 en el html (?)
class elementoARenderizar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.setState({ boolean: true });
  }
  render() {
    //div 2
    return React.createElement("div", {
      className: "claseElementoARenderizar",

      children: React.createElement(Boton, {
        children: this.state?.["boolean"],
      }),
      onClick: () => {
        this.setState({ boolean: !this.state?.["boolean"] });
      },
    });
  }
}

//div 3
const elemento = React.createElement(
  "div",
  null,
  React.createElement(elementoARenderizar, null)
);

//Contenedor
const container = window.document.getElementById("root");

//Raiz donde se va a renderizar todo
const root = ReactDom.createRoot(container);

//Acción de renderizar componentes dentro del root
root.render(elemento);
