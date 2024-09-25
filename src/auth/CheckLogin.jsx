"use client"
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import BasicToolTemplate from '../components/model/BasicToolTemplate';
import { themeData } from '../color/theme';
import FuzzyQuery from '../utils/FuzzyQuery';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ProjectTypeData } from './AuthManagement';
const CheckLogin = ({ children }) => {
    const router = useRouter()
    const pathname = usePathname()
    const { data: session } = useSession();

    //-- 設定哪些路由需要套用 <BasicToolTemplate>
    const toolTemplateRule = /gogobo|ismart|magent/

    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (session !== undefined) {
            if ((pathname == '/') && session == null) {
                setIsLoading(false)
            } else if (pathname == '/' && session !== null) {
                router.push('/home')
            } else if (session == null) {
                setTimeout(() => { router.push('/') }, 200)
            } else {
                setIsLoading(false)
            }
        }
    }, [session, pathname])

    return (<>
        <Loading isLoading={isLoading} />
        <AntdRegistry>
            {
                FuzzyQuery(toolTemplateRule, pathname)?.state == 'fail' ? <>{children}</> :
                    <BasicToolTemplate
                        theme={themeData(ProjectTypeData()[FuzzyQuery(toolTemplateRule, pathname)?.word].theme)}
                        proName={FuzzyQuery(toolTemplateRule, pathname)?.word}>
                        {children}
                    </BasicToolTemplate>
            }
        </AntdRegistry>
    </>)
}
export default CheckLogin