import { Award, Target, TrendingUp, Users } from "lucide-react";
import { Job, Project } from "../types";

export const jobs: Job[] = [
  { title: "LEGAL INTERN", employer: "Moncure & Barnicle" },
  { title: "CAFE BARISTA", employer: "Maman NYC" },
  {
    title: "REAL ESTATE STRATEGY CONSULTANT",
    employer: "Mosaic Student Housing",
  },
  {
    title: "RESEARCH ASSISTANT",
    employer: "USC Center for Social and Economic Research",
  },
  { title: "CAMP COUNSELOR", employer: "Girl Scouts Camp" },
  { title: "FINANCE INTERN", employer: "State Farm" },
  { title: "TRANSCRIPTIONIST", employer: "Rev" },
  { title: "FOOD SERVER", employer: "Maiz Colombian Restaurant" },
  { title: "LEASING ASSISTANT", employer: "Hub LA Coliseum" },
  {
    title: "STUDENT PROCTOR",
    employer: "Phillips Exeter Office of Multicultural Affairs",
  },
  { title: "SALES AMBASSADOR", employer: "USC Alumni Annual Giving" },
  { title: "FAIR HOUSING TESTER", employer: "Pine Tree Legal" },
  { title: "REAL ESTATE INTERN", employer: "Berkshire Hathaway HomeServices" },
  { title: "FARMERS MARKET SELLER", employer: "Hawthorne Valley Farm" },
  { title: "GYM PROCTOR", employer: "Phillips Exeter" },
  {
    title: "SOCIAL IMPACT CONSULTING INTERN",
    employer: "Wayuu Taya Foundation",
  },
  { title: "CASHIER", employer: "The Corner Market" },
  { title: "FINANCIAL AID ASSISTANT", employer: "Bowdoin College" },
  { title: "REAL ESTATE INTERN", employer: "Corcoran Group" },
  { title: "RACE DAY WORKER", employer: "Seacoast Half Marathon" },
];

export const projects: Project[] = [
  {
    name: "Mosaic Student Communities",
    category: "Data Analytics",
    metric: "$200K VALUE DELIVERED/YEAR",
    description: "Student housing operator managing multiple properties",
    problem:
      "Student housing operator needed data-driven approach to reduce tenant turnover and optimize portfolio performance across multiple properties.",
    action:
      "Analyzed 750 tenant records, built predictive churn model using demographic and behavioral data, created ROI heatmap for retention interventions across property portfolio.",
    result:
      "Projected 20% churn reduction and $50K annual savings. Delivered actionable retention strategies with property-specific recommendations and implementation timeline.",
    colorClasses: "from-blue-600 to-purple-600",
  },
  {
    name: "Wayuu Taya Foundation",
    category: "Social Impact",
    metric: "150% REVENUE GROWTH",
    description:
      "Social impact foundation supporting Indigenous Wayuu artisans",
    problem:
      "Indigenous Wayuu artisans lacked market research and product positioning strategy to maximize revenue from traditional crafts in global markets.",
    action:
      "Conducted comprehensive market analysis, interviewed 30+ artisans, analyzed sales data across 12 product categories, and developed go-to-market strategy focusing on highest-margin offerings.",
    result:
      "150% revenue growth across 15+ women entrepreneurs. Established sustainable product pipeline and pricing strategy that honored cultural authenticity while maximizing market impact.",
    colorClasses: "from-green-600 to-teal-600",
  },
  {
    name: "Latino Business Student Association",
    category: "Mentorship",
    metric: "40% ENGAGEMENT BOOST",
    description: "Student organization for Latino business professionals",
    problem:
      "Student mentorship program had low engagement rates and no systematic approach to measuring success or optimizing mentor-mentee relationships.",
    action:
      "Built comprehensive KPI framework, redesigned matching algorithm based on career goals and experience, implemented tracking system for engagement metrics.",
    result:
      "40% improvement in engagement rates. Successfully matched 20+ underclassmen with targeted consulting prep mentors. Program became model for other professional organizations.",
    colorClasses: "from-orange-600 to-red-600",
  },
  {
    name: "Challenged Athlete Foundation",
    category: "Strategy",
    metric: "3X GROWTH POTENTIAL",
    description: "Nonprofit supporting athletes with physical challenges",
    problem:
      "Nonprofit needed strategic direction for expanding impact while maintaining operational efficiency in competitive fundraising environment.",
    action:
      "Benchmarked 11 similar nonprofits, analyzed 65 events across impact metrics, conducted stakeholder interviews, and identified white space opportunities in target demographics.",
    result:
      "Identified underserved youth market (ages 18–22) with 3x growth potential. Delivered strategic roadmap with specific program recommendations and resource allocation strategy.",
    colorClasses: "from-purple-600 to-pink-600",
  },
  {
    name: "Mental Health American LA",
    category: "Market Research",
    metric: "35% MARKET RECOVERY",
    description: "Mental health advocacy and support organization",
    problem:
      "Local bakery experiencing declining sales with no clear understanding of customer preferences or market gaps in competitive landscape.",
    action:
      "Analyzed 6 months of sales data, conducted 50+ customer surveys, benchmarked 8 competing bakeries, and identified specific product gaps in dietary accommodation offerings.",
    result:
      "Discovered 35% market loss from lack of non-dairy options. Delivered actionable product development roadmap with projected 25% revenue increase within 6 months.",
    colorClasses: "from-indigo-600 to-blue-600",
  },
];

export const getProjectIcon = (category: string) => {
  switch (category) {
    case "Data Analytics":
      return <TrendingUp className="w-6 h-6" />;
    case "Social Impact":
      return <Users className="w-6 h-6" />;
    case "Mentorship":
      return <Target className="w-6 h-6" />;
    case "Strategy":
      return <Award className="w-6 h-6" />;
    case "Market Research":
      return <TrendingUp className="w-6 h-6" />;
    default:
      return <TrendingUp className="w-6 h-6" />;
  }
};
