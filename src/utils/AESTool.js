import CryptoJS from "crypto-js";

export function Encrypt(data) { //-- AES 加密
    //編碼 KEY
    let key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_KEY);
    //編碼 IV
    let iv = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_IV);
    //編碼 DATA
    data = CryptoJS.enc.Utf8.parse(data);
    // 加密模式為 CBC 編碼方式為 Pkcs7
    let encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

export function Decrypt(data) { //-- AES 解密

    let key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_KEY);
    let iv = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_IV);

    const base64 = CryptoJS.enc.Base64.parse(data);
    const base64Str = CryptoJS.enc.Base64.stringify(base64);
    const decrypt = CryptoJS.AES.decrypt(base64Str, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
