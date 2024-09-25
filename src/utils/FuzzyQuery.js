/**
 @param  {Array}  rule     查詢組數(規則)
 @param  {String} keyWord  關鍵字
 @return {Array}           結果
*/
export default function FuzzyQuery(rule, keyWord) {
    if (keyWord.search(rule) > -1) { //判斷是否 search keyword 大於 -1 (有符合)
        return { state: 'success', word: keyWord.match(rule)[0] }; // [true, 關鍵字]
    } else { //未符合 rule 內關鍵字
        return { state: 'fail', word: null }
    }
}