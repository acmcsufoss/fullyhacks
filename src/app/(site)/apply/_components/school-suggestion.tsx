import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import uniJson from "@/lib/data/usuni.json";
import { University } from "@/types/interface";

interface SchoolSuggestionProps {
  register: any;
  errors: any;
  dispatch: any;
  application: any;
}

const SchoolSuggestion: React.FC<SchoolSuggestionProps> = ({
  register,
  errors,
  dispatch,
  application
}) => {
  const [search, setSearch] = useState<string>("");
  const [filteredSchool, setfilteredSchool] = useState<University[]>([]);
  const universites: University[] = uniJson.usUniveristies;
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setfilteredSchool(
      universites.filter((item: University) =>
        item.institution.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    dispatch({ type: "SET_SCHOOL", payload: e.target.value });
    dispatch({
      type: "SAVE_DRAFT",
      payload: { name: "school", value: e.target.value }
    });
  };
  return (
    <div className="">
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
        <AiOutlineSearch size={24} color="#FFC7EA" className="" />
      </div>
      <div className="mt-4 max-h-[400px] overflow-scroll rounded-md">
        {filteredSchool.map((item: University, index) => (
          <div
            onClick={() => {
              setSearch(item.institution);
              dispatch({
                type: "SAVE_DRAFT",
                payload: { name: "school", value: item.institution }
              });
              dispatch({ type: "SET_SCHOOL", payload: item.institution });
              setfilteredSchool([]);
            }}
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
