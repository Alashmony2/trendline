'use client'
import axios from "axios"
import { useFormik } from "formik"
import { useRouter } from "next/navigation.js"
import * as Yup from 'yup'

export default function Register() {
    const router = useRouter()
    const initialValues = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        mobile_country_code: "+966",
        mobile: "",
    }
    const onSubmit = async () => {
        try {
          const { data } = await axios.post(
            "https://tinytales.trendline.marketing/api/auth/register",
            formik.values
          );
          router.push("/VerifyAccount")
        } catch (error) {
          console.log("Register error:", error.response?.data || error.message);
        }
      };
      
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
        .required("Password is required"),        password_confirmation: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
        mobile_country_code: Yup.string().required("Mobile Country Code is required"),
        mobile: Yup.string().required("Mobile is required"),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className="sm:w-2/3 mx-auto">
            <h1 className="text-3xl text-center font-bold">Register Now</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="py-5 flex flex-wrap gap-4 justify-center">
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name="name" className="input input-info w-4/5" type="text" placeholder="Name" />
                    {formik.errors.name && formik.touched.name && <p className="text-red-500">{formik.errors.name}</p>}<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" className="input input-info w-4/5" type="email" placeholder="Email" />
                    {formik.errors.email && formik.touched.email && <p className="text-red-500">{formik.errors.email}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name="password" className="input input-info w-4/5" type="password" placeholder="Password" />
                    {formik.errors.password && formik.touched.password && <p className="text-red-500">{formik.errors.password}</p>}
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password_confirmation} name="password_confirmation" className="input input-info w-4/5" type="password" placeholder="Confirm Password" />
                    {formik.errors.password_confirmation && formik.touched.password_confirmation && <p className="text-red-500">{formik.errors.password_confirmation}</p>}
                    <div className="flex w-4/5 gap-2">
                        <select onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.mobile_country_code}
                            name="mobile_country_code"
                            className="select select-info w-1/4"
                        >
                            <option value="+966">🇸🇦 +966</option>
                            <option value="+20">🇪🇬 +20</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+974">🇶🇦 +974</option>
                            <option value="+965">🇰🇼 +965</option>
                            <option value="+962">🇯🇴 +962</option>
                            <option value="+961">🇱🇧 +961</option>
                            <option value="+1">🇺🇸 +1</option>
                        </select>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.mobile}
                            name="mobile"
                            className="input input-info w-3/4"
                            type="tel"
                            placeholder="Phone Number"
                        />
                        {formik.errors.mobile && formik.touched.mobile && <p className="text-red-500">{formik.errors.mobile}</p>}
                    </div>
                    <button className="btn btn-info w-4/5 rounded">Register</button>
                </div>
            </form>
        </div>
    )
}
