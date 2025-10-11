import type { FC } from "react";

type TaskStatus = "Done" | "In Progress" | "Not Started";

type Task = {
  id: number;
  task: string;
  status: TaskStatus;
  next: string;
};

const tasks: Task[] = [
  {
    id: 1,
    task: "Check with booth suppliers",
    status: "Done",
    next: "Completed",
  },
  {
    id: 2,
    task: "Figure out catering estimates",
    status: "Done",
    next: "Completed",
  },
  {
    id: 3,
    task: "Get insurance for DHI",
    status: "Done",
    next: "Completed",
  },
  {
    id: 4,
    task: "Start form for badge scanners",
    status: "Done",
    next: "Completed",
  },
  {
    id: 5,
    task: "Sign up tickets for employees DHI",
    status: "Done",
    next: "Completed",
  },
  {
    id: 6,
    task: "Create dashboard for Roop & Puneet",
    status: "Done",
    next: "Completed",
  },
  {
    id: 7,
    task: "Create billboard ideas",
    status: "Done",
    next: "Completed",
  },
  {
    id: 8,
    task: "Order my ticket",
    status: "Done",
    next: "Completed",
  },
  { 
    id: 9, 
    task: "Pickup Avaware key", 
    status: "In Progress", 
    next: "Follow up with Puneet" 
  },
  {
    id: 10,
    task: "Order Schiller x Bild polos",
    status: "In Progress",
    next: "Waiting for sizes from Schiller",
  },
  {
    id: 11,
    task: "Purchase small booth supplies",
    status: "In Progress",
    next: "Identify items not provided by Fern",
  },
  {
    id: 12,
    task: "Mockup Final Booth",
    status: "In Progress",
    next: "Get confirmation from Fern + design stand up sign",
  },
  {
    id: 13,
    task: "Order 250 logo items",
    status: "In Progress",
    next: "Find under $1 items",
  },
  {
    id: 14,
    task: "Order name tags",
    status: "In Progress",
    next: "Waiting for second revision response",
  },
  {
    id: 15,
    task: "Bild.ai 3D product for showcase",
    status: "In Progress",
    next: "Draft final rendering of 3D print for Puneet",
  },
  {
    id: 16,
    task: "Order Roop and Owen tickets",
    status: "In Progress",
    next: "Waiting for info",
  },
  {
    id: 17,
    task: "Buy behaviroal data setup",
    status: "In Progress",
    next: "Decide if full company set up or finding software to integrate with our own camera is better",
  },
  {
    id: 18,
    task: "Upload insurance",
    status: "In Progress",
    next: "Waiting for final policy to be sent by company",
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
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.status === "Done").length;
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress").length;
  const notStartedTasks = tasks.filter((task) => task.status === "Not Started").length;

  return (
    <section id="strategy" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-lg overflow-hidden">
          <div className="px-6 sm:px-10 py-10 border-b border-slate-200/60 bg-white/80">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                Strategy &amp; GTM
              </h2>
              <p className="text-slate-500 text-lg">Bild.ai Project Management</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
                <div className="text-4xl font-bold text-slate-900 mb-1">{totalTasks}</div>
                <div className="text-sm text-slate-500 font-medium">Total Tasks</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 shadow-lg shadow-emerald-500/20 text-white">
                <div className="text-4xl font-bold mb-1">{doneTasks}</div>
                <div className="text-sm text-emerald-50 font-medium">Completed</div>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-6 shadow-lg shadow-amber-400/20 text-white">
                <div className="text-4xl font-bold mb-1">{inProgressTasks}</div>
                <div className="text-sm text-amber-50 font-medium">In Progress</div>
              </div>
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl p-6 shadow-sm text-slate-700">
                <div className="text-4xl font-bold mb-1">{notStartedTasks}</div>
                <div className="text-sm text-slate-600 font-medium">Not Started</div>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-10">
            <div className="space-y-4">
              {tasks.map((task) => {
                const config = statusConfig[task.status];

                return (
                  <div
                    key={task.id}
                    className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 overflow-hidden hover:border-slate-300"
                  >
                    <div className="p-7">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <span className="text-slate-700 font-bold text-xl">{task.id}</span>
                        </div>

                        <div className="flex-grow min-w-0">
                          <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">
                            {task.task}
                          </h3>

                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 flex-wrap">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${config.badgeClasses}`}>
                              <div className={`w-2 h-2 rounded-full ${config.dotClasses}`} />
                              {config.label}
                            </div>
                            {task.status !== "Done" && (
                              <div className="flex items-start gap-2 flex-1 min-w-0">
                                <span className="text-slate-400 font-medium text-sm whitespace-nowrap">Next:</span>
                                <span className="text-slate-600 text-sm leading-relaxed">{task.next}</span>
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