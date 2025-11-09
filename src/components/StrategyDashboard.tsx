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
    task: "Design Email Campaign",
    status: "In Progress",
    next: "Waiting for approval from Roop",
    dueDate: "11/11",
  },
  {
    id: 2,
    task: "Review Market Size",
    status: "In Progress",
    next: "Complete after DHI",
    dueDate: "11/13",
  },
  {
    id: 3,
    task: "LinkedIn Post for Billboard",
    status: "In Progress",
    next: "Write draft",
    dueDate: "11/14",
  },
  {
    id: 4,
    task: "Texas Company Outreach",
    status: "In Progress",
    next: "Finish top of deck DHI tasks first",
    dueDate: "TBD",
  },
  {
    id: 5,
    task: "Behavioral Data Setup Write Up",
    status: "In Progress",
    next: "Complete after DHI",
    dueDate: "TBD",
  },
  {
    id: 6,
    task: "Outreach to List from Puneet",
    status: "In Progress",
    next: "Waiting for response from Puneet on how to reach out",
    dueDate: "TBD",
  },
  {
    id: 7,
    task: "Create Branding Sheet",
    status: "In Progress",
    next: "Gather all materials",
    dueDate: "TBD",
  },
  {
    id: 8,
    task: "Monster Branding Strategy",
    status: "In Progress",
    next: "Draft emails + find contacts",
    dueDate: "TBD",
  },
  {
    id: 9,
    task: "Organize Circle Back Meetings",
    status: "In Progress",
    next: "Waiting for shared file",
    dueDate: "TBD",
  },
  {
    id: 10,
    task: "Articles in Big Papers",
    status: "In Progress",
    next: "Outreach",
    dueDate: "TBD",
  },
  {
    id: 1,
    task: "Finalize Brochures + Business Cards",
    status: "Done",
    next: "Received Roop + Puneet final approval and completed production",
  },
  {
    id: 2,
    task: "Finalize Schiller x Bild Polo",
    status: "Done",
    next: "Received Puneet final approval and completed production",
  },
  {
    id: 3,
    task: "Call Badge Scanner people",
    status: "Done",
    next: "Called and secured badge scanner setup for event",
  },
  {
    id: 4,
    task: "Email/Call for 3D Product",
    status: "Done",
    next: "Contacted vendor and confirmed 3D product delivery",
  },
  {
    id: 5,
    task: "Branded Apparel + Identity",
    status: "Done",
    next: "Created Schiller × Bild polos, logo assets, and name tags for consistent brand presence",
  },
  {
    id: 6,
    task: "Monster Sponsorship Plan",
    status: "Done",
    next: "Built co-branding strategy to drive foot traffic and activation momentum",
  },
  {
    id: 7,
    task: "Insurance Compliance Check",
    status: "Done",
    next: "Verified that all booth components and activations met event insurance requirements",
  },
  {
    id: 8,
    task: "Division 8 Market Sizing",
    status: "Done",
    next: "Completed TAM/SAM analysis for U.S. Division 8 contractors and distributors",
  },
  {
    id: 9,
    task: "Custom Engagement Concepts",
    status: "Done",
    next: "Developed hard-claw machine, logo engraving, and VR demo concepts to attract visitors",
  },
  {
    id: 10,
    task: "Exhibitor Listing Recovery",
    status: "Done",
    next: "Fixed DHI exhibitor portal issue to reactivate our booth listing and search visibility",
  },
  {
    id: 11,
    task: "Behavioral Analytics Planning",
    status: "Done",
    next: "Designed booth data plan comparing camera-based and software-based behavior tracking",
  },
  {
    id: 12,
    task: "Keynote Development",
    status: "Done",
    next: "Worked with Roop on slide flow and messaging for AI in Division 8 presentation",
  },
  {
    id: 13,
    task: "Print + Asset Finalization",
    status: "Done",
    next: "Delivered final banners, print files, and mockups for Fern's production process",
  },
  {
    id: 14,
    task: "3D Product Displays",
    status: "Done",
    next: "Managed 3D product showcase mockups and vendor quote coordination with Johnathan",
  },
  {
    id: 15,
    task: "Logistics + Timeline Tracking",
    status: "Done",
    next: "Tracked shipments and production timelines with Fern, Schiller, and Monster for on-time setup",
  },
  {
    id: 16,
    task: "NFC Smart Card Rollout + Auto Contact System",
    status: "Done",
    next: "Implemented tap-to-save NFC cards and created an auto-contact card + Bitly landing site for instant profile, materials, and follow-up access",
  },
  {
    id: 17,
    task: "Badge Scanner Procurement + Enablement",
    status: "Done",
    next: "Identified badge scanning as a lead-gen tool, secured access, ensured we had enough devices, and learned system usage for fast booth capture",
  },
  {
    id: 18,
    task: "Merch Sourcing + Custom Design",
    status: "Done",
    next: "Identified cheapest, fastest, and most reliable merch options and custom-designed branded products",
  },
  {
    id: 19,
    task: "Contractor-First Positioning Strategy",
    status: "Done",
    next: "Developed messaging grounded in real contractor, estimator, and distributor workflows",
  },
  {
    id: 20,
    task: "Booth Code Learning + TV / Mount Layout",
    status: "Done",
    next: "Learned booth codes and rules; designed full TV placement, mounting, and spatial interaction flow",
  },
  {
    id: 21,
    task: "Full Booth Design + Mockups",
    status: "Done",
    next: "Created complete booth layout renders and digital walkthroughs to test engagement flow and sightlines",
  },
  {
    id: 22,
    task: "Booth Graphic System Design",
    status: "Done",
    next: "Designed every booth graphic including banners, walls, message architecture, and product panels",
  },
  {
    id: 23,
    task: "Times Square Billboard Creative",
    status: "Done",
    next: "Designed Times Square billboard concepts and the main transition hero slide for brand reveal",
  },
  {
    id: 24,
    task: "Keynote First Draft + Collateral",
    status: "Done",
    next: "Created the first draft of keynote slides, brochure language, and speaker notes for Roop to finalize",
  },
  {
    id: 25,
    task: "Complete Electrical Ordering + Setup Execution",
    status: "Done",
    next: "Ordered all electrical components and coordinated final booth power installation and wiring setup",
  },
  {
    id: 26,
    task: "Stand-Up Banner Design + Delivery",
    status: "Done",
    next: "Designed stand-up banner including message hierarchy, visual layout, and final production files",
  },
  {
    id: 27,
    task: "Booth Data + Conversion Tracking",
    status: "Done",
    next: "Built early tracking system for dwell time, engagement, and conversion triggers",
  },
  {
    id: 28,
    task: "Behavioral Motivation Strategy",
    status: "Done",
    next: "Identified subtle motivators influencing contractors and applied them to booth design and interactions",
  },
  {
    id: 29,
    task: "Travel Coordination + Lodging Logistics",
    status: "Done",
    next: "Ordered conference tickets for team, secured extra lodging, and tracked travel and accommodations logistics",
  },
  {
    id: 30,
    task: "LinkedIn Outreach + DHI Engagement Messaging",
    status: "Done",
    next: "Created LinkedIn outreach scripts and public posts inviting DHI attendees, driving booth traffic and brand awareness",
  },
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
  const [filter, setFilter] = useState<"inProgress" | "done">("inProgress");
  
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.status === "Done").length;
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress").length;
  
  const filteredTasks = filter === "done" 
    ? tasks.filter((task) => task.status === "Done")
    : tasks.filter((task) => task.status === "In Progress");

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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
              {filteredTasks.map((task, index) => {
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