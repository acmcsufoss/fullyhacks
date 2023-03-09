import React, { useEffect, useReducer, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface ApplicationState {
  name: string
  email: string
  pronouns: string
  phone: string
  major: string
  gradYear: number
  education: string
  skill: string
  response: string
  food: string
  agree: boolean
}
interface FormAction {
  type: string
  payload?: any
}
const schema = yup
  .object({
    name: yup.string(),
    email: yup
      .string()
      .email('Invalid email format')
      .matches(/@csu.fullerton.edu$/, 'Must be CSUF student email'),
    phone: yup
      .string()
      .matches(
        /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
        'Invalid phone number format'
      ),
    major: yup.string(),
    gradYear: yup
      .number()
      .typeError('Must be number')
      .positive()
      .integer()
      .min(2023, 'Invalid grad year')
      .max(2030),
    response: yup
      .string()
      .test('wordCount50', 'Must be at least 50 words', (value) => {
        if (value) {
          const wordCount = value.trim().split(/\s+/).length
          return wordCount >= 50
        }
        return false
      })
      .test('wordCount500', 'Must be less than 500 words', (value) => {
        if (value) {
          const wordCount = value.trim().split(/\s+/).length
          return wordCount <= 500
        }
        return false
      }),
    over18: yup.bool().oneOf([true], 'You must be 18 or older!'),
    waiver: yup.bool().oneOf([true], 'You must agree to the waiver!')
  })
  .required()
type FormData = yup.InferType<typeof schema>
const initialState: ApplicationState = {
  name: '',
  email: '',
  pronouns: '',
  phone: '',
  major: '',
  gradYear: 2023,
  education: '',
  skill: '',
  response: '',
  food: '',
  agree: false
}
const reducer = (
  state: ApplicationState,
  action: FormAction
): ApplicationState => {
  switch (action.type) {
    case 'SAVE_DRAFT':
      const { name, value } = action.payload
      localStorage.setItem(name, value)
      return { ...state, [name]: value }
    case 'LOAD_DRAFT':
      const data = localStorage.getItem('formData')
      if (data) {
        const parsedData = JSON.parse(data)
        return {
          ...state,
          ...parsedData
        }
      }
      return state
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    case 'SET_PRONOUNS':
      return { ...state, pronouns: action.payload }
    case 'SET_PHONE':
      return { ...state, phone: action.payload }
    case 'SET_MAJOR':
      return { ...state, major: action.payload }
    case 'SET_GRADYEAR':
      return { ...state, gradYear: action.payload }
    case 'SET_EDUCATION':
      return { ...state, education: action.payload }
    case 'SET_SKILL':
      return { ...state, skill: action.payload }
    case 'SET_RESPONSE':
      return { ...state, response: action.payload }
    case 'SET_FOOD':
      return { ...state, food: action.payload }
    case 'SET_AGREE':
      return { ...state, agree: action.payload }
    default:
      return state
  }
}

const ApplicationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })
  const [application, dispatch] = useReducer(reducer, initialState)
  const wordCount = application.response.trim().split(/\s+/).length
  useEffect(() => {
    for (let key in initialState) {
      const value = localStorage.getItem(key)
      if (value !== null) {
        dispatch({
          type: 'SAVE_DRAFT',
          payload: { name: key, value: value }
        })
      }
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target
    dispatch({ type: 'SAVE_DRAFT', payload: { name, value } })
    switch (name) {
      case 'name':
        dispatch({ type: 'SET_NAME', payload: value })
      case 'email':
        dispatch({ type: 'SET_EMAIL', payload: value })
      case 'pronouns':
        dispatch({ type: 'SET_PRONOUNS', payload: value })
      case 'phone':
        dispatch({ type: 'SET_PHONE', payload: value })
      case 'major':
        dispatch({ type: 'SET_MAJOR', payload: value })
      case 'gradYear':
        dispatch({ type: 'SET_GRADYEAR', payload: value })
      case 'education':
        dispatch({ type: 'SET_EDUCATION', payload: value })
      case 'skill':
        dispatch({ type: 'SET_SKILL', payload: value })
      case 'response':
        dispatch({ type: 'SET_RESPONSE', payload: value })
      case 'food':
        dispatch({ type: 'SET_FOOD', payload: value })
      case 'agree':
        dispatch({ type: 'SET_AGREE', payload: true })
    }
  }
  const onSubmit = async () => {
    console.log(application)
  }
  const updateLocalStorage = (name: string, value: string) => {
    localStorage.setItem(name, value)
  }
  return (
    <>
      <form className="md:w-[600px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10 flex flex-col">
          <p>Full name</p>
          <input
            {...register('name')}
            name="name"
            value={application.name}
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('name', e.target.value)
            }}
            className={`form-input ${errors.name ? 'error-form' : ''}`}
            type="text"
            placeholder="John Doe"
          />
          <p className="error-msg">{errors.name?.message}</p>
          <p>CSUF email</p>
          <input
            {...register('email')}
            name="email"
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('email', e.target.value)
            }}
            className={`form-input ${errors.email ? 'error-form' : ''}`}
            type="text"
            placeholder="jdoe@csu.fullerton.edu"
          />
          <p className="error-msg">{errors.email?.message}</p>
          <p>Pronouns</p>
          <select
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('pronouns', e.target.value)
            }}
            name="pronouns"
            className="form-input">
            <option value="she/her">she/her</option>
            <option value="he/him">he/him</option>
            <option value="they/them">they/them</option>
            <option value="other">other</option>
          </select>
          <p>Phone number</p>
          <input
            {...register('phone')}
            name="phone"
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('phone', e.target.value)
            }}
            className={`form-input ${errors.phone ? 'error-form' : ''}`}
            type="text"
            placeholder="000-111-2222"
          />
          <p className="error-msg">{errors.phone?.message}</p>
          <p>Major</p>
          <input
            name="major"
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('major', e.target.value)
            }}
            className="form-input"
            type="text"
            placeholder="Computer Science"
          />
          <p>Graduation year</p>
          <input
            {...register('gradYear')}
            name="gradYear"
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('gradYear', e.target.value)
            }}
            className={`form-input ${errors.gradYear ? 'error-form' : ''}`}
            type="text"
            placeholder="2025"
          />
          <p className="error-msg">{errors.gradYear?.message}</p>
          <p>Education level</p>
          <select
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('education', e.target.value)
            }}
            name="education"
            className="form-input">
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
          </select>
          <p>Skill level</p>
          <select
            name="skill"
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('skill', e.target.value)
            }}
            className="form-input">
            <option value="1">No experience</option>
            <option value="2">Beginner</option>
            <option value="3">Intermediate</option>
            <option value="4">Master</option>
          </select>
          <p>Why do you want to attend FullyHacks?</p>
          <div className="flex flex-col relative">
            <textarea
              {...register('response')}
              name="response"
              className={`form-input ${errors.response ? 'error-form' : ''}`}
              onChange={(e) => {
                handleChange(e)
                updateLocalStorage('response', e.target.value)
              }}
              placeholder="50-500 words"
            />
            <p className="absolute bottom-6 right-4">{wordCount} words</p>
            <p className="error-msg">{errors.response?.message}</p>
          </div>
          <p>Food choice</p>
          <select
            name="food"
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('food', e.target.value)
            }}
            className="form-input">
            <option value="vegan">Vegan</option>
            <option value="non-vegan">Non-vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="other">Other</option>
          </select>
          <p>
            If you choose <span className="font-semibold">other</span>, please
            specify or N/A
          </p>
          <input
            name="food"
            onChange={(e) => {
              handleChange(e)
              updateLocalStorage('food', e.target.value)
            }}
            className="form-input"
            type="text"
            placeholder="non-diary,..."
          />
          <div className="mt-4 flex items-center gap-4">
            <input
              {...register('over18')}
              name="over18"
              onChange={handleChange}
              type="checkbox"
              className="bg-purple_300 checkbox"
            />
            <p>I'm 18 or older by April 8th, 2023</p>
          </div>
          <p className="error-msg">{errors.over18?.message}</p>
          <div className="mt-4 flex items-center gap-4">
            <input
              {...register('waiver')}
              name="waiver"
              onChange={handleChange}
              type="checkbox"
              className="bg-purple_300 checkbox"
            />
            <p>
              I agree to
              <a
                className="font-semibold"
                target="_blank"
                href="https://google.com">
                {' the terms of the waiver'}
              </a>
            </p>
          </div>
          <p className="error-msg">{errors.waiver?.message}</p>
          <button className="mt-8 w-[100px] mr-auto p-2 bg-purple_300 hover:bg-purple_hover hover:text-white hover:ease-in-out hover:duration-200 rounded-md font-semibold">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default ApplicationForm
