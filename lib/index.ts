import axios from 'axios'

export const getAllApplications = async (cookie: any) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/application`,
      {
        withCredentials: true,
        headers: {
          Cookie: cookie
        }
      }
    )
    return res.data
  } catch (e) {
    console.log(e)
  }
}
