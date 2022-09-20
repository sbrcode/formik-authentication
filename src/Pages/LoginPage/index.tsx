import { useContext } from "react"
import { Formik, FormikHelpers, Form, Field } from "formik"
import * as Yup from "yup"
import { Button, TextField } from "@mui/material"
import { UserContext, IUser } from "../../Context/UserContext"
// import { useAuthDispatch } from "../global/Contexts/Authentification/customHook/useAuthDispatch";
// import { IAuthDispatchContext } from "../global/Contexts/Authentification/interfaces";

const RequiredMsg = "Ce champ est requis"

const validationSchema = Yup.object({
  username: Yup.string(),
  mail: Yup.string().email("Un email valide est requis").required(RequiredMsg),
  password: Yup.string().required(RequiredMsg),
})

const LoginPage = () => {
  document.title = "Login"
  const { login, toggleAuthent } = useContext(UserContext)
  // const { dispatchAuth }: IAuthDispatchContext = useAuthDispatch();
  const initialValues = {
    // username: "",
    email: "",
    password: "",
  }

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values: IUser, { setSubmitting }: FormikHelpers<IUser>) => {
          // setTimeout(() => {
          login(values)
          toggleAuthent()
          setSubmitting(false)
          // console.log(values, isAuthenticated)
          alert(JSON.stringify(values, null, 2))
          // }, 500)
        }}
      >
        <Form>
          {/* <label htmlFor="username">Username</label> */}
          <Field id="username" name="username" placeholder="username" />
          {/* <label htmlFor="email">Email</label> */}
          <Field id="email" name="email" placeholder="email" type="email" />
          {/* <label htmlFor="password">Password</label> */}
          <Field
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    // <div className="loginBox">
    // <div>
    //   <h2>Connexion</h2>
    //   {/* <form onSubmit={formik.handleSubmit} className="form"> */}
    //   {/* <Formik
    //     initialValues={initialValues}
    //     validationSchema={validationSchema}
    //     onSubmit={(values, actions) => {
    //       setTimeout(() => {
    //         console.log(values)
    //         alert(JSON.stringify(values, null, 2))
    //         actions.setSubmitting(false)
    //       }, 500)
    //     }}
    //   > */}
    //   <form onSubmit={formik.handleSubmit}>
    //     <Field
    //       id="username"
    //       name="username"
    //       label="Nom d'utilisateur"
    //       value={formik.values.username}
    //       onChange={formik.handleChange}
    //       error={formik.touched.username && Boolean(formik.errors.username)}
    //       helperText={formik.touched.username && formik.errors.username}
    //     />
    //     <Field
    //       id="email"
    //       name="email"
    //       label="Email*"
    //       value={formik.values.email}
    //       onChange={formik.handleChange}
    //       error={formik.touched.email && Boolean(formik.errors.email)}
    //       helperText={formik.touched.email && formik.errors.email}
    //       // className="fieldMail"
    //     />
    //     <Field
    //       id="password"
    //       name="password"
    //       label="Password*"
    //       type="password"
    //       value={formik.values.password}
    //       onChange={formik.handleChange}
    //       error={formik.touched.password && Boolean(formik.errors.password)}
    //       helperText={formik.touched.password && formik.errors.password}
    //       // className="fieldPwd"
    //     />
    //     {/* <Button
    //       variant="contained"
    //       type="submit"
    //       style={{ backgroundColor: "green" }}
    //       // className="fieldBtn"
    //     >
    //       Connexion
    //     </Button> */}
    //     <button
    //       type="submit"
    //       style={{ backgroundColor: "green" }}
    //       // className="fieldBtn"
    //     >
    //       Connexion
    //     </button>
    //   </form>
    //   {/* </Formik> */}
    // </div>
  )
}

export default LoginPage
