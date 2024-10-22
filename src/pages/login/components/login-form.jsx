import { useState } from 'react';
import { LineComp, InputComp, ButtonPrimary, ButtonSecondary } from '../../../components'
import {Login} from '../service'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

export function LoginForm() {
    const dispatch = useDispatch()
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const handleEmail = (e)=>{
        SetEmail(e.target.value);
    }
    const handlePass = (e)=>{
        SetPassword(e.target.value)
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(password === '' || email === '') return message.info("Invalid information")
        const datos = {
            email: email,
            password: password
        }
        try {
            const response = await Login(datos);

        } catch (error) {
            
        }
    }

  return (
        <form className='flex flex-col items-center justify-center p-4 max-sm:w-[400px] max-md:w-[600px] max-2xl:w-[800px] m-auto'
        onSubmit={handleSubmit}>
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
                    <ButtonPrimary 
                    typeButton=''
                    nameButton='Log In'/>
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
