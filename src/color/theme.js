import colors from "@/src/color/colors"
/* -- 主題色
    @param colorName -- 顏色名稱
*/
export function themeData({ color, num }) {
    const defaultTheme = { //預設值
        data: { color: 'gray', num: '700' },
        colorCode: colors['gray']['700'],
        css: 'bg-gray-700 text-white'
    }

    color == '' && 'default'
    num = isNaN(Number(num)) || num == '' ? '500' : num
    const cssText = Number(num) >= 600 ? 'text-white' : 'text-dark'

    function setDataModal(thisColor, thisNum) {
        return ({
            data: { color: thisColor, num: thisNum },
            colorCode: colors[thisColor][thisNum],
            css: cssText
        })
    }

    return color == 'default' ? defaultTheme : setDataModal(color, num)
}