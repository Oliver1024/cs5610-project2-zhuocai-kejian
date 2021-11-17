# Where'd U Hide Beta V0.1.11.17

## New Update - Post before School Project 2 ddl (11.17):
### I.What were some challenges you faced while making this app?
Lots of challenges popped up during this app:
1. React-dnd:
This is the most horrible thing for the whole app. It is not easy to understand a completely new document with no knowledge about that. We tried over a week to finally deploy that on our app.
2. Mobile Friendly:
It is not very comfortable to put two boards horizontally on the phone screen. Instead, we put them vertically if it is shown on screen.
This problem also exist when we work on deploying the react-dnd. This requires an extra package to allow users to drag with mobile.
### II. Given more time, what additional features, functional or design changes would you make
1. The cleaness of the code:
Lots of codes in this app is still very duplicated. For instance: component "boat" can be surely use certain properties to easily be copied with different characters. If given more time, we can aggregate these up.
2. The cleverness of AI:
Currently AI only pick from random accessible square. If more time is given, I think using BFS for AI to pick from recently picked square would be a perfect choice.
### III. What assumptions did you make while working on this assignment?
Redux is not always helpful. Espeically when I only need to focus on state of a specific component and only its child, useState, useReducer and useMemo is useful enough rather than create a new redux reducer.
### IV.How long did this assignment take to complete?
Over a week and for about 50 hours. Styling is also a very tiring work to be done.

## New Update (11.7):
Based on the latest version and thorough thoughts, the game is now currently designed into a new farm game, which allows you to find hidden animals.