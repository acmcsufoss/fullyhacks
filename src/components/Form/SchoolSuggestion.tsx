import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { University, usUniveristies } from './usuni'

interface SchoolSuggestionProps {
  register: any
  errors: any
  dispatch: any
  application: any
}

const SchoolSuggestion: React.FC<SchoolSuggestionProps> = ({
  register,
  errors,
  dispatch,
  application
}) => {
  const [search, setSearch] = useState<string>('')
  const [filteredSchool, setfilteredSchool] = useState<University[]>([])
  const universites: University[] = usUniveristies
  const handleChange = (e: any) => {
    setSearch(e.target.value)
    setfilteredSchool(
      universites.filter((item: University) =>
        item.institution.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
    dispatch({ type: 'SET_SCHOOL', payload: e.target.value })
  }
  return (
    <div className="">
      <div className="mt-4 p-1 bg-white flex items-center w-full">
        <input
          {...register('school')}
          type="text"
          name="school"
          className={`bg-white outline-none w-full text-black ${
            errors.email ? 'error-form' : ''
          }`}
          placeholder="Search school"
          value={search}
          onChange={handleChange}
        />
        <AiOutlineSearch size={24} color="black" className="" />
      </div>
      <div className="mt-4 rounded-md max-h-[400px] overflow-scroll">
        {filteredSchool.map((item: University, index) => (
          <div
            onClick={() => {
              setSearch(item.institution)
              dispatch({
                type: 'SAVE_DRAFT',
                payload: { name: 'name', value: item.institution }
              })
              dispatch({ type: 'SET_SCHOOL', payload: item.institution })
              setfilteredSchool([])
            }}
            key={index}
            className="text-black cursor-pointer p-1 border border-t-1 bg-white font-semibold">
            {item.institution}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SchoolSuggestion
