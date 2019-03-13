import * as React from "react";
import { configuration } from "./components/Layout/config";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";
import routes from "./configuration/routes";

const render = (RootApp: any) => {
  ReactDOM.render(<RootApp />, document.getElementById("root"));
};

render(routes);
