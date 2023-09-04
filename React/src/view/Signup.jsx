import {useState} from "react";
import {supabase} from "../supabase/client.js";
import {useDispatch} from "react-redux";
import {login} from "../store/authStore.js";
import {useNavigate} from "react-router-dom";

const Signup = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [name,setName]= useState('')
    const submitHandle = async ()=>{

        const { data, error } = await supabase.auth.signUp(
            {
                email,
                password,
                options: {
                    data: {
                        name
                    }
                }
            }
        )
        if (data && !error){
            dispatch(login(data))
        }
        console.log('data',data)
        console.log('error',error)
    }
    return(
        <main>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={submitHandle}>Sign up</button>
        </main>
    )
}
export default Signup;