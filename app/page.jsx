'use client'
import React, { useEffect } from 'react'
import liff from "@line/liff";

export default function Page() {
    useEffect(() => {
        liff.init({
            liffId: '1656692096-B3nMKee0'
        }).then(function () {
            console.log('xxx2', 'LIFF init', liff.isLoggedIn());
            if (!liff.isLoggedIn()) {
                liff.login({ redirectUri: window.location.href });
            } else {
                liff.sendMessages([
                    {
                        type: 'text',
                        text: 'Hello, World!'
                    }
                ]).then(function (res) {
                    console.log('xxx2', res)
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            // 這邊開始寫使用其他功能

        }).catch(function (error) {
            console.log(error);
        });
    }, [])
    return (
        <div>
            xxx-
            {/* <button onClick={share}>分享</button> */}
        </div>
    )
}
