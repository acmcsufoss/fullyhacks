import { TeamType } from "@/types/interface";

export const team: TeamType[] = [
  {
    tag: "Directors",
    teamMembers: [
      {
        id: "director1",
        name: "Sama",
        image: "/team/sama.jpeg",
        role: "Director",
        href: "https://www.linkedin.com/in/sama-ahmedd",
        vertex: { x: 400, y: 100 },
        textBelow: false
      },
      {
        id: "director2",
        name: "Eric",
        image: "/team/eric.jpg",
        role: "Director + Finance Lead",
        href: "https://linkedin.com/in/lyyeric",
        vertex: { x: 250, y: 550 },
        textBelow: true
      },
      {
        id: "director3",
        name: "Joel",
        image: "/team/joel.jpg",
        role: "Director",
        href: "https://www.linkedin.com/in/joeldanielrico",
        vertex: { x: 650, y: 270 },
        textBelow: false
      },
      {
        id: "director4",
        name: "Pillow",
        image: "",
        role: "Director",
        href: "https://google.com",
        vertex: { x: 750, y: 550 },
        textBelow: true
      }
    ]
  },
  {
    tag: "Web Team",
    teamMembers: [
      {
        id: "web1",
        name: "Tomas",
        image: "",
        role: "Web Team Lead",
        href: "https://google.com",
        vertex: { x: 100, y: 150 },
        textBelow: true
      },
      {
        id: "web2",
        name: "Jeremiah",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 300, y: 120 },
        textBelow: true
      },
      {
        id: "web3",
        name: "John",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 450, y: 190 },
        textBelow: true
      },
      {
        id: "web4",
        name: "Andres",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 500, y: 320 },
        textBelow: true
      },
      {
        id: "web5",
        name: "Jordan",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 530, y: 550 },
        textBelow: true
      },
      {
        id: "web6",
        name: "Gustavo",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 850, y: 390 },
        textBelow: true
      },
      {
        id: "web7",
        name: "Daniel",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 880, y: 620 },
        textBelow: true
      }
    ]
  },
  {
    tag: "Design Team",
    teamMembers: [
      {
        id: "design1",
        name: "Kristen",
        image: "",
        role: "Design Team Lead",
        href: "https://www.linkedin.com/in/kristenportillo",
        vertex: { x: 250, y: 100 },
        textBelow: false
      },
      {
        id: "design2",
        name: "Elzie",
        image: "",
        role: "Design Team Lead",
        href: "https://elzie.me",
        vertex: { x: 470, y: 140 },
        textBelow: true
      },
      {
        id: "design3",
        name: "AJ",
        image: "",
        role: "Design Officer",
        href: "",
        vertex: { x: 200, y: 220 },
        textBelow: true
      },
      {
        id: "design4",
        name: "Richard",
        image: "",
        role: "Design Officer",
        href: "",
        vertex: { x: 410, y: 420 },
        textBelow: true
      },
      {
        id: "design5",
        name: "Ryan",
        image: "",
        role: "Design Officer",
        href: "",
        vertex: { x: 580, y: 380 },
        textBelow: true
      },
      {
        id: "design6",
        name: "Jeff",
        image: "",
        role: "Design Officer",
        href: "",
        vertex: { x: 430, y: 700 },
        textBelow: true
      },
      {
        id: "design7",
        name: "Lori",
        image: "",
        role: "Design Officer",
        href: "",
        vertex: { x: 880, y: 620 },
        textBelow: true
      }
    ]
  },
  {
    tag: "Marketing Team",
    teamMembers: [
      {
        id: "marketing1",
        name: "Mark",
        image: "",
        role: "Marketing Team Lead",
        href: "",
        vertex: { x: 630, y: 60 },
        textBelow: true
      },
      {
        id: "marketing2",
        name: "Evan",
        image: "",
        role: "Marketing Officer",
        href: "",
        vertex: { x: 290, y: 270 },
        textBelow: true
      },
      {
        id: "marketing3",
        name: "Sarah",
        image: "",
        role: "Marketing Officer",
        href: "",
        vertex: { x: 790, y: 370 },
        textBelow: true
      },
      {
        id: "marketing4",
        name: "Kenny",
        image: "",
        role: "Marketing Officer",
        href: "",
        vertex: { x: 200, y: 690 },
        textBelow: true
      },
      {
        id: "marketing5",
        name: "Zane",
        image: "",
        role: "Marketing Officer",
        href: "",
        vertex: { x: 740, y: 650 },
        textBelow: true
      }
    ]
  },
  // Separate Operations Team into two because they are so many
  {
    tag: "Operations Team",
    teamMembers: [
      {
        id: "operations1",
        name: "Max",
        image: "",
        role: "Operations Team Lead",
        href: "",
        vertex: { x: 340, y: 50 },
        textBelow: true
      },
      {
        id: "operations2",
        name: "Cyril",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 500, y: 100 },
        textBelow: true
      },
      {
        id: "operations3",
        name: "Casey",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 680, y: 70 },
        textBelow: true
      },
      {
        id: "operations4",
        name: "Brian",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 300, y: 240 },
        textBelow: true
      },
      {
        id: "operations5",
        name: "Owen",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 740, y: 220 },
        textBelow: true
      },
      {
        id: "operations6",
        name: "Trang",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 220, y: 380 },
        textBelow: true
      },
      {
        id: "operations7",
        name: "Timothy",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 320, y: 520 },
        textBelow: true
      },
      {
        id: "operations8",
        name: "Taymas",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 480, y: 390 },
        textBelow: true
      },
      {
        id: "operations9",
        name: "Alexander",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 680, y: 410 },
        textBelow: true
      },
      {
        id: "operations10",
        name: "Nick",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 840, y: 470 },
        textBelow: true
      },
      {
        id: "operations11",
        name: "Celine",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 460, y: 640 },
        textBelow: true
      },
      {
        id: "operations12",
        name: "Patrick",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 690, y: 680 },
        textBelow: true
      },
      {
        id: "operations13",
        name: "Mariia",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 820, y: 620 },
        textBelow: true
      }
    ]
  },
  {
    tag: "Operations Team",
    teamMembers: [
      {
        id: "operations14",
        name: "Demi",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 250, y: 70 },
        textBelow: true
      },
      {
        id: "operations15",
        name: "Ashley",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 200, y: 220 },
        textBelow: true
      },
      {
        id: "operations16",
        name: "Nestor",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 410, y: 50 },
        textBelow: true
      },
      {
        id: "operations17",
        name: "Gabe",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 520, y: 120 },
        textBelow: true
      },
      {
        id: "operations18",
        name: "Kelsey",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 390, y: 250 },
        textBelow: true
      },
      {
        id: "operations19",
        name: "Yves",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 420, y: 370 },
        textBelow: true
      },
      {
        id: "operations20",
        name: "Syon",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 550, y: 390 },
        textBelow: true
      },
      {
        id: "operations21",
        name: "Kent",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 560, y: 520 },
        textBelow: true
      },
      {
        id: "operations22",
        name: "Amy",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 720, y: 490 },
        textBelow: true
      },
      {
        id: "operations23",
        name: "Brianna",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 400, y: 620 },
        textBelow: true
      },
      {
        id: "operations24",
        name: "Kayla",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 850, y: 440 },
        textBelow: true
      },
      {
        id: "operations25",
        name: "Erl-John",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 880, y: 620 },
        textBelow: true
      },
      {
        id: "operations26",
        name: "David",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 570, y: 690 },
        textBelow: true
      },
      {
        id: "operations27",
        name: "Angel",
        image: "",
        role: "Operations Officer",
        href: "",
        vertex: { x: 720, y: 700 },
        textBelow: true
      }
    ]
  }
];
