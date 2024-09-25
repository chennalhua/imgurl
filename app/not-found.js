"use client";

import React from 'react';
import { Button, ConfigProvider, Result } from 'antd';
import colors from '@/src/color/colors';
const NoFound = () => (
    <ConfigProvider theme={{ token: { colorPrimary: colors.gray[600] } }}>
        <Result
            status="404"
            title="404"
            subTitle="找無此頁面"
            extra={<Button type="primary" onClick={e => window.location.href = '/home'}>回首頁</Button>}
        />
    </ConfigProvider>
);
export default NoFound;