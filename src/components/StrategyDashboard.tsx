import { type FC } from "react";

type TaskStatus = "Done" | "In Progress" | "Not Started";

type Task = {
  id: number;
  task: string;
  status: TaskStatus;
  next: string;
  dueDate?: string;
};

const tasks: Task[] = [
  // ... all your tasks remain the same
];

const statusConfig: Record<TaskStatus, { badgeClasses: string; dotClasses: string; label: string }> = {
  Done: {
    badgeClasses: "bg-emerald-50 text-emerald-700 border border-emerald-200",
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
  // Show all tasks, no filtering
  const allTasks = tasks;

  return (
    <section id="strategy" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-lg overflow-hidden">
          <div className="px-6 sm:px-10 py-10">
            <div className="space-y-4">
              {allTasks.map((task, index) => {
                const config = statusConfig[task.status];
                const displayId = index + 1;

                return (
                  <div
                    key={`${task.status}-${index}`}
                    className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 overflow-hidden hover:border-slate-300"
                  >
                    <div className="p-7">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <span className="text-slate-700 font-bold text-xl">{displayId}</span>
                        </div>

                        <div className="flex-grow min-w-0">
                          <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">
                            {task.task}
                          </h3>

                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <div className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${config.badgeClasses}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${config.dotClasses}`} />
                                {config.label}
                              </div>
                              {task.status === "In Progress" && task.dueDate && (
                                <div className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  Due: {task.dueDate}
                                </div>
                              )}
                            </div>
                            <div className="flex items-start gap-2">
                              {task.status === "Done" ? (
                                <span className="text-slate-600 text-sm leading-relaxed">{task.next}</span>
                              ) : (
                                <>
                                  <span className="text-slate-400 font-medium text-sm whitespace-nowrap">Next:</span>
                                  <span className="text-slate-600 text-sm leading-relaxed">{task.next}</span>
                                </>
                              )}
                            </div>
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