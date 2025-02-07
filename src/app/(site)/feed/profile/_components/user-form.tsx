"use client";

import Loading from "@/components/loading";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { CancelTokenSource } from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({ bio: yup.string().max(100), discordId: yup.string().max(100) })
  .test({
    name: "at-least-one-required",
    test: function (value) {
      const { bio, discordId } = value;
      if (!bio && !discordId) {
        return this.createError({
          message: "At least one of bio or discordId is required",
          path: "bio"
        });
      }
      return true;
    }
  });
type FormData = yup.InferType<typeof schema>;

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [updatedProfile, setProfile] = useState({ bio: "", discordId: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const cancelToken = useRef<CancelTokenSource | null>(null);

  const handleInfoChange = (event: any) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const updateUserProfile = async () => {
    if (cancelToken.current) {
      cancelToken.current.cancel("Request canceled by the user.");
    }
    try {
      setIsLoading(true);
      cancelToken.current = axios.CancelToken.source();
      const data = {
        ...updatedProfile
      };
      await axios.put("/api/user", data, {
        cancelToken: cancelToken.current.token
      });
      setProfile({
        bio: "",
        discordId: ""
      });
      setErrorMsg("");
      setIsLoading(false);
    } catch (e: any) {
      if (axios.isCancel(e)) {
        console.error("Request canceled:", e.message);
      } else {
        if (e.response.status === 429) {
          setErrorMsg(e.response.data.message);
          setIsLoading(false);
        } else {
          console.error("An error occurred", e);
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(updateUserProfile)}
      className="flex w-full flex-col items-start text-white"
      action="">
      <p className="custom-text-shadow mb-20 font-audiowide text-[16px] font-bold leading-snug text-white sm:text-[18px] lg:text-[24px]">
        Edit your profile.
      </p>
      <p className="mb-2 text-[18px] text-[#72D6E6] sm:text-[20px] lg:text-[26px]">
        YOUR BIO
      </p>
      <textarea
        {...register("bio")}
        name="bio"
        value={updatedProfile.bio}
        className={`feed-form-input h-[300px] w-[800px] max-w-[80%] rounded-md mb-[15px]${
          errors.bio ? "error-form" : ""
        }`}
        onChange={handleInfoChange}
        placeholder="Type your bio here."
      />
      <p className="error-msg">{errors.bio?.message}</p>
      <p className="mb-2 text-[18px] text-[#72D6E6] sm:text-[20px] lg:text-[26px]">
        DISCORD ID
      </p>
      <input
        {...register("discordId")}
        name="discordId"
        value={updatedProfile.discordId}
        className={`feed-form-input mb-[15px] w-[800px] max-w-[80%] rounded-md ${
          errors.discordId ? "error-form" : ""
        }`}
        onChange={handleInfoChange}
        type="text"
        placeholder="Fully #4567"
      />
      <p className="error-msg">{errors.discordId?.message}</p>
      <p className="text-white">
        Note: You can only update your profile once an hour
      </p>
      {isLoading ? (
        <button className="btn mt-4 self-start border-none bg-sky-100 normal-case text-purple_main hover:bg-sky-200 hover:duration-200 hover:ease-in-out">
          <Loading isLoading={isLoading} />
        </button>
      ) : (
        <>
          <button
            type="submit"
            className="btn mt-4 self-start border-none bg-[#46C8E5] normal-case text-[#1E2D79] hover:bg-sky-200 hover:duration-200 hover:ease-in-out">
            UPDATE
          </button>
          <p className="error-msg mt-4">{errorMsg}</p>
        </>
      )}
    </form>
  );
}
