"use client"
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const Home = () => {
    if (typeof window !== undefined) {
        const origin = window.location.origin
    }
    return (
        <>
            <Image src={`${origin}/image/user.jpg`} width={100} height={100} />
        </>
    )
}
export default Home