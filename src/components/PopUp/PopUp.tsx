import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Loading from '../Loading/Loading'

interface PopUpProps {
  title: string
  content: any
  action: string
}

const PopUp: React.FC<PopUpProps> = (props) => {
  const { title, content, action } = props
  const [isChecked, setCheck] = useState(true)
  return (
    <>
      <input
        type="checkbox"
        id="my-modal"
        checked={isChecked}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              onClick={() => setCheck(false)}
              className="normal-case btn bg-orange_100 border-none text-purple_main hover:bg-orange-200 hover:ease-in-out hover:duration-200">
              {action}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp

const schema = yup.object({
  bio: yup.string().min(5).max(100).required(),
  discord: yup.string().max(20)
})
type FormData = yup.InferType<typeof schema>

export const FeedPopUp: React.FC = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })
  const router = useRouter()
  const [isChecked, setCheck] = useState(true)
  const [step, setStep] = useState(1)
  const [bio, setBio] = useState('')
  const [discordId, setDiscordId] = useState('')
  const [isLoading, setLoading] = useState(false)
  const goNextStep = () => {
    setStep((prev) => prev + 1)
  }
  const updateUserProfile = async () => {
    setLoading(true)
    const data = {
      bio: bio,
      discordId: discordId
    }
    await axios.put('/api/user', data)
    setLoading(false)
    goNextStep()
    router.reload()
  }
  return (
    <>
      {step == 1 && (
        <>
          <input
            type="checkbox"
            id="my-modal"
            checked={isChecked}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg text-purple_main">
                Welcome to The Feed 🐘 (beta version)
              </h3>
              <p className="py-4 text-purple_main font-normal">
                Where you meet other participants and explore other cool things
                about FullyHacks to be best prepared 🎉
              </p>
              <img src="/feed.png" alt="feed pic" className="md:w-[600px]" />
              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  onClick={() => goNextStep()}
                  className="normal-case btn bg-sky-100 border-none text-purple_main hover:bg-sky-200 hover:ease-in-out hover:duration-200">
                  Continue
                </label>
              </div>
            </div>
          </div>
        </>
      )}
      {step == 2 && (
        <>
          <input
            type="checkbox"
            id="my-modal"
            checked={isChecked}
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg text-purple_main">
                Let&apos;s introduce yourself 🤩
              </h3>
              <p className="py-4 text-purple_main font-normal">
                Fill out these fields so other participants can see how cool you
                are, it&apos;s a great chance to networking before the event,
                you&apos;ll be able to update these information in your profile
                later.
              </p>
              <form
                onSubmit={handleSubmit(updateUserProfile)}
                className="text-purple_main w-full flex flex-col"
                action="">
                <p className="mb-2 font-bold">Your bio:</p>
                <input
                  {...register('bio')}
                  name="bio"
                  onChange={(e) => setBio(e.target.value)}
                  className={`bg-white rounded-md form-input ${
                    errors.bio ? 'error-form' : ''
                  }`}
                  type="text"
                  placeholder="Hi, I loveee web development, add me on Discord to talk more:)"
                />
                <p className="error-msg">{errors.bio?.message}</p>
                <p className="mb-2 font-bold">Discord Id:</p>
                <input
                  {...register('discord')}
                  name="discord"
                  className={`bg-white rounded-md form-input ${
                    errors.discord ? 'error-form' : ''
                  }`}
                  onChange={(e) => setDiscordId(e.target.value)}
                  type="text"
                  placeholder="Fully #456"
                />
                <p className="error-msg">{errors.discord?.message}</p>
                {isLoading ? (
                  <button
                    type="submit"
                    className="mt-4 self-end normal-case btn bg-sky-100 border-none text-purple_main hover:bg-sky-200 hover:ease-in-out hover:duration-200">
                    <Loading isLoading={isLoading} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="mt-4 self-end normal-case btn bg-sky-100 border-none text-purple_main hover:bg-sky-200 hover:ease-in-out hover:duration-200">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}
