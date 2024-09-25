"use client"
import { Dropdown } from 'antd';
import { Controller } from '../button/Controller';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { GetAuthDashboardItem, ProjectTypeData } from '@/src/auth/AuthManagement';
const Header = ({ theme, menuOpen, proName, state, setState }) => {

    const headerUserToolItem = [
        {
            key: '1',
            label: (
                <div>
                    <p className='mb-2'>身分：最高使用者</p>
                    <div className={`border-b-2`}>個人設定</div>
                </div>
            )
        },
        {
            key: '2',
            label: (<a href='#'>變更密碼</a>)
        },
        {
            key: '3',
            label: (<a href='#'>其他設定</a>)
        }
    ];

    const { data: session } = useSession();
    let [changeBoard, setChangeBoard] = useState([]);

    useEffect(() => {
        if (session !== null) {
            let newData = GetAuthDashboardItem(session?.user?.User_Role).data.map((item, index) => {
                return { key: `${index + 1}`, label: (<a href={item.defaultTarget}>{ProjectTypeData()[item.type].proName}</a>) }
            })
            newData.unshift({ key: '0', label: (<a href='/home'>首頁</a>) })
            setChangeBoard(newData)
        }
    }, [session])

    return (
        <>
            {/* Header */}
            <div className={`${theme.css} p-3 py-4`} style={{ background: theme.colorCode }}>
                <div className='flex items-center'>
                    <div style={{ width: '20%' }}>
                        <div className='flex items-center'>
                            <div style={{ margin: '0 25px' }}><a href='/home'>{ProjectTypeData()[proName].proName}</a></div>
                        </div>
                    </div>
                    <div style={{ width: '80%' }}>
                        <div className='flex items-center justify-end'>
                            <div className='flex items-center'>
                                <div className='mx-3'>
                                    <Dropdown style={{ fontSize: '36px' }} menu={{ items: changeBoard }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <div className='flex items-center'>
                                                <div className='mx-1 text-white'>Dashboard</div>
                                                <span className='material-symbols-outlined'>arrow_drop_down</span>
                                            </div>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className='flex items-center'>
                                    <Dropdown style={{ fontSize: '36px' }} menu={{ items: headerUserToolItem }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <div className='flex items-center'>
                                                <span className='material-symbols-outlined'>account_circle</span>
                                                <div className='mx-1'>使用者</div>
                                                <span className='material-symbols-outlined'>arrow_drop_down</span>
                                            </div>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className='mx-4'>
                                    <a href='#' className='flex items-center'>登出</a>
                                </div>
                                {!menuOpen ? '' : <Controller icon='menu' state={state} setState={setState} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header