'use client'
import axios from "axios"
import { useFormik } from "formik"
import { useRouter } from "next/navigation"
import * as Yup from "yup"

export default function Login() {
  const router = useRouter()

  const initialValues = {
    email: "",
    password: "",
  }

  const onSubmit = async () => {
    try {
      const { data } = await axios.post(
        "https://tinytales.trendline.marketing/api/auth/login",
        formik.values
      )

      if (data?.status && data?.data?.token) {
        localStorage.setItem("token", data.data.token)
        router.push(`/Welcome?name=${encodeURIComponent(data.data.name)}`)
      }
    } catch (error) {
      console.log("Login error:", error.response?.data || error.message)
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="text-3xl text-center font-bold">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="py-5 flex flex-wrap gap-4 justify-center">
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            className="input input-info w-4/5"
            type="email"
            placeholder="Email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500">{formik.errors.email}</p>
          )}

          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            className="input input-info w-4/5"
            type="password"
            placeholder="Password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500">{formik.errors.password}</p>
          )}

          <button className="btn btn-info w-4/5 rounded">Login</button>
        </div>
      </form>
    </div>
  )
}
