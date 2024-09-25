import Link from "next/link";

export function ProjectTypeData() {
    //-- 設定專案類別顯示名稱、主題顏色...等等
    return {
        gogobo: {
            proName: "GOGOBO",
            theme: {
                color: "green",
                num: "600"
            }
        },
        ismart: {
            proName: "iSmart+",
            theme: {
                color: "yellow",
                num: "700"
            }
        },
        magent: {
            proName: "mAgent+",
            theme: {
                color: "blue",
                num: "700"
            }
        },
        test: {
            proName: "TEST",
            theme: {
                color: "purple",
                num: "700"
            }
        }
    }
}

/* -- Role Code 對應角色中文名稱
    @param {String} roleCode -- role code
*/
export function Role(roleCode) {
    switch (roleCode) {
        case '1': return '最高管理員'
        case '2': return 'GOGOBO 管理者'
        default: return '(--尚未設定權限名稱--)'
    }
}

/* -- 取得對應角色 Dashboard Item
    @param {String} roleCode -- role code
*/
export function GetAuthDashboardItem(roleCode) {

    /* -- returnData {Object}
        @param {String} state -- 狀態 (成功:success ; 失敗:fail)
        @param {Array} data -- role 權限對應可進入的類別
    */
    let returnData = {
        state: 'fail',
        data: []
    }
    switch (roleCode) {
        case '1': returnData = {
            state: 'success',
            data: [
                { type: 'gogobo', defaultTarget: '/gogobo/mobileTel' },
                { type: 'ismart', defaultTarget: '/ismart/messageCenter' },
                { type: 'magent', defaultTarget: '/magent' }
            ]
        }
            break;
        case '2': returnData = {
            state: 'success',
            data: [
                { type: 'gogobo', defaultTarget: '/gogobo/mobileTel' },
                { type: 'ismart', defaultTarget: '/ismart/messageCenter' }
            ]
        }
            break;
        default: break;
    }

    return returnData
}

/* -- 取得子頁面 Nav List
    @param {String} proName -- 類別名稱
    @param {String} roleCode -- role code
*/
export function GetAuthSubNavList({ proName, roleCode }) {

    /* -- returnData {Object}
        @param {Array} list -- nav list
        @param {Array} defaultSelectedKeys -- 預設選擇的 target key
    */
    let returnData = {
        list: [{
            type: 'group',
            key: 'default',
            label: <p>尚未建立類別 Nav List 請至 src / auth / AuthManagement / GetAuthSubNavList 建立</p>
        }],
        defaultSelectedKeys: []
    }

    let lowerProName = proName.toLowerCase(); //-- 轉小寫文字
    if (lowerProName == 'gogobo') {
        switch (roleCode) {
            case '1':
            case '2':
                returnData = {
                    list: [
                        {
                            key: `${proName}-1`,
                            label: '電訪管理',
                            children: [
                                {
                                    key: `${proName}-1-1`,
                                    label: <Link href='/gogobo/mobileTel'>網路投保電訪紀錄</Link>
                                },
                                {
                                    key: `${proName}-1-2`,
                                    label: '行投紙本電訪紀錄',
                                    children: [
                                        {
                                            key: `${proName}-1-2-1`,
                                            label: <Link href='/gogobo/onlineTel'>全部</Link>,
                                        },
                                        {
                                            key: `${proName}-1-2-2`,
                                            label: <Link href='/gogobo/onlineTel'>高齡件</Link>,
                                        },
                                        {
                                            key: `${proName}-1-2-3`,
                                            label: <Link href='/gogobo/onlineTel'>保費來源件</Link>,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            key: `${proName}-2`,
                            label: '客戶管理',
                            children: [
                                {
                                    key: `${proName}-2-1`,
                                    label: <Link href='/gogobo/page'>查詢紀錄及修改歷程</Link>
                                },
                                {
                                    key: `${proName}-2-2`,
                                    label: <Link href='/gogobo/page'>修改客戶資料</Link>,
                                },
                            ],
                        }
                    ],
                    defaultSelectedKeys: [`${proName}-1-1`]
                }
                break;
            default: break;
        }
    } else if (lowerProName == 'ismart') {
        switch (roleCode) {
            case '1':
            case '2':
                returnData = {
                    list: [
                        {
                            key: `${proName}-1`,
                            label: '發訊管理',
                            children: [
                                {
                                    key: `${proName}-1-1`,
                                    label: <Link href='/ismart/messageCenter'>發訊中心</Link>
                                },
                                {
                                    key: `${proName}-1-2`,
                                    label: <Link href='/ismart/page'>訊息審核</Link>
                                },
                                {
                                    key: `${proName}-1-3`,
                                    label: <Link href='/ismart/page'>推播統計</Link>
                                }
                            ],
                        },
                        {
                            key: `${proName}-2`,
                            label: '權限管理',
                            children: [
                                {
                                    key: `${proName}-2-1`,
                                    label: <Link href='/ismart/page'>權限管理</Link>
                                },
                                {
                                    key: `${proName}-2-2`,
                                    label: <Link href='/ismart/page'>業務員管理</Link>
                                }
                            ],
                        }
                    ],
                    defaultSelectedKeys: [`${proName}-1-1`]
                }
                break;
            default: break;
        }
    }

    return returnData
}

