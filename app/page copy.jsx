"use client"
import React, { useState } from 'react';
import liff from '@line/liff';
const Home = () => {
    // Body element
    const body = document.getElementById('body');

    // Profile elements
    const pictureUrl = document.getElementById('pictureUrl');
    const userId = document.getElementById('userId');
    const displayName = document.getElementById('displayName');
    const statusMessage = document.getElementById('statusMessage');
    const email = document.getElementById('email');

    // Button elements
    const btnShare = document.getElementById('btnShare');

    async function main() {
        // 2. liff.ready
        liff.ready.then(() => {
            if (liff.getOS() === 'ios') {
                body.style.backgroundColor = '#888888';
            }
            if (liff.isInClient()) {
                getUserProfile();
            }
            // btnShare.style.display = 'block';
        });
        // 3. Try a LIFF function
        // 4. Check where LIFF was opened
        // 5. Call getUserProfile()
        // 10. Show share button

        // 1. Initialize LIFF app)
        await liff.init({ liffId: '1656692096-lNVdQXXq' });
    }
    main();

    // 6. Create getUserProfile()
    // *7. Get email
    async function getUserProfile() {
        const profile = await liff.getProfile();
        pictureUrl.src = profile.pictureUrl;
        userId.innerHTML = '<b>userId: </b>' + profile.userId;
        displayName.innerHTML = '<b>displayName: </b>' + profile.displayName;
        statusMessage.innerHTML = '<b>statusMessage: </b>' + profile.statusMessage;
        email.innerHTML = '<b>email: </b>' + liff.getDecodedIDToken().email;
    }

    // *8. Create shareMsg()
    async function shareMsg() {
        const result = await liff.shareTargetPicker([
            {
                type: 'text',
                text: 'This msg was shared by LIFF',
            },
        ]);
        if (result) {
            alert('Msg was shared!');
        } else {
            alert('ShareTargetPicker was cancelled by user');
        }
        liff.closeWindow();
    }
    // 11. Add close window

    async function pushMsg() {
        const result = await liff
            .sendMessages([
                {
                    type: 'text',
                    text: 'summary',
                },
            ])
            .then(() => {
                console.log('message sent');
            })
            .catch((err) => {
                console.log('error', err);
            });
        liff.closeWindow();
    }

    return (
        <>
            <div className='p-5'>
                <section id="profile">
                    <img id="pictureUrl" src="https://mokmoon.com/images/ic_liff.png" />
                    <p id="userId"></p>
                    <p id="displayName"></p>
                    <p id="statusMessage"></p>
                    <p id="email"></p>
                </section>
                <section id="button">
                    <button className='button' id="btnShare" onClick={e => shareMsg()}>Share Message</button>
                </section>
                <section>
                    <button className='button' id="btnPush" onClick={e => pushMsg()}>Push</button>
                </section>
            </div>
        </>
    )
}
export default Home