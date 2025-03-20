"use client";

import Loading from "@/components/loading";
import PopUp from "@/components/pop-up";
import { ApplicationType } from "@/types/interface";
import React, { useMemo, useState } from "react";
import { Application } from "./application";

interface ApplicationsProps {
  applications: ApplicationType[];
}

// Application Dashboard
const Applications: React.FC<ApplicationsProps> = (props) => {
  const { applications } = props;
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setLoading] = useState(false);
  const [applicationIdx, pushIdx] = useState<string[]>([]);

  const INIT_CURR_PAGE_NUM = 1;
  const ITEMS_PER_PAGE = 15;
  const [currentPage, setCurrentPage] = useState(INIT_CURR_PAGE_NUM);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value);
    setCurrentPage(1);
  };

  const filteredApplications = useMemo(() => {
    // Filter out application when choose from the Filter by: dropdown
    const getFilteredApplication = (
      applications: ApplicationType[],
      statusFilter: string
    ) => {
      return statusFilter === "all"
        ? applications.filter((app) => !applicationIdx.includes(app.id))
        : applications.filter((app) => app.status === statusFilter);
    };
    return getFilteredApplication(applications, statusFilter);
  }, [applications, statusFilter, applicationIdx]);

  const applicationsNumber = filteredApplications.length;

  // setup pagination
  const idxLastItem = currentPage * itemsPerPage;
  const idxFirstItem = idxLastItem - itemsPerPage;
  const currentApplications = filteredApplications.slice(
    idxFirstItem,
    idxLastItem
  );
  const indxFirstItem = idxLastItem - itemsPerPage;

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const visiblePageCount = 5;
  const halfVisible = Math.floor(visiblePageCount / 2);

  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

  // set start page appropiately if the end page is the last page
  if (endPage - startPage + 1 < visiblePageCount) {
    startPage = Math.max(1, endPage - visiblePageCount + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
          <div className="stat-title font-semibold text-[#cdcdcd]">{key}:</div>
          <div className="stat-value text-md text-gray-200">
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
        className="select my-4 max-w-xs bg-[#3f3865] text-white md:w-[200px]">
        <option disabled selected>
          Filter by:
        </option>
        <option value="all">All</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="waitlisted">Waitlisted</option>
        <option value="submitted">Not Done</option>
      </select>
      <p className="text-white">
        Tip: Refresh the page for the most up-to-date applicant information!
      </p>
      <div className="stats stats-vertical my-8 bg-[#3f3865] shadow lg:stats-horizontal">
        <div className="stat">
          <div className="text- stat-title text-white">Total applications</div>
          <div className="stat-value text-white">{applicationsNumber}</div>
        </div>
        <div className="stat flex-col justify-center">
          <div className="stat-title text-white">Grad Year</div>
          <div className="stat flex items-center p-0">{classStat}</div>
        </div>
        <div className="stat flex-col justify-center">
          <div className="stat-title text-white">Food </div>
          <div className="stat flex items-center p-0">{foodStat}</div>
        </div>
        <div className="stat flex-col justify-center">
          <div className="stat-title text-white">
            Skill (1: No Exp, 2: Beginner, 3: Intermediate, 4: Master)
          </div>
          <div className="stat flex items-center p-0">{skillStat}</div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full text-white [&_*]:bg-[#342e55]">
          <thead className="[&_*]:bg-[#302c44]">
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
            {currentApplications.map((posts, idx) => (
              <Application
                key={posts.id}
                idx={indxFirstItem + idx + 1}
                application={posts}
                pushIdx={pushIdx}
                setLoading={setLoading}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <nav>
          <ul className="flex list-none items-center gap-2 p-0">
            <li>
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`rounded bg-[#3f3865] px-4 py-2 text-white ${
                  currentPage === 1
                    ? "cursor-not-allowed brightness-75"
                    : "transition hover:brightness-110"
                }`}>
                Previous
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`rounded bg-[#3f3865] px-4 py-2 ${
                    currentPage === number
                      ? "text-purple_300 brightness-150"
                      : "text-white transition hover:brightness-110"
                  }`}>
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`rounded bg-[#3f3865] px-4 py-2 text-white ${
                  currentPage === totalPages
                    ? "cursor-not-allowed brightness-75"
                    : "transition hover:brightness-110"
                }`}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

export default Applications;
