'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { ConfigProvider, Skeleton, Timeline, Calendar, Table } from 'antd';
import buttonBg from '@/public/image/view.jpg';
import colors from '@/src/color/colors';
import { Controller } from '@/src/components/button/Controller';
import Logout from '@/src/auth/Logout';
import { useSession } from 'next-auth/react';
import { GetAuthDashboardItem, ProjectTypeData, Role } from '@/src/auth/AuthManagement';
import Link from 'next/link';
import useSWR from 'swr';
import ChangePassword from '@/src/components/button/ChangePassword';

const Home = (props) => {
    let [templateMenuState, setTemplateMenuState] = useState(true)

    const { data: session } = useSession();

    let [dashboardItem, setDashboardItem] = useState([])
    let [showUserData, setShowUserData] = useState([])
    const userDataTableColumns = [
        { title: '姓名', dataIndex: 'name' },
        { title: '帳號', dataIndex: 'mail' },
        {
            title: '權限', dataIndex: 'role', sorter: {
                compare: (a, b) => Number(a.role) - Number(b.role),
                multiple: 3,
            }
        }
    ];

    const fetcher = (url) => fetch(url).then(r => r.json());
    const {
        data: APIgetUserData,
        error: APIgetUserDataError,
        isLoading: APIgetUserDataLoading
    } = useSWR('http://localhost:3000/api/userData', fetcher, { refreshInterval: 500 })

    useEffect(() => {
        if (session !== null) {
            setDashboardItem(GetAuthDashboardItem(session?.user?.User_Role).data)
        }

        if (APIgetUserData !== undefined) {
            let { ResponseCode, userData } = APIgetUserData
            if (ResponseCode == '0') {
                let newData = userData.map((item, index) => {
                    return ({
                        key: index,
                        name: item?.name,
                        role: Role(item?.role),
                        mail: item?.mail
                    })
                })
                setShowUserData(newData)

                // if (APIgetUserDataError) return <div>failed to load</div>
                // if (APIgetUserDataLoading) return <div>loading...</div>
            }
        }
    }, [session, APIgetUserData])

    return (
        <ConfigProvider theme={{ token: { colorPrimary: colors.gray[600] } }}>
            <div className={`template basic ${templateMenuState ? 'active' : 'close'}`}>
                <div className='basic-small-box h-screen bg-gradient-to-b from-gray-600 to-gray-800'>
                    <div className='flex justify-center h-full'>
                        <div className='my-5'>
                            <div className='personal-box mt-5'>
                                <div className='user-image-box'>
                                    <div className='user-image'>
                                        <img src="https://picsum.photos/200" alt='user' />
                                    </div>
                                </div>
                                <div className='text-white text-center mt-5'>
                                    <p>{session?.user?.User_Name}</p>
                                    <p className='text-sm mt-2'>- {Role(session?.user?.User_Role)} -</p>
                                </div>
                            </div>
                            {/* <ChangePassword>
                                <span className='text-white'>變更密碼</span>
                            </ChangePassword> */}
                        </div>
                    </div>
                </div>
                <div className='basic-big-box h-screen bg-gray-100'>
                    <div className='w-100 full-box-scroll' style={{ height: '98vh' }}>
                        <div className='my-4 mx-5'>
                            <div className='flex items-center justify-between mb-4'>
                                <h2 className='flex items-center text-gray-700'><span className='material-icons-round me-1'>dashboard</span>Dashboard</h2>
                                <div className='flex items-center'>
                                    <div className='me-4'><Logout /></div>
                                    <Controller icon='menu' state={templateMenuState} setState={setTemplateMenuState} />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                                <Suspense fallback={<Skeleton active paragraph={{ rows: 2 }} />}>
                                    {dashboardItem.length <= 0 &&
                                        [1, 2, 3].map((item) => {
                                            return (<Skeleton key={item} active paragraph={{ rows: 2 }} />)
                                        })
                                    }
                                    {dashboardItem.map((item, index) => {
                                        return (
                                            <Link key={`item-${index + 1}`}
                                                href={`${item.defaultTarget}`}
                                                className={`project-item-button`}
                                                style={{ backgroundImage: `url(${buttonBg.src})` }}>
                                                <div className={`text-white flex items-center justify-center bg-${item.type}`}
                                                    style={{ borderRadius: '22px' }}>{ProjectTypeData()[item.type].proName}</div>
                                            </Link>
                                        )
                                    })}
                                </Suspense>
                            </div>
                            <div className='mt-4' style={{ border: '1px dashed #cbcbcb' }}></div>
                            <div className='mt-4'>
                                <h2 className='flex items-center text-gray-700 mb-3'><span className='material-icons-round me-1'>view_cozy</span>權限表</h2>
                                <Table columns={userDataTableColumns} dataSource={showUserData} />
                            </div>
                            <div className='mt-4' style={{ border: '1px dashed #cbcbcb' }}></div>
                            <div className='grid grid-cols-12 gap-4 mt-5'>
                                <div className='col-span-8'>
                                    <Skeleton active paragraph={{ rows: 6 }} />
                                </div>
                                <div className='col-span-4'>
                                    <Skeleton active paragraph={{ rows: 6 }} />
                                </div>
                            </div>
                            <div className='grid grid-cols-12 gap-4 mt-4'>
                                <div className='col-span-12 md:col-span-7 lg:col-span-8 bg-white p-5 pb-0'
                                    style={{ borderRadius: '22px' }}>
                                    <Timeline items={[
                                        { children: '2024/06/06：更新 XXXXX，新增 OOOOO 功能', color: '#107a47' },
                                        { children: '2024/05/21：更新 XXXXX，新增 OOOOO 功能' },
                                        { children: '2024/05/02：更新 XXXXX，新增 OOOOO 功能' },
                                        { children: '2024/04/28：更新 XXXXX，新增 OOOOO 功能' },
                                        { children: '2024/04/12：更新 XXXXX，新增 OOOOO 功能' },
                                        { children: '2024/03/18：更新 XXXXX，新增 OOOOO 功能' }
                                    ]} />
                                </div>
                                <div className='col-span-12 md:col-span-5 lg:col-span-4 bg-white h-20' style={{ borderRadius: '22px' }}>
                                    <div>
                                        <Calendar style={{ borderRadius: '22px' }} fullscreen={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )
}
export default Home