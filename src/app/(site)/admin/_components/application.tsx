import { ApplicationType } from "@/types/interface";
import axios from "axios";
import React from "react";

enum ApplicationUpdate {
  APPROVE = "approve",
  REJECT = "reject",
  WAITLIST = "waitlist"
}

interface ApplicationProps {
  application: ApplicationType;
  idx: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  pushIdx: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Application: React.FC<ApplicationProps> = (props) => {
  const { application, idx, setLoading, pushIdx } = props;

  const updateApplication = async (id: string, approved: string) => {
    const data = {
      approve: approved
    };
    setLoading(true);
    await axios.put(`/api/application/${id}`, data);
    setLoading(false);
  };

  return (
    <tr
      key={application.id}
      className="relative rounded-md p-3 hover:bg-gray-100">
      <th> {idx} </th>
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
        {application.approved ? (
          <button
            disabled
            className="rounded-lg bg-emerald-700 p-1 font-semibold hover:bg-emerald-700">
            Approved
          </button>
        ) : application.rejected ? (
          <button
            disabled
            className="rounded-lg bg-red-800 p-1 font-semibold hover:bg-red-800">
            Rejected
          </button>
        ) : (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                pushIdx((prev) => [...prev, application.id]);
                updateApplication(application.id, ApplicationUpdate.APPROVE);
              }}
              className="rounded-lg bg-emerald-500 p-1 font-semibold transition hover:bg-emerald-700">
              Approve
            </button>
            <button
              onClick={() => {
                pushIdx((prev) => [...prev, application.id]);
                updateApplication(application.id, ApplicationUpdate.REJECT);
              }}
              className="rounded-lg bg-red-500 p-1 font-semibold transition hover:bg-red-800">
              Reject
            </button>
            <button
              onClick={() => {
                pushIdx((prev) => [...prev, application.id]);
                updateApplication(application.id, ApplicationUpdate.WAITLIST);
              }}
              className="rounded-lg bg-yellow-500 p-1 font-semibold transition hover:bg-yellow-600">
              Waitlist
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};
