import { useSelector } from 'react-redux'
import { supabase } from '../supabase/client'
import {useEffect, useState} from "react";
import {redirect, useNavigate} from "react-router-dom";

const LoginPage = () => {

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const user = useSelector((state) => state.authStore.user)
    const navigate = useNavigate()
    const controluser= ()=>{
        if (user){
            console.log('redirect')
            navigate("/")
        }
    }
    useEffect(()=>{
      controluser()
    },[user])

  const loginSubmit = async () => {
    console.log('loginSubmit')
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    console.log(data, error)
  }
    const googleSubmit = async () => {
        console.log('googleSubmit')
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })
        console.log(data, error)
    }
  return (

    <main className='h-screen '>
      <div className='card'>
        <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button onClick={loginSubmit} className='btn btn-primary'>Giris Yap</button>
        <button onClick={googleSubmit}>google auth</button>

      </div>

    </main>
  )
}

export default LoginPage;