import uniJson from "@/lib/data/usuni.json";
import { University } from "@/types/interface";
import { InferType, number, object, string } from "yup";

const usUni: University[] = uniJson.usUniveristies;

const minGradYear = 2025;
const maxGradYear = 2030;

export const applicationSchema = object({
  name: string().required("Name is required"),
  email: string()
    .email("Invalid email format")
    .matches(/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu)$/, {
      message: "Must be a .edu email",
      excludeEmptyString: true
    })
    .required("Email is required"),
  preferredEmail: string().email("Invalid email format"),
  phone: string().matches(
    /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
    "Invalid phone number format"
  ),
  major: string()
    .min(2, "Major must be at least 2 characters long")
    .required("Major is required"),
  skill: number()
    .min(0, "Skill level must be at least 0")
    .max(4, "Skill level must be at most 4"),
  gradYear: number()
    .typeError("Graduation year must be a number")
    .positive("Graduation year must be positive")
    .integer("Graduation year must be an integer")
    .min(minGradYear, `Graduation year cannot be before ${minGradYear}`)
    .max(maxGradYear, `Graduation year cannot be after ${maxGradYear}`)
    .required("Graduation year is required"),
  school: string()
    .required("School is required")
    .test("validSchool", "Invalid school name", (value) => {
      return value ? usUni.some((uni) => uni.institution === value) : false;
    }),
  education: string()
    .oneOf(
      ["Bachelor", "Associate", "Master", "Doctoral"],
      "Invalid education level"
    )
    .required("Education level is required"),
  response: string()
    .test("wordCount50", "Response must be at least 50 words", (value) => {
      return value ? value.trim().split(/\s+/).length >= 50 : false;
    })
    .test("wordCount500", "Response must be at most 500 words", (value) => {
      return value ? value.trim().split(/\s+/).length <= 500 : true;
    })
    .required("Response is required")
}).required();

export type Application = InferType<typeof applicationSchema>;
