import { ApplicationType } from '@/types/interface'
import axios from 'axios'
import React from 'react'

interface ApplicationsProps {
  applications: ApplicationType[]
}

export const Applications: React.FC<ApplicationsProps> = (props) => {
  const { applications } = props
  const updateApplication = async (id: string, approved: boolean) => {
    const data = {
      approve: approved
    }
    const updatedApplication = await axios.put(`/api/application/${id}`, data)
    console.log(updatedApplication.data)
  }
  return (
    <ul>
      <div className="overflow-x-auto">
        <table className="w-full table text-white">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
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
            {applications?.map((application, idx) => (
              <tr
                key={application.id}
                className="relative rounded-md p-3 hover:bg-gray-100">
                <th> {idx + 1} </th>
                <td className="col-span-3 text-sm font-medium leading-5">
                  {application.name}
                </td>
                <td className="break-all text-sm font-medium leading-5">
                  {application.major}
                </td>
                <td className="text-sm font-medium leading-5">
                  {application.food}
                </td>
                <td className="text-sm font-medium leading-5">
                  {application.class}
                </td>
                <td className="text-sm font-medium leading-5">
                  {application.phone}
                </td>
                <td className="text-sm font-medium leading-5">
                  {application.degree}
                </td>
                <td className="text-sm font-medium leading-5">
                  {application.pronouns}
                </td>
                <td className="text-sm font-medium leading-5">
                  {application.skillLevel}
                </td>
                <td className="text-sm font-medium leading-5">
                  {application.response}
                </td>
                <td className="flex gap-8">
                  <button
                    onClick={() => updateApplication(application.id, true)}
                    className="bg-emerald-500 hover:bg-emerald-700 font-semibold p-1 rounded-lg">
                    Approve
                  </button>
                  <button
                    onClick={() => updateApplication(application.id, false)}
                    className="bg-red-500 hover:bg-red-800 font-semibold p-1 rounded-lg">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ul>
  )
}
