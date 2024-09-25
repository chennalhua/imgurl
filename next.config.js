const securityHeaders = [{ key: 'X-Content-Type-Options', value: 'nosniff' }]

module.exports = {
    // 一律都跑 env 如需部屬該對應，要改為 !!! "env" !!!
    env: {
        REACT_APP_API: 'https://eip2.goldennet.com.tw:9043',
        REACT_APP_TEL_API: 'https://192.168.100.118:8120',
        REACT_APP_AES_KEY: 'Zse45fvg6%3IJmk0-p45%^%egdq9e034',
        REACT_APP_AES_IV: 'FG45^%7FsgNDJscK',
        ENVIRONMENT: 'UAT'
    },
    images: {
        unoptimized: true,
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },
}
