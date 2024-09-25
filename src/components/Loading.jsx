import React from 'react';
import { ConfigProvider, Spin } from 'antd';
const Loading = (props) => {
    return (
        props.isLoading &&
        <div className='loading-wrap'>
            <div className='loading-block' data-tip={`${props.tip == undefined ? 'Loading..' : props.tip}`}></div>
        </div>
    )
};
export default Loading;