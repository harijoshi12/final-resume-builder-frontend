// // forward ref with hoc

// import React, { forwardRef } from 'react'
// import Link from 'next/link'
// import HocForm from './HocForm'
// import InputField from './InputField'
// import styles from './styles/auth.module.css'
// const Login = (props) => {
//   // console.log(props)
//   const {emailRef, password1Ref, formRef} = props
//   return (
//     <form ref={formRef} action="" className={styles.login_form}>
//       <InputField inputRef={emailRef} isStar={true}  type="email" name="email_login" id_htmlFor="id_email_login" label="E-mail" ></InputField>
      
//       <InputField inputRef={password1Ref} isStar={true}  type="password" name="password_login" id_htmlFor="id_password_login" label="Password" ></InputField>

//       <div className={styles.etc}>
//         <InputField inputRef={password1Ref} isStar={false} type="checkbox" name="remember" id_htmlFor="id_remember" label="Remember Me" ></InputField>
//         <Link href='/reset-password'><a className={styles.forget}>Forget Password?</a></Link>
//       </div>
//       <button className={styles.submit_btn} type="submit">Login</button>
//     </form>
//   )
// }
// const NewLogin = HocForm(forwardRef(Login))
// export default forwardRef((props, ref)=>{
//   return <NewLogin {...props} formRef={ref} />
// })

// // hoc
// import { useEffect, useRef } from "react"

// const HocForm = (Form)=>{
//   const NewForm = (props)=>{
//     const emailRef = useRef(null)
//     const password1Ref = useRef(null)
//     const password2Ref = useRef(null)
//     useEffect(()=>{
//       const inputs = [emailRef, password1Ref, password2Ref]

//       inputs.forEach(input=>{
//         if(input.current){
//           const label = input.current.nextElementSibling.firstElementChild
//           input.current.addEventListener('focus',()=>{
//             label.style.transform = `translateY(-25px)`
//             label.style.fontSize = `13px`
//             label.style.color = `blue`
//           })
//           input.current.addEventListener('blur',()=>{
//             if(input.current.value !== ""){
//               label.style.transform = `translateY(-25px)`
//               label.style.fontSize = `13px`
//               label.style.color = `blue`
//             } else{
//               label.style.transform = `translateY(-50%)`
//               label.style.fontSize = `16px`
//               label.style.color = 'black'
//             }
//           })
//         }
//       })

//     })
//     return(
//       <Form {...props} emailRef={emailRef} password1Ref={password1Ref} password2Ref={password2Ref}/>
//     )
//   }
//   return NewForm
// }

// export default HocForm