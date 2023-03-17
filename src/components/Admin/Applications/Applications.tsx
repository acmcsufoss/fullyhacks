import Loading from '@/components/Loading/Loading'
import PopUp from '@/components/PopUp/PopUp'
import { ApplicationType } from '@/types/interface'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface ApplicationsProps {
  applications: ApplicationType[]
}

export const Applications: React.FC<ApplicationsProps> = (props) => {
  const { applications } = props
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const updateApplication = async (id: string, approved: boolean) => {
    const data = {
      approve: approved
    }
    setLoading(true)
    await axios.put(`/api/application/${id}`, data)
    setLoading(false)
    router.reload()
  }
  return (
    <ul>
      {isLoading && (
        <>
          <PopUp
            title="Loading"
            content={<Loading isLoading={isLoading} />}
            action="OK"
          />
        </>
      )}
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
            {applications?.map((application: ApplicationType, idx) => (
              <tr
                key={application.id}
                className="relative rounded-md p-3 hover:bg-gray-100">
                <th> {idx + 1} </th>
                <td className="whitespace-normal col-span-3 text-sm font-medium leading-5">
                  {application.name}
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
                          updateApplication(application.id, true)
                        }}
                        className="bg-emerald-500 hover:bg-emerald-700 font-semibold p-1 rounded-lg my-8">
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          updateApplication(application.id, false)
                        }}
                        className="bg-red-500 hover:bg-red-800 font-semibold p-1 rounded-lg">
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ul>
  )
}
