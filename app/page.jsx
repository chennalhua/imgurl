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
                        "type": "bubble",
                        "hero": {
                            "type": "image",
                            "url": "https://developers-resource.landpress.line.me/fx/img/01_1_cafe.png",
                            "size": "full",
                            "aspectRatio": "20:13",
                            "aspectMode": "cover",
                            "action": {
                                "type": "uri",
                                "uri": "https://line.me/"
                            }
                        },
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Brown Cafe",
                                    "weight": "bold",
                                    "size": "xl"
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "margin": "md",
                                    "contents": [
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "size": "sm",
                                            "url": "https://developers-resource.landpress.line.me/fx/img/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "size": "sm",
                                            "color": "#999999",
                                            "margin": "md",
                                            "flex": 0
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "margin": "lg",
                                    "spacing": "sm",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Place",
                                                    "color": "#aaaaaa",
                                                    "size": "sm",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "Flex Tower, 7-7-4 Midori-ku, Tokyo",
                                                    "wrap": true,
                                                    "color": "#666666",
                                                    "size": "sm",
                                                    "flex": 5
                                                }
                                            ]
                                        },
                                        {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Time",
                                                    "color": "#aaaaaa",
                                                    "size": "sm",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "text",
                                                    "text": "10:00 - 23:00",
                                                    "wrap": true,
                                                    "color": "#666666",
                                                    "size": "sm",
                                                    "flex": 5
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "footer": {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "button",
                                    "style": "link",
                                    "height": "sm",
                                    "action": {
                                        "type": "uri",
                                        "label": "CALL",
                                        "uri": "https://line.me/"
                                    }
                                },
                                {
                                    "type": "button",
                                    "style": "link",
                                    "height": "sm",
                                    "action": {
                                        "type": "uri",
                                        "label": "WEBSITE",
                                        "uri": "https://line.me/"
                                    }
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [],
                                    "margin": "sm"
                                }
                            ],
                            "flex": 0
                        }
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
            xxx-test-card
            {/* <button onClick={share}>分享</button> */}
        </div>
    )
}
