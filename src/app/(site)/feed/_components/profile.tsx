import React, { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError, CancelTokenSource } from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Loading from "@/components/loading";
import { User } from "@/types/interface";
import AnnouncementForm from "@/components/announcement-form";

const schema = yup
  .object({
    bio: yup.string().max(100),
    discordId: yup.string().max(50)
  })
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

interface ProfileProps {
  currentUser: User;
}

type FormData = yup.InferType<typeof schema>;
const Profile: React.FC<ProfileProps> = ({ currentUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [updatedProfile, setProfile] = useState({
    bio: "",
    discordId: ""
  });
  const cancelToken = useRef<CancelTokenSource | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleInfoChange = (event: any) => {
    const { name, value } = event.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const updateUserProfile = async () => {
    if (cancelToken.current) {
      cancelToken.current.cancel("Request canceled by user");
    }
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (e: any) {
      if (axios.isCancel(e)) {
        console.log("Request canceled:", e.message);
      } else {
        if (e.response.status == 429) {
          setErrorMsg(e.response.data.message);
          setLoading(false);
        } else {
          console.log(e);
        }
      }
    }
  };

  return (
    <section className="mt-14 mr-8 w-full overflow-x-auto">
      <p className="feed-title mb-10">{currentUser.name}&apos;s Profile</p>
      <form
        onSubmit={handleSubmit(updateUserProfile)}
        className="flex w-full flex-col items-start text-white"
        action="">
        <p className="mb-2 font-bold text-purple_main">YOUR BIO:</p>
        <textarea
          {...register("bio")}
          name="bio"
          value={updatedProfile.bio}
          className={`feed-form-input rounded-md ${
            errors.bio ? "error-form" : ""
          }`}
          onChange={handleInfoChange}
          placeholder="Hi, I loveee web development, add me on Discord to talk more :)"
        />
        <p className="error-msg">{errors.bio?.message}</p>
        <p className="mb-2 font-bold text-purple_main">DISCORD ID:</p>
        <input
          {...register("discordId")}
          name="discordId"
          value={updatedProfile.discordId}
          className={`feed-form-input rounded-md ${
            errors.discordId ? "error-form" : ""
          }`}
          onChange={handleInfoChange}
          type="text"
          placeholder="Fully #456"
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
      {currentUser.isAdmin && (
        <>
          <p className="feed-title-white mb-10">
            ADMIN ONLY: Announcement Form
          </p>
          <AnnouncementForm />
        </>
      )}
    </section>
  );
};

export default Profile;
