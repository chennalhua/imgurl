export async function GET(request) {
    // 獲取圖片的路徑
    const filePath = path.join(process.cwd(), 'public', 'image', 'view.jpg');
    // console.log(filePath)

    const path = require('path')

    console.log('__dirname：', __dirname)
    console.log('__filename：', __filename)
    console.log('process.cwd()：', filePath)
    console.log('img', process.cwd(), 'public', 'image', 'view.jpg')

    return new Response('Hello, Next.js!', {
        status: 200
    })
}