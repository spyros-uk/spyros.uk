import React from "react"

import WorkoutListItem from "./WorkoutListItem"
import WorkoutListTitle from "./WorkoutListTitle"
import WorkoutList from "./WorkoutList"

export default function Workout() {
  return (
    <>
      <WorkoutListTitle>MY WORKOUT</WorkoutListTitle>

      <WorkoutList>
        <WorkoutListTitle>Morning Routine</WorkoutListTitle>
        <WorkoutListItem>Half Burpees</WorkoutListItem>
        <WorkoutListItem>Plank Alternating Toe Taps</WorkoutListItem>
        <WorkoutListItem>Side Plank Hold</WorkoutListItem>
        <WorkoutListItem>Low Plank to High Plank</WorkoutListItem>
        <WorkoutListItem>Butt Kicks</WorkoutListItem>
        <WorkoutListItem>Knee Taps</WorkoutListItem>
        <WorkoutListItem>Jumping Squats</WorkoutListItem>

        <WorkoutListItem>Russian Twists</WorkoutListItem>
        <WorkoutListItem>Leg Raises</WorkoutListItem>
        <WorkoutListItem>Hip Raises</WorkoutListItem>
        <WorkoutListItem>Flutter Kicks</WorkoutListItem>
        <WorkoutListItem>Plank Knees to Elbow</WorkoutListItem>
        <WorkoutListItem>Chair Sit Ups</WorkoutListItem>
        <WorkoutListItem>Seated In & Outs</WorkoutListItem>
        <WorkoutListItem>Jumping Jacks</WorkoutListItem>
      </WorkoutList>
    </>
  )
}
