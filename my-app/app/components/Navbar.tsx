
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import { getProviders } from 'next-auth/react'


const Navbar = async () => {
    const session = await auth()
    return (
        <header  >
            <nav className='flex flex-row justify-between p-3 text-2xl'>
                <Link href='/'>
                    <Image src='/logo.png' alt='logo' className='m-3' width={144} height={30}></Image>
                </Link>
                <div  >
                    {session && session?.user ? (

                        <div className='flex flex-row justify-around p-3 text-2xl'>
                            <Link href='/startup/create'>
                                <span className='mx-2'>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: '/' });
                            }}>
                                <button className='mx-2' type='submit'>Logout</button>
                            </form>

                            <Link href={'/user/${session?.id}'}>
                                <span className='mx-2'>{session?.user?.name}</span>
                            </Link>
                        </div>

                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn({ provider: 'github' });
                        }}>
                            <button className='mx-2' type='submit'>
                                Login

                            </button>

                        </form>
                    )}
                </div>

            </nav>


        </header >
    )
}

export default Navbar
