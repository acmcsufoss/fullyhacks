import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Loading from "../../Loading/Loading";

const schema = yup
  .object({
    title: yup.string().min(5).max(50),
    content: yup.string().min(5)
  })
  .required();

type FormData = yup.InferType<typeof schema>;
const AnnouncementForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [newAnnouncement, setAnnouncement] = useState({
    title: "",
    content: ""
  });
  const [isLoading, setLoading] = useState(false);
  const handleInfoChange = (event: any) => {
    const { name, value } = event.target;
    setAnnouncement((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const postAnnouncement = async () => {
    try {
      const data = {
        ...newAnnouncement
      };
      setLoading(true);
      await axios.post("/api/announcement", data);
      setLoading(false);
      setAnnouncement({
        title: "",
        content: ""
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(postAnnouncement)}
      className="text-purple_main mb-10 flex w-full flex-col items-start"
      action="">
      <p className="mb-2 font-bold">ANNOUNCEMENT TITLE:</p>
      <input
        {...register("title")}
        name="title"
        value={newAnnouncement.title}
        onChange={handleInfoChange}
        className={`feed-form-input rounded-md ${
          errors.title ? "error-form" : ""
        }`}
        type="text"
        placeholder="Your announcement title"
      />
      <p className="error-msg">{errors.title?.message}</p>
      <p className="mb-2 font-bold">ANNOUNCEMENT CONTENT:</p>
      <textarea
        {...register("content")}
        name="content"
        value={newAnnouncement.content}
        className={`feed-form-input h-52 rounded-md ${
          errors.content ? "error-form" : ""
        }`}
        onChange={handleInfoChange}
        placeholder="Type your announcement here"
      />
      <p className="error-msg">{errors.content?.message}</p>
      {isLoading ? (
        <button className="btn text-purple_main mt-4 self-start border-none bg-sky-100 normal-case hover:bg-sky-200 hover:duration-200 hover:ease-in-out">
          <Loading isLoading={isLoading} />
        </button>
      ) : (
        <>
          <button
            type="submit"
            className="btn mt-4 self-start border-none bg-[#46C8E5] normal-case text-[#1E2D79] hover:bg-sky-200 hover:duration-200 hover:ease-in-out">
            POST
          </button>
        </>
      )}
    </form>
  );
};

export default AnnouncementForm;
