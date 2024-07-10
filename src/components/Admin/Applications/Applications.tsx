"use client";

import Loading from "@/components/Loading/Loading";
import PopUp from "@/components/PopUp/PopUp";
import { ApplicationType } from "@/types/interface";
import React, { useMemo, useState } from "react";
import { Application } from "./Application";

interface ApplicationsProps {
  applications: ApplicationType[];
}
//Application Dashboard
const Applications: React.FC<ApplicationsProps> = (props) => {
  const { applications } = props;
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setLoading] = useState(false);
  const [applicationIdx, pushIdx] = useState<string[]>([]);
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value);
  };
  // Filter out application when choose from the Filter by: dropdown
  const getFilteredApplication = (
    applications: ApplicationType[],
    statusFilter: string
  ) => {
    return statusFilter === "all"
      ? applications.filter((app) => !applicationIdx.includes(app.id))
      : applications.filter((app) => app.status === statusFilter);
  };
  const filteredApplications = useMemo(() => {
    return getFilteredApplication(applications, statusFilter);
  }, [applications, statusFilter, getFilteredApplication]);
  const applicationsNumber = filteredApplications.length;
  type GroupedData = Record<string, number>;
  const classStat: [] = [];
  const foodStat: [] = [];
  const skillStat: [] = [];
  // Group By function to give the stats
  function groupBy(array: any, key: any): GroupedData {
    return array.reduce((result: GroupedData, currentValue: any) => {
      const groupByKey = currentValue[key];
      if (!result[groupByKey]) {
        result[groupByKey] = 0;
      }
      result[groupByKey]++;
      return result;
    }, {});
  }
  //Stats
  const groupByClass = groupBy(filteredApplications, "class");
  const groupByFood = groupBy(filteredApplications, "food");
  const groupBySkill = groupBy(filteredApplications, "skillLevel");

  const printData = (data: GroupedData, stat: any[]) => {
    for (const key in data) {
      const percentage = Math.floor((100 * data[key]) / applicationsNumber);
      stat.push(
        <>
          <div className="stat-title font-semibold">{key}:</div>
          <div className="stat-value text-md">
            {data[key]} ({percentage}%)
          </div>
        </>
      );
    }
  };
  printData(groupByClass, classStat);
  printData(groupByFood, foodStat);
  printData(groupBySkill, skillStat);

  return (
    <div className="mt-2 flex flex-col">
      {isLoading && (
        <>
          <PopUp
            title="Loading"
            content={<Loading isLoading={isLoading} />}
            action="OK"
          />
        </>
      )}
      <select
        value={statusFilter}
        onChange={(e) => handleStatusChange(e)}
        className="select my-4 bg-purple_300 text-purple_main md:w-[200px] max-w-xs">
        <option disabled selected>
          Filter by:
        </option>
        <option value="all">All</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="waitlisted">Waitlisted</option>
        <option value="submitted">Not Done</option>
      </select>
      <p>Refresh page if you want the filter has the most recent update lol</p>
      <div className="stats stats-vertical lg:stats-horizontal shadow my-8">
        <div className="stat">
          <div className="stat-title">Total applications</div>
          <div className="stat-value">{applicationsNumber}</div>
        </div>
        <div className="stat flex-col justify-center">
          <div className="stat-title">Grad Year</div>
          <div className="stat flex items-center p-0">{classStat}</div>
        </div>
        <div className="stat flex-col justify-center">
          <div className="stat-title">Food </div>
          <div className="stat flex items-center p-0">{foodStat}</div>
        </div>
        <div className="stat flex-col justify-center">
          <div className="stat-title">
            Skill (1: No Exp, 2: Beginner, 3: Intermediate, 4: Master)
          </div>
          <div className="stat flex items-center p-0">{skillStat}</div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>School</th>
              <th>Major</th>
              <th>Food</th>
              <th>Class</th>
              <th>Phone</th>
              <th>Degree</th>
              <th>Pronouns</th>
              <th>Skill Level</th>
              <th>Response</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((posts, idx) => (
              <Application
                key={posts.id}
                idx={idx}
                application={posts}
                pushIdx={pushIdx}
                setLoading={setLoading}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
