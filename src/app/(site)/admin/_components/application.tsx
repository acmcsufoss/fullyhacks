import { ApplicationType, ApplicationUpdate } from "@/types/interface";
import axios from "axios";
import React from "react";

interface ApplicationProps {
  application: ApplicationType;
  idx: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  pushIdx: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Application: React.FC<ApplicationProps> = (props) => {
  const { application, idx, setLoading, pushIdx } = props;

  const updateApplicationStatus = async (id: string, status: string) => {
    const data = { status };
    setLoading(true);
    await axios.put(`/api/application/${id}`, data);
    setLoading(false);
  };

  return (
    <tr
      key={application.id}
      className="relative rounded-md p-3 hover:bg-gray-100">
      <td> {idx} </td>
      <td className="col-span-3 whitespace-normal text-sm font-medium leading-5">
        {application.name}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.preferredEmail}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.school}
      </td>
      <td className="whitespace-normal break-all text-sm font-medium leading-5">
        {application.major}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.food}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.class}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.phone}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.degree}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.pronouns}
      </td>
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.skillLevel}
      </td>
      {/* Manually increase width of the response column */}
      <td className="min-w-[250px] whitespace-normal text-sm font-medium leading-5 md:min-w-[300px]">
        {application.response}
      </td>
      {/* Button logic, if application has already been approved/rejected, it'll display that */}
      <td className="whitespace-normal">
        <div className="flex flex-col gap-4">
          {application.approved ? (
            <span className="rounded-lg bg-emerald-700 p-1 font-semibold">
              Approved
            </span>
          ) : application.rejected ? (
            <span className="rounded-lg bg-red-800 p-1 font-semibold">
              Rejected
            </span>
          ) : application.waitlisted ? (
            <>
              <span className="rounded-lg bg-yellow-600 p-1 font-semibold">
                Waitlisted
              </span>
              <button
                onClick={() => {
                  pushIdx((prev) => [...prev, application.id]);
                  updateApplicationStatus(
                    application.id,
                    ApplicationUpdate.APPROVE
                  );
                }}
                className="rounded-lg bg-emerald-500 p-1 font-semibold transition hover:bg-emerald-700">
                Approve
              </button>
              <button
                onClick={() => {
                  pushIdx((prev) => [...prev, application.id]);
                  updateApplicationStatus(
                    application.id,
                    ApplicationUpdate.REJECT
                  );
                }}
                className="rounded-lg bg-red-500 p-1 font-semibold transition hover:bg-red-800">
                Reject
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  pushIdx((prev) => [...prev, application.id]);
                  updateApplicationStatus(
                    application.id,
                    ApplicationUpdate.APPROVE
                  );
                }}
                className="rounded-lg bg-emerald-500 p-1 font-semibold transition hover:bg-emerald-700">
                Approve
              </button>
              <button
                onClick={() => {
                  pushIdx((prev) => [...prev, application.id]);
                  updateApplicationStatus(
                    application.id,
                    ApplicationUpdate.REJECT
                  );
                }}
                className="rounded-lg bg-red-500 p-1 font-semibold transition hover:bg-red-800">
                Reject
              </button>
              <button
                onClick={() => {
                  pushIdx((prev) => [...prev, application.id]);
                  updateApplicationStatus(
                    application.id,
                    ApplicationUpdate.WAITLIST
                  );
                }}
                className="rounded-lg bg-yellow-500 p-1 font-semibold transition hover:bg-yellow-600">
                Waitlist
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
