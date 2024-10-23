import { useState } from 'react';
import { LineComp, InputComp, ButtonSecondary } from '../../../components'
import {Login} from '../service'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { SetUserLog } from '../../../store/user';

export function LoginForm() {
    const dispatch = useDispatch()
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [isLoading, SetLoading] = useState(false)
    const nav = useNavigate()

    const handleEmail = (e)=>{
        SetEmail(e.target.value);
    }
    const handlePass = (e)=>{
        SetPassword(e.target.value)
    }
    const handleSubmit = async(e)=>{
        SetLoading(true)
        e.preventDefault();
        if(password === '' || email === '') return message.info("Invalid information")
        const datos = {
            email: email,
            password: password
        }
        try {
            const response = await Login(datos);
            const user = response.data.user
            const accessToken = response.data.backendTokens.accessToken
            LocalStore.setItem('accessToken', accessToken)
            dispatch(SetUserLog(user))
            nav('/')
        } catch (error) {
            message.error(error)
        }finally{
            SetLoading(false)
        }
    }

  return (
        <form className='flex flex-col items-center justify-center p-4 max-sm:w-[400px] max-md:w-[600px] max-2xl:w-[800px] m-auto'>
            <h2 className='flex text-center justify-center font-semibold p-2'>Welcome to E-Commerce
            </h2>
                <div className='bg-white border border-gray-300 rounded flex flex-col items-center justify-center gap-2 w-3/4 p-10 shadow-lg'>
                    <InputComp namePlaceholder='Ejemplo@gmail.com' 
                    typeInput='text'
                    value={email} 
                    onChange={handleEmail}/>
                    <InputComp namePlaceholder='************'
                    typeInput='password'
                    value={password}
                    onChange={handlePass}
                    />
                   <button className="bg-yellow-300 border rounded p-2 w-full hover:bg-yellow-200" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? 'Loading..' : 'Log In'}
                    </button>
                    <p className='hover:underline hover:cursor-pointer'>Forget password?</p>
                    <LineComp />
                    
                    <Link to={"/register"} className='w-full'>
                        <ButtonSecondary
                        nameButton='Register'/>
                    </Link>
                </div>
        </form>
    );
}
