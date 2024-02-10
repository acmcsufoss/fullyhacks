import { ApplicationType } from '@/types/interface'
import axios from 'axios'
import React from 'react'

interface ApplicationProps {
  application: ApplicationType
  idx: number
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  pushIdx: React.Dispatch<React.SetStateAction<string[]>>
}
//For each row in the application dashboard
export const Application: React.FC<ApplicationProps> = (props) => {
  const { application, idx, setLoading, pushIdx } = props
  const updateApplication = async (id: string, approved: boolean) => {
    const data = {
      approve: approved
    }
    setLoading(true)
    await axios.put(`/api/application/${id}`, data)
    setLoading(false)
  }
  return (
    <tr
      key={application.id}
      className="relative rounded-md p-3 hover:bg-gray-100">
      <th> {idx + 1} </th>
      <td className="whitespace-normal col-span-3 text-sm font-medium leading-5">
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
      <td className="whitespace-normal text-sm font-medium leading-5">
        {application.response}
      </td>
      {/* Button logic, if application has already been approved/rejected, it'll display that */}
      <td className="whitespace-normal ">
        {application.approved ? (
          <button
            disabled
            className="bg-emerald-700 hover:bg-emerald-700 font-semibold p-1 rounded-lg">
            Approved
          </button>
        ) : application.rejected ? (
          <button
            disabled
            className="bg-red-800 hover:bg-red-800 font-semibold p-1 rounded-lg">
            Rejected
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                pushIdx((prev) => [...prev, application.id])
                updateApplication(application.id, true)
              }}
              className="bg-emerald-500 hover:bg-emerald-700 font-semibold p-1 rounded-lg my-8">
              Approve
            </button>
            <button
              onClick={() => {
                pushIdx((prev) => [...prev, application.id])
                updateApplication(application.id, false)
              }}
              className="bg-red-500 hover:bg-red-800 font-semibold p-1 rounded-lg">
              Reject
            </button>
          </>
        )}
      </td>
    </tr>
  )
}
