import React, { useState } from 'react';
const Footer = ({ theme }) => {
    return (
        <div className={`${theme.css} w-100 p-3 text-center text-sm`} style={{ background: theme.colorCode }}>
            公勝保險經紀人股份有限公司版權所有<br />
            Copyright © YYYY Golden Insurance Brokers Co., Ltd. All rights reserved.（Update : YYYYMMDD）
        </div>
    )
}
export default Footer