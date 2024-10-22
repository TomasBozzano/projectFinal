import { useState } from "react"
import { ButtonSecondary, InputComp, LineComp } from "../../../components"
import { Link, useNavigate } from "react-router-dom"
import { message } from "antd"
import {Register} from '../service'

export function RegisterForm() {
    const nav = useNavigate()
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [name, SetName] = useState('')
    const [passConfirm, SetPassConfirm] = useState('')
    const [isCreate, SetCreate] = useState(false)

    const handlename = (e)=>{
        SetName(e.target.value)
    }
    const handleEmail = (e)=>{
        SetEmail(e.target.value);
    }
    const handlePass = (e)=>{
        SetPassword(e.target.value)
    }
    const handlePassConfirm = (e)=>{
        SetPassConfirm(e.target.value)
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        SetCreate(true);
        if(password != passConfirm) return message.info("The keys do not match.")
        const data = {
            name: name,
            email: email,
            password: password
        }
        try {
            const response = await Register(data);
            message.success("It has been created successfully")
            nav("/login")
        } catch (error) {
            message.error("An error has been found, try again.")
        }finally{
            SetCreate(false);
        }
    }
  return (
     <form className='flex flex-col items-center justify-center p-4 max-sm:w-[400px] max-md:w-[600px] max-2xl:w-[800px] m-auto'>
            <h2 className='flex text-center justify-center font-semibold p-2'>Welcome to E-Commerce
            </h2>
                <div className='bg-white border border-gray-300 rounded flex flex-col items-center justify-center gap-2 w-3/4 p-10 shadow-lg'>
                    <InputComp namePlaceholder='Name' 
                    typeInput='text'
                    value={name} 
                    onChange={handlename}/>
                    <InputComp namePlaceholder='Example@gmail.com' 
                    typeInput='text'
                    value={email} 
                    onChange={handleEmail}/>
                    <InputComp namePlaceholder='Password'
                    typeInput='password'
                    value={password}
                    onChange={handlePass}
                    />
                    <InputComp namePlaceholder='Confirm password'
                    typeInput='password'
                    value={passConfirm}
                    onChange={handlePassConfirm}
                    />
                    <button className="bg-yellow-300 border rounded p-2 w-full hover:bg-yellow-200" onClick={handleSubmit} disabled={isCreate}>
                        {isCreate ? 'Creating..' : 'Create account'}
                    </button>
                    <LineComp />
                    <Link to={"/login"} className='hover:underline hover:cursor-pointer w-full'>
                    <ButtonSecondary nameButton="I have account.."/>
                    </Link>
                </div>

        </form>
  )
}
