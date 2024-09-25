import { ConfigProvider } from 'antd'

/*-
@param theme -- 主題
判斷：如果 theme,colorNum 任一位未取到值，即為"不成立"不設定
*/

const ThemeModel = ({ children, theme }) => {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: !theme ? '' : theme.colorCode } }}>
            {children}
        </ConfigProvider>
    )
}
export default ThemeModel