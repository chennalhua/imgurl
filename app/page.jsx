"use client"
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const Home = () => {
    return (
        <>
            <Image src={`https://imgurl-pvgs.vercel.app/image/user.jpg`} width={100} height={100} />
        </>
    )
}
export default Home