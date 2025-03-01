import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import uniJson from "@/lib/data/usuni.json";
import { University } from "@/types/interface";

interface SchoolSuggestionProps {
  register: any;
  errors: any;
  dispatch: any;
  application: any;
  setValue: any;
}

const SchoolSuggestion: React.FC<SchoolSuggestionProps> = ({
  register,
  errors,
  dispatch,
  application,
  setValue
}) => {
  const [search, setSearch] = useState<string>("");
  const [filteredSchool, setfilteredSchool] = useState<University[]>([]);
  const universites: University[] = uniJson.usUniveristies;

  // Cut down on the number of schools shown in the dropdown
  const MAX_SCHOOLS_SHOWN = 20;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    setfilteredSchool(
      universites
        .filter((item: University) =>
          item.institution.toLowerCase().includes(searchValue.toLowerCase())
        )
        .slice(0, MAX_SCHOOLS_SHOWN)
    );
    dispatch({ type: "SET_SCHOOL", payload: searchValue });
    dispatch({
      type: "SAVE_DRAFT",
      payload: { name: "school", value: searchValue }
    });
    setValue("school", searchValue);
  };

  const handleSchoolSelect = (school: string) => {
    setSearch(school);
    setfilteredSchool([]);
    dispatch({ type: "SET_SCHOOL", payload: school });
    dispatch({
      type: "SAVE_DRAFT",
      payload: { name: "school", value: school }
    });
    setValue("school", school);
  };

  return (
    <div>
      <div className="form-input mt-4 flex w-full items-center">
        <input
          {...register("school")}
          type="text"
          name="school"
          className={`w-full bg-transparent outline-none ${
            errors.email ? "error-form" : ""
          }`}
          placeholder="Search school"
          value={search}
          onChange={handleChange}
        />
        <AiOutlineSearch size={24} className="" />
      </div>
      <div className="mt-4 max-h-[400px] overflow-y-scroll rounded-md">
        {filteredSchool.map((item: University, index) => (
          <div
            onClick={() => handleSchoolSelect(item.institution)}
            key={index}
            className="border-t-1 cursor-pointer border bg-white p-1 font-semibold text-black">
            {item.institution}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolSuggestion;
