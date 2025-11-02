import { type FC, useState } from "react";

type TaskStatus = "Done" | "In Progress" | "Not Started";

type Task = {
  id: number;
  task: string;
  status: TaskStatus;
  next: string;
  dueDate?: string;
};

const tasks: Task[] = [
  {
    id: 1,
    task: "Finalize Brochures + Business Cards",
    status: "In Progress",
    next: "Waiting on Roop + Puneet Final Approval",
    dueDate: "11/3",
  },
  {
    id: 2,
    task: "Finalize Schiller x Bild Polo",
    status: "In Progress",
    next: "Waiting on Puneet Final Approval",
    dueDate: "11/3",
  },
  {
    id: 3,
    task: "Call Badge Scanner people",
    status: "In Progress",
    next: "Call Monday when they open",
    dueDate: "11/3",
  },
  {
    id: 4,
    task: "Email/Call for 3D Product",
    status: "In Progress",
    next: "Email/call Monday when they open",
    dueDate: "11/3",
  },
  {
    id: 5,
    task: "Texas Company Outreach",
    status: "In Progress",
    next: "Finish top of deck DHI tasks first",
    dueDate: "TBD",
  },
  {
    id: 6,
    task: "Behavioral Data Setup Write Up",
    status: "In Progress",
    next: "Complete after DHI",
    dueDate: "TBD",
  },
  {
    id: 7,
    task: "Review Market Size",
    status: "In Progress",
    next: "Complete after DHI",
    dueDate: "TBD",
  },
  {
    id: 8,
    task: "Outreach to List from Puneet",
    status: "In Progress",
    next: "Waiting for response from Puneet on how to reach out",
    dueDate: "TBD",
  },
  {
    id: 9,
    task: "Brand + Messaging System",
    status: "Done",
    next: "Built the transition between core message and logo to unify visual and conceptual flow",
  },
  {
    id: 10,
    task: "Booth Compliance Review",
    status: "Done",
    next: "Identified sightline and banner restrictions in DHI code and corrected layout before fabrication",
  },
];

const statusConfig: Record<
  TaskStatus,
  { badgeClasses: string; dotClasses: string; label: string }
> = {
  Done: {
    badgeClasses:
      "bg-emerald-50 text-emerald-700 border border-emerald-200",
    dotClasses: "bg-emerald-500",
    label: "Complete",
  },
  "In Progress": {
    badgeClasses: "bg-amber-50 text-amber-700 border border-amber-200",
    dotClasses: "bg-amber-400",
    label: "In Progress",
  },
  "Not Started": {
    badgeClasses: "bg-slate-50 text-slate-600 border border-slate-200",
    dotClasses: "bg-slate-300",
    label: "Not Started",
  },
};

const StrategyDashboard: FC = () => {
  const [filter, setFilter] = useState<"inProgress" | "done">("inProgress");

  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.status === "Done").length;
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress").length;

  const filteredTasks =
    filter === "done"
      ? tasks.filter((task) => task.status === "Done")
      : tasks.filter((task) => task.status === "In Progress");

  return (
    <section
      id="strategy"
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-lg overflow-hidden">
          <div className="px-6 sm:px-10 py-10 border-b border-slate-200/60 bg-white/80">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                Strategy &amp; GTM
              </h2>
              <p className="text-slate-500 text-lg">Bild.ai Project Management</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {totalTasks}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  Total Tasks
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 shadow-lg shadow-emerald-500/20 text-white">
                <div className="text-4xl font-bold mb-1">{doneTasks}</div>
                <div className="text-sm text-emerald-50 font-medium">Completed</div>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-6 shadow-lg shadow-amber-400/20 text-white">
                <div className="text-4xl font-bold mb-1">{inProgressTasks}</div>
                <div className="text-sm text-amber-50 font-medium">In Progress</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setFilter("inProgress")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  filter === "inProgress"
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setFilter("done")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  filter === "done"
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-10">
            <div className="space-y-4">
              {filteredTasks.map((task) => {
                const config = statusConfig[task.status];

                return (
                  <div
                    key={task.id}
                    className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 overflow-hidden hover:border-slate-300"
                  >
                    <div className="p-7">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <span className="text-slate-700 font-bold text-xl">
                            {task.id}
                          </span>
                        </div>

                        <div className="flex-grow min-w-0">
                          <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">
                            {task.task}
                          </h3>

                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${config.badgeClasses}`}
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${config.dotClasses}`}
                                />
                                {config.label}
                              </div>
                              {task.status === "In Progress" && task.dueDate && (
                                <div className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                                  <svg
                                    className="w-3 h-3 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  Due: {task.dueDate}
                                </div>
                              )}
                            </div>
                            {task.status !== "Done" && (
                              <div className="flex items-start gap-2">
                                <span className="text-slate-400 font-medium text-sm whitespace-nowrap">
                                  Next:
                                </span>
                                <span className="text-slate-600 text-sm leading-relaxed">
                                  {task.next}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 border-t border-slate-200/60 bg-white/80">
            <p className="text-center text-slate-400 text-sm font-medium">
              Bild.ai Task Management System x Val Whitten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyDashboard;