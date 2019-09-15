import React from "react";
import { H1 } from "../components/Typography";
import List from "../components/List";
import ListItem from "../components/List/ListItem";
import ListTitle from "../components/List/ListTitle";

export default function Workout() {
  return (
    <>
      <H1>MY WORKOUT</H1>

      <div>
        <ListTitle>Morning Routine</ListTitle>
        <List>
          <ListItem>Half Burpees</ListItem>
          <ListItem>Plank Alternating Toe Taps</ListItem>
          <ListItem>Side Plank Hold</ListItem>
          <ListItem>Low Plank to High Plank</ListItem>
          <ListItem>Butt Kicks</ListItem>
          <ListItem>Knee Taps</ListItem>
          <ListItem>Jumping Squats</ListItem>

          <ListItem>Russian Twists</ListItem>
          <ListItem>Leg Raises</ListItem>
          <ListItem>Hip Raises</ListItem>
          <ListItem>Flutter Kicks</ListItem>
          <ListItem>Plank Knees to Elbow</ListItem>
          <ListItem>Chair Sit Ups</ListItem>
          <ListItem>Seated In & Outs</ListItem>
          <ListItem>Jumping Jacks</ListItem>
        </List>
      </div>
    </>
  );
}
