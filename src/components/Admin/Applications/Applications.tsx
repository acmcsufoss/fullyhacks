import { ApplicationType } from '@/types/interface'
import React from 'react'

interface ApplicationsProps {
  applications: ApplicationType[]
}

export const ApplicationsName: React.FC<ApplicationsProps> = ({
  applications
}) => {
  return (
    <section>
      {applications.map((application: ApplicationType) => {
        return (
          <div className="flex gap-4">
            <p>{application.name}</p>
          </div>
        )
      })}
    </section>
  )
}

export const ApplicationsMajor: React.FC<ApplicationsProps> = (props) => {
  const { applications } = props
  return (
    <section>
      {applications.map((application: ApplicationType) => {
        return (
          <div className="flex gap-4">
            <p>{application.major}</p>
          </div>
        )
      })}
    </section>
  )
}
