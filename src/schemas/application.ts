import { bool, InferType, number, object, string } from 'yup'

export const applicationSchema = object({
  name: string(),
  email: string()
    .email('Invalid email format')
    .matches(/@csu.fullerton.edu$/, 'Must be CSUF student email'),
  phone: string().matches(
    /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
    'Invalid phone number format'
  ),
  major: string().min(2),
  skill: number().min(0).max(4),
  gradYear: number()
    .typeError('Must be number')
    .positive()
    .integer()
    .min(2023, 'Invalid grad year')
    .max(2030),
  education: string().oneOf(['Bachelor', 'Master']),
  response: string()
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
    })
}).required()

export type Application = InferType<typeof applicationSchema>
