'use client'
import axios from "axios"
import { useFormik } from "formik"
import Link from "next/link.js"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as Yup from "yup"

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage(error.response?.data?.message || "Login failed")
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
    <div className="sm:w-2/3 mx-auto my-4">
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
          {formik.errors.email && formik.touched.email && <div role="alert" className="alert alert-error alert-soft w-4/5">
            <span>{formik.errors.email}</span>
          </div>}

          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            className="input input-info w-4/5"
            type="password"
            placeholder="Password"
          />
          {formik.errors.password && formik.touched.password && <div role="alert" className="alert alert-error alert-soft w-4/5">
            <span>{formik.errors.password}</span>
          </div>}

          <button className="btn btn-info w-4/5 rounded">Login</button>
          <p className="text-gray-400 font-medium">Don't have an account <Link href="/Register" className="text-[#38C9FE]">Register now</Link></p>
          {errorMessage && <div role="alert" className="alert alert-error alert-soft w-4/5">
            <span>{errorMessage}</span>
          </div>}
        </div>
      </form>
    </div>
  )
}
