'use client'
import React, { useEffect } from 'react'
import liff from "@line/liff";

export default function Page() {
    // #測試是否會自動開啟【分享給好友】談窗
    useEffect(() => {
        liff
            .init({
                liffId: `${process.env.NEXT_PUBLIC_GOLDEN_LINE}`,
                // liffId: "2006335810-vKOPO9eM",
            })
            .then(() => {
                console.log(liff.isLoggedIn());
                if (!liff.isLoggedIn()) {
                    liff.login({ redirectUri: window.location.href });
                } else {
                    liff
                        .shareTargetPicker(
                            [
                                {
                                    type: "text",
                                    text: "哈囉，我是雨軒，很高興認識您!",
                                },
                                {
                                    type: "flex",
                                    altText: "哈囉，我是雨軒，很高興認識您!",
                                    contents: {
                                        type: "bubble",
                                        hero: {
                                            type: "video",
                                            url: "https://www.youtube.com/watch?v=JFLYt247mOI",
                                            previewUrl:
                                                "https://cimg.cnyes.cool/prod/news/5125952/xxl/84b78008204c0de09279bb54b09f5ce9.jpg",
                                            altContent: {
                                                type: "image",
                                                size: "full",
                                                aspectRatio: "16:9",
                                                aspectMode: "cover",
                                                url: "https://cimg.cnyes.cool/prod/news/5125952/xxl/84b78008204c0de09279bb54b09f5ce9.jpg",
                                            },
                                            aspectRatio: "16:9",
                                        },
                                        body: {
                                            type: "box",
                                            layout: "vertical",
                                            contents: [
                                                {
                                                    type: "text",
                                                    text: "蔡公勝",
                                                    weight: "bold",
                                                    size: "xl",
                                                    margin: "none",
                                                    align: "center",
                                                    color: "#8F724C",
                                                },
                                                {
                                                    type: "box",
                                                    layout: "vertical",
                                                    contents: [
                                                        {
                                                            type: "text",
                                                            text: "資深業務副總",
                                                            align: "center",
                                                        },
                                                        {
                                                            type: "text",
                                                            text: "RFA 退休理財規劃顧問",
                                                            align: "center",
                                                        },
                                                        {
                                                            type: "text",
                                                            text: "RFC 國際認證財務顧問",
                                                            align: "center",
                                                        },
                                                        {
                                                            type: "text",
                                                            text: "RFP 美國註冊財務策畫師",
                                                            align: "center",
                                                        },
                                                    ],
                                                    spacing: "xs",
                                                    margin: "lg",
                                                },
                                            ],
                                        },
                                        footer: {
                                            type: "box",
                                            layout: "vertical",
                                            spacing: "md",
                                            contents: [
                                                {
                                                    type: "button",
                                                    style: "primary",
                                                    height: "sm",
                                                    action: {
                                                        type: "uri",
                                                        label: "個人首頁 (這邊會開啟個人網站)",
                                                        uri: "https://line.me/",
                                                    },
                                                    color: "#8F724C",
                                                },
                                                {
                                                    type: "button",
                                                    style: "secondary",
                                                    height: "sm",
                                                    action: {
                                                        type: "uri",
                                                        label: "官方網站",
                                                        uri: "https://line.me/",
                                                    },
                                                    color: "#C7B7A3",
                                                },
                                                {
                                                    type: "button",
                                                    style: "secondary",
                                                    height: "sm",
                                                    action: {
                                                        type: "uri",
                                                        label: "FACEBOOK",
                                                        uri: "https://line.me/",
                                                    },
                                                    color: "#C7B7A3",
                                                },
                                                {
                                                    type: "button",
                                                    style: "secondary",
                                                    height: "sm",
                                                    action: {
                                                        type: "uri",
                                                        label: "IG",
                                                        uri: "https://line.me/",
                                                    },
                                                    color: "#C7B7A3",
                                                },
                                                {
                                                    type: "button",
                                                    action: {
                                                        type: "uri",
                                                        label: "分享名片(這邊會分享名片)",
                                                        uri: "http://linecorp.com/",
                                                    },
                                                    style: "link",
                                                    color: "#666666",
                                                },
                                            ],
                                            flex: 0,
                                        },
                                    },
                                },
                            ],
                            {
                                isMultiple: true,
                            }
                        )
                        .then(function (res) {
                            if (res) {
                                console.log(`[${res.status}] Message sent!`);
                            } else {
                                console.log("TargetPicker was closed!");
                            }
                        })
                        .catch(function (error) {
                            console.log("something wrong happen");
                        });
                }
            })
            .catch((err) => {
                console.log(err.code, err.message);
            });

    }, [])
    const share = () => {


    }
    return (
        <div>
            <button onClick={share}>分享</button>
        </div>
    )
}
