//-- 判斷設備尺寸
export default function WidthDevice() {
    const screenWidth = window.screen.availWidth
    /*
        < 320 xs
        >= 320 ~ <= 576 sm
        > 576 ~ <= 768 md
        > 768 ~ <= 992 lg
        > 992 ~ <= 1200 xl
        > 1200 xxl
    */

    if (screenWidth < 320) {
        return 'xs'
    } else if (screenWidth >= 320 && screenWidth <= 576) {
        return 'sm'
    } else if (screenWidth > 576 && screenWidth <= 768) {
        return 'md'
    } else if (screenWidth > 768 && screenWidth <= 992) {
        return 'lg'
    } else if (screenWidth > 992 && screenWidth <= 1200) {
        return 'xl'
    } else {
        return 'xxl'
    }
}