import { useMemo } from "react";
import type { FC } from "react";
import {
  strategyTasks,
  type StrategyTask,
  type TaskStatus,
} from "../data/strategyTasks";

const statusMeta: Record<
  TaskStatus,
  {
    badgeClasses: string;
    dotClasses: string;
    label: string;
    sectionTitle: string;
    sectionDescription: string;
  }
> = {
  Done: {
    badgeClasses: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    dotClasses: "bg-emerald-500",
    label: "Complete",
    sectionTitle: "Completed",
    sectionDescription: "Work wrapped and ready to report back.",
  },
  "In Progress": {
    badgeClasses: "bg-amber-50 text-amber-700 border border-amber-200",
    dotClasses: "bg-amber-400",
    label: "In Progress",
    sectionTitle: "In Progress",
    sectionDescription: "Active efforts that still need attention.",
  },
  "Not Started": {
    badgeClasses: "bg-slate-50 text-slate-600 border border-slate-200",
    dotClasses: "bg-slate-300",
    label: "Not Started",
    sectionTitle: "Not Started",
    sectionDescription: "Items queued up and ready to kick off.",
  },
};

const statusOrder: TaskStatus[] = ["In Progress", "Not Started", "Done"];

const StrategyDashboard: FC = () => {
  const metrics = useMemo(() => {
    return strategyTasks.reduce(
      (accumulator, task) => {
        accumulator.total += 1;
        accumulator[task.status] += 1;
        return accumulator;
      },
      { total: 0, Done: 0, "In Progress": 0, "Not Started": 0 } as Record<
        "total" | TaskStatus,
        number
      >,
    );
  }, []);

  const groupedTasks = useMemo(() => {
    return statusOrder
      .map((status) => {
        const tasks = strategyTasks.filter((task) => task.status === status);
        return { status, tasks } satisfies { status: TaskStatus; tasks: StrategyTask[] };
      })
      .filter((group) => group.tasks.length > 0);
  }, []);

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm transition-all hover:shadow-md">
                <div className="text-4xl font-bold text-slate-900 mb-1">{metrics.total}</div>
                <div className="text-sm text-slate-500 font-medium">Total Tasks</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 shadow-lg shadow-emerald-500/20 text-white">
                <div className="text-4xl font-bold mb-1">{metrics.Done}</div>
                <div className="text-sm text-emerald-50 font-medium">Completed</div>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-6 shadow-lg shadow-amber-400/20 text-white">
                <div className="text-4xl font-bold mb-1">{metrics["In Progress"]}</div>
                <div className="text-sm text-amber-50 font-medium">In Progress</div>
              </div>
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl p-6 shadow-sm text-slate-700">
                <div className="text-4xl font-bold mb-1">{metrics["Not Started"]}</div>
                <div className="text-sm text-slate-600 font-medium">Not Started</div>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-10">
            <div className="space-y-10">
              {groupedTasks.map((group) => {
                const meta = statusMeta[group.status];

                return (
                  <section key={group.status} aria-labelledby={`strategy-${group.status}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div>
                        <h3
                          id={`strategy-${group.status}`}
                          className="text-2xl font-semibold text-slate-900"
                        >
                          {meta.sectionTitle}
                        </h3>
                        <p className="text-sm text-slate-500">{meta.sectionDescription}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-slate-100 text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        {group.tasks.length} task{group.tasks.length === 1 ? "" : "s"}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {group.tasks.map((task) => {
                        const config = statusMeta[task.status];

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
                                  <h4 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">
                                    {task.task}
                                  </h4>

                                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 flex-wrap">
                                    <div
                                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${config.badgeClasses}`}
                                    >
                                      <div className={`w-2 h-2 rounded-full ${config.dotClasses}`} />
                                      {config.label}
                                    </div>
                                    {task.status !== "Done" && (
                                      <div className="flex items-start gap-2 flex-1 min-w-0">
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
                  </section>
                );
              })}
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 border-t border-slate-200/60 bg-white/80">
            <p className="text-center text-slate-400 text-sm font-medium">
              Bild.ai Task Management System
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyDashboard;
