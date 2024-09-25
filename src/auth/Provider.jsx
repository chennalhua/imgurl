'use client';
import { SessionProvider, useSession } from 'next-auth/react';
import CheckLogin from './CheckLogin';
const Provider = ({ children }) => {
    return (
        <SessionProvider>
            <CheckLogin>{children}</CheckLogin>
        </SessionProvider>
    )
}
export default Provider