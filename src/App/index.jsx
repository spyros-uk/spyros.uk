import React from "react"
import { Switch, Route } from "react-router"

import GlobalStyle from "./GlobalStyle"
import Layout from "./Widgets/Layout"
import Frame from "./Widgets/Frame"

import Home from "./Home"
import NotFound from "./NotFound"
import Workout from "./Workout"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Frame>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/workout" component={Workout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Frame>
      </Layout>
    </>
  )
}
