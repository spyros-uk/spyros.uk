import React from "react";

import GlobalStyle from "../components/GlobalStyle";
import Layout from "../components/Layout";
import Frame from "../components/Frame";
import Home from "../pages/Home";
import { Switch, Route } from "react-router";
import NotFound from "../pages/NotFound";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Frame>
          <Switch>
            <Route path="/" exact="true">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Frame>
      </Layout>
    </>
  );
}
