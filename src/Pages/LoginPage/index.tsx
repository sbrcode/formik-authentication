import { useContext } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
// import { Formik, FormikHelpers, Form, Field } from "formik"
import { Button, TextField } from "@mui/material"
import UserContext, { IUser } from "../../Context/UserContext"
import "./styles.css"

const validationSchema = Yup.object({
  username: Yup.string(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})

const LoginPage = () => {
  document.title = "Login"
  const { login, toggleAuthent } = useContext(UserContext)
  const initialValues = {
    email: "",
    password: "",
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: IUser) => {
      login(values)
      toggleAuthent()
    },
  })

  return (
    <>
      <div className="loginBox">
        <h2>Please login</h2>
        <form onSubmit={formik.handleSubmit} className="form">
          <TextField
            id="username"
            name="username"
            label="Nom d'utilisateur"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
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
      {/* <div>
        <h1>Signup</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(
            values: IUser,
            { setSubmitting }: FormikHelpers<IUser>
          ) => {
            login(values)
            toggleAuthent()
            setSubmitting(false)
          }}
        >
          <Form>
            <Field id="username" name="username" placeholder="username" />
            <Field id="email" name="email" placeholder="email" type="email" />
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div> */}
    </>
  )
}

export default LoginPage
