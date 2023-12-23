"use client"
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!name || !email || !password) {
            setError("All fields are required")
            return
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json()
            console.log(data)

        } catch (error) {
            console.log("erorr this :", error)
        }
    }

    return (
        <div className='grid place-items-center h-screen'>
            <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-500'>
                <h1 className='text-xl font-bold my-4'>Register</h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <input type="text" onChange={e => setName(e.target.value)} placeholder='Name' />
                    <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Email' />
                    <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Password' />
                    <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Register</button>
                    {error && (
                        <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 '>
                            {error}
                        </div>
                    )}
                    <Link href={'/'} className='text-sm mt-3 text-right'>
                        Already have an account? <span className='underline'>login</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm