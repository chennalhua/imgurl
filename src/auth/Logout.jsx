"use client";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading';
import { useState } from 'react';
const Logout = () => {

    const router = useRouter();
    const { data: session } = useSession();
    let [isLoading, setIsLoading] = useState(false)

    const handleLogout = async (e) => {
        e.preventDefault();
        if (session) {
            await signOut({
                redirect: false,
            });
        }
        setIsLoading(true)
        setTimeout(() => { router.push('/'); }, 200)
    }

    return (
        <>
            <Loading isLoading={isLoading} tip='登出中..' />
            <a href='#' onClick={e => handleLogout(e)}>登出</a>
        </>
    )
}
export default Logout