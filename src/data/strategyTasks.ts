export type TaskStatus = "Done" | "In Progress" | "Not Started";

export type StrategyTask = {
  id: number;
  task: string;
  status: TaskStatus;
  next: string;
};

export const strategyTasks: StrategyTask[] = [
  { id: 1, task: "Call UPS for Avaware key", status: "In Progress", next: "Make the call" },
  {
    id: 2,
    task: "Order Schiller x Bild polos",
    status: "In Progress",
    next: "Waiting for sizes from Schilling",
  },
  {
    id: 3,
    task: "Start form for badge scanners",
    status: "In Progress",
    next: "Send email asking about this, get price from Anthony",
  },
  {
    id: 4,
    task: "Check with booth suppliers",
    status: "Done",
    next: "Completed",
  },
  {
    id: 5,
    task: "Purchase small booth supplies",
    status: "In Progress",
    next: "Identify items not provided by Fern",
  },
  {
    id: 6,
    task: "Figure out catering estimates",
    status: "Done",
    next: "Completed",
  },
  {
    id: 7,
    task: "Order 250 logo items",
    status: "In Progress",
    next: "Find under $1 items",
  },
  {
    id: 8,
    task: "Order name tags",
    status: "In Progress",
    next: "Waiting for revision response",
  },
  {
    id: 9,
    task: "Bild.ai 3D product for showcase",
    status: "In Progress",
    next: "Find 3D printing service",
  },
  {
    id: 10,
    task: "Create 3 billboard ideas",
    status: "In Progress",
    next: "Brainstorm concepts",
  },
  {
    id: 11,
    task: "Create dashboard for Roop & Puneet",
    status: "Done",
    next: "Completed",
  },
  {
    id: 12,
    task: "Order Roop and Owen tickets",
    status: "In Progress",
    next: "Waiting for info",
  },
  {
    id: 13,
    task: "Order my ticket",
    status: "In Progress",
    next: "Waiting for syllabus confirmation (Puneet flying Sunday)",
  },
  {
    id: 14,
    task: "Get insurance for DHI",
    status: "Done",
    next: "Completed",
  },
  {
    id: 15,
    task: "Sign up tickets for employees DHI",
    status: "In Progress",
    next: "Registration process",
  },
];
