import React from "react"

import WorkoutListTitle from "./WorkoutListTitle"
import MorningRoutine from "./MorningRoutine"
import Frame from "../Widgets/Frame"

export default function Workout() {
  return (
    <Frame>
      <WorkoutListTitle>MY WORKOUT</WorkoutListTitle>
      <MorningRoutine />
    </Frame>
  )
}
