import React, { Suspense, lazy } from "react"
import { Switch, Route } from "react-router"

import GlobalStyle from "./GlobalStyle"
import Layout from "./Widgets/Layout"

const Home = lazy(() => import("./Home"))
const NotFound = lazy(() => import("./NotFound"))
const Workout = lazy(() => import("./Workout"))

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/workout" component={Workout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </>
  )
}
