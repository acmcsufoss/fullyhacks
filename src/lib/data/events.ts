import { EventType } from "@/types/interface";

export const events: EventType[] = [
  {
    id: "event1",
    name: "Check-in",
    type: "event",
    date: 0,
    timeString: "1:00 - 3:00 PM",
    location: "SGMH",
    startTime: 0,
    endTime: 2,
    row: 0.5
  },
  {
    id: "event2",
    name: "Opening Ceremony",
    type: "event",
    date: 0,
    timeString: "3:00 - 4:00 PM",
    location: "SGMH-1502",
    startTime: 2,
    endTime: 3,
    row: 1.5
  },
  {
    id: "event9",
    name: "Campus Tour (Kelsey)",
    type: "event",
    date: 0,
    timeString: "4:00 - 4:30 PM",
    location: "CSUF",
    startTime: 3.0,
    endTime: 4.0,
    row: 4.5
  },
  {
    id: "event4",
    name: "Team Forming",
    type: "event",
    date: 0,
    timeString: "4:10 - 5:30 PM",
    location: "ECS Quad",
    startTime: 3.1,
    endTime: 4.5,
    row: 2
  },
  {
    id: "event3",
    name: "FULLYHACKS BEGINS",
    type: "event",
    date: 0,
    timeString: "4:00 PM",
    location: "CS 101, 102B, 104, 200, 202, 300, 401, 408",
    startTime: 3,
    endTime: 4,
    row: 0.5
  },
  {
    id: "mentorship1",
    name: "Mentorship",
    type: "mentorship",
    date: 0,
    timeString: "5:00 - 8:00 PM",
    location: "CS 102A",
    startTime: 4,
    endTime: 6.95,
    row: 6.5
  },
  {
    id: "mentorship2",
    name: "Mentorship",
    type: "mentorship",
    date: 0,
    timeString: "8:00 - 11:00 PM",
    location: "CS 102A",
    startTime: 7.05,
    endTime: 10,
    row: 6.5
  },
  {
    id: "food1",
    name: "Dinner",
    type: "food",
    date: 0,
    timeString: "5:30 - 7:30 PM",
    location: "ECS Quad",
    startTime: 4.5,
    endTime: 6.5,
    row: 1.2
  },
  {
    id: "workshop1",
    name: "Intro to SvelteKit (Tomas)",
    type: "workshop",
    date: 0,
    timeString: "6:00 - 7:00 PM",
    location: "CS 300",
    startTime: 5,
    endTime: 6,
    row: 2.5
  },
  {
    id: "workshop2",
    name: "Notion 101: A Beginner's Guide (Mon)",
    type: "workshop",
    timeString: "6:00 - 7:00 PM",
    location: "CS 401",
    date: 0,
    startTime: 5,
    endTime: 6,
    row: 3.8
  },
  {
    id: "workshop3",
    name: "Intro to AWS (Daniel)",
    type: "workshop",
    timeString: "7:00 - 8:00 PM",
    location: "CS 401",
    date: 0,
    startTime: 6,
    endTime: 7,
    row: 5.2
  },
  {
    id: "workshop4",
    name: "Intro to Python (Owen)",
    type: "workshop",
    timeString: "8:00 - 9:00 PM",
    location: "CS 300",
    date: 0,
    startTime: 7,
    endTime: 8,
    row: 3.8
  },
  {
    id: "workshop5",
    name: "Integrating AI Into Projects (Ryan)",
    type: "workshop",
    timeString: "8:00 - 9:00 PM",
    location: "CS 401",
    date: 0,
    startTime: 7,
    endTime: 8,
    row: 2.5
  },
  {
    id: "event11",
    name: "DOOR CLOSED",
    type: "event",
    date: 0,
    timeString: "10:00 PM",
    location: "CS Building",
    startTime: 9,
    endTime: 10,
    row: 0.5
  },
  {
    id: "event12",
    name: "Sleeping Room Open",
    type: "event",
    date: 0,
    timeString: "11:30 PM",
    location: "CS 110A, CS 110B",
    startTime: 10.5,
    endTime: 11.5,
    row: 0.5
  },
  {
    id: "activity1",
    name: "Boiler Set (Patrick)",
    type: "activity",
    date: 0,
    timeString: "12:00 - 1:00 AM",
    location: "CS 300",
    startTime: 11,
    endTime: 12,
    row: 1.7
  },
  {
    id: "food2",
    name: "Breakfast",
    type: "food",
    date: 1,
    timeString: "9:00 - 10:30 AM",
    location: "CS 104",
    startTime: 20,
    endTime: 21.5,
    row: 2.5
  },
  {
    id: "mentorship3",
    name: "Mentorship",
    type: "mentorship",
    date: 1,
    timeString: "9:00 AM - 12:00 PM",
    location: "CS 102A",
    startTime: 20,
    endTime: 22.95,
    row: 5.0
  },
  {
    id: "mentorship4",
    name: "Mentorship",
    type: "mentorship",
    date: 0,
    timeString: "12:00 - 3:00 PM",
    location: "CS 102A",
    startTime: 23.05,
    endTime: 26,
    row: 5.0
  },
  {
    id: "event13",
    name: "Lunch",
    type: "food",
    date: 1,
    timeString: "12:00 - 2:00 PM",
    location: "ECS Quad",
    startTime: 23,
    endTime: 24.5,
    row: 3
  },
  {
    id: "event6",
    name: "FULLYHACKS ENDS",
    type: "event",
    date: 1,
    timeString: "4:00 PM",
    location: "CS 101, CS 102B, CS 104, CS 200, CS 202, CS 300, CS 401, CS 408",
    startTime: 27,
    endTime: 28,
    row: 0.5
  },
  {
    id: "event7",
    name: "Judging & Project Expo",
    type: "event",
    date: 1,
    timeString: "4:00 - 6:00 PM",
    location: "CS 104, 300, 401",
    startTime: 27,
    endTime: 29,
    row: 2.2
  },
  {
    id: "event8",
    name: "Closing ceremony & Announce Winners",
    type: "event",
    date: 1,
    timeString: "6:15 PM",
    location: "SGMH-1502",
    startTime: 29,
    endTime: 30,
    row: 3.2
  }
];
