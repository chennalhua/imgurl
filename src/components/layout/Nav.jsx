import { Menu } from 'antd';
import { GetAuthSubNavList } from '@/src/auth/AuthManagement';
const Nav = ({ proName }) => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    let openKey = GetAuthSubNavList({ proName: proName, roleCode: '1' }).list.map((item) => {
        return item.key
    })
    return (<Menu
        onClick={onClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={GetAuthSubNavList({ proName: proName, roleCode: '1' })?.defaultSelectedKeys}
        defaultOpenKeys={openKey}
        mode='inline'
        items={GetAuthSubNavList({ proName: proName, roleCode: '1' })?.list}
        className='full-box-scroll'
    />);
};
export default Nav;