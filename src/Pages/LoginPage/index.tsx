import { useContext } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Button, TextField } from "@mui/material"
import {
  UserContext,
  IUser,
  defaultUserDetails,
} from "../../Context/UserContext"
import "./styles.css"

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
})

const LoginPage = () => {
  document.title = "Login"
  const { login, toggleAuthent } = useContext(UserContext)
  const initialValues = defaultUserDetails
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: IUser) => {
      login(values)
      toggleAuthent()
    },
  })

  return (
    <div className="loginBox">
      <h2>Please login</h2>
      <form onSubmit={formik.handleSubmit} className="form">
        <TextField
          id="email"
          name="email"
          label="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          label="Password*"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained" type="submit">
          Connexion
        </Button>
      </form>
    </div>
  )
}

export default LoginPage
