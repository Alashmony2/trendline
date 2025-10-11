'use client'
import { useFormik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function VerifyAccount() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
    otp: "",
  }

  const onSubmit = (values) => {
    if (values.otp === "123456") {
      router.push("/Login")
    } else {
      setErrorMessage("OTP is must be 123456")
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
    <div className="sm:w-2/3 mx-auto my-4">
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
          {formik.errors.email && formik.touched.email && <div role="alert" className="alert alert-error alert-soft w-4/5">
            <span>{formik.errors.email}</span>
          </div>}

          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.otp}
            name="otp"
            className="input input-info w-4/5"
            type="text"
            placeholder="Enter OTP (e.g. 123456)"
          />
          {formik.errors.otp && formik.touched.otp && <div role="alert" className="alert alert-error alert-soft w-4/5">
            <span>{formik.errors.otp}</span>
          </div>}

          <button type="submit" className="btn btn-info w-4/5 rounded">
            Verify
          </button>
          {errorMessage && <div role="alert" className="alert alert-error alert-soft w-4/5">
            <span>{errorMessage}</span>
          </div>}
        </div>
      </form>
    </div>
  )
}
