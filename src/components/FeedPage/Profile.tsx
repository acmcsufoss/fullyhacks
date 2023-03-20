import React, { useRef, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios, { CancelTokenSource } from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Loading from '../Loading/Loading'

const schema = yup
  .object({
    bio: yup.string(),
    discordId: yup.string().max(20)
  })
  .test({
    name: 'at-least-one-required',
    test: function (value) {
      const { bio, discordId } = value
      if (!bio && !discordId) {
        return this.createError({
          message: 'At least one of bio or discordId is required',
          path: 'bio'
        })
      }
      return true
    }
  })

type FormData = yup.InferType<typeof schema>
const Profile: React.FC = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })
  const [updatedProfile, setProfile] = useState({
    bio: '',
    discordId: ''
  })
  const cancelToken = useRef<CancelTokenSource | null>(null)
  const [isLoading, setLoading] = useState(false)
  const handleInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const updateUserProfile = async () => {
    if (cancelToken.current) {
      cancelToken.current.cancel('Request canceled by user')
    }
    try {
      setLoading(true)
      cancelToken.current = axios.CancelToken.source()
      const data = {
        ...updatedProfile
      }
      await axios.put('/api/user', data, {
        cancelToken: cancelToken.current.token
      })
      setProfile({
        bio: '',
        discordId: ''
      })
      setLoading(false)
    } catch (e) {
      if (axios.isCancel(e)) {
        console.log('Request canceled:', e.message)
      } else {
        console.log('Error:', e)
      }
    }
  }

  return (
    <section className="overflow-x-auto w-full mt-14 mx-10">
      <form
        onSubmit={handleSubmit(updateUserProfile)}
        className="text-purple_main w-full flex flex-col items-start"
        action="">
        <p className="mb-2 font-bold">Your bio:</p>
        <input
          {...register('bio')}
          name="bio"
          value={updatedProfile.bio}
          onChange={handleInfoChange}
          className={`rounded-md form-input ${errors.bio ? 'error-form' : ''}`}
          type="text"
          placeholder="Hi, I loveee web development, add me on Discord to talk more:)"
        />
        <p className="error-msg">{errors.bio?.message}</p>
        <p className="mb-2 font-bold">Discord Id:</p>
        <input
          {...register('discordId')}
          name="discordId"
          value={updatedProfile.discordId}
          className={`rounded-md form-input ${
            errors.discordId ? 'error-form' : ''
          }`}
          onChange={handleInfoChange}
          type="text"
          placeholder="Fully #456"
        />
        <p className="error-msg">{errors.discordId?.message}</p>
        {isLoading ? (
          <button className="mt-4 self-start normal-case btn bg-sky-100 border-none text-purple_main hover:bg-sky-200 hover:ease-in-out hover:duration-200">
            <Loading isLoading={isLoading} />
          </button>
        ) : (
          <button
            type="submit"
            className="mt-4 self-start normal-case btn bg-sky-100 border-none text-purple_main hover:bg-sky-200 hover:ease-in-out hover:duration-200">
            Update
          </button>
        )}
      </form>
    </section>
  )
}

export default Profile
