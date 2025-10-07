'use client'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/navigation"

export default function VerifyAccount() {
  const router = useRouter()

  const initialValues = {
    email: "",
    otp: "",
  }

  const onSubmit = (values) => {
    if (values.otp === "123456") {
      router.push("/Login")
    } else {
      alert("❌ Invalid OTP, please try again.")
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    otp: Yup.string()
      .length(6, "OTP must be 6 digits")
      .required("OTP is required"),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <div className="sm:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold text-center">Verify Account</h1>
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
            value={formik.values.otp}
            name="otp"
            className="input input-info w-4/5"
            type="text"
            placeholder="Enter OTP (e.g. 123456)"
          />
          {formik.errors.otp && formik.touched.otp && (
            <p className="text-red-500">{formik.errors.otp}</p>
          )}

          <button type="submit" className="btn btn-info w-4/5 rounded">
            Verify
          </button>
        </div>
      </form>
    </div>
  )
}
