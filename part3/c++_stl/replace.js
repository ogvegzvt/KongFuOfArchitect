
const FS = require('fs');
let replaceFile = function(filePath){
    const data = FS.readFileSync(filePath)
    let str = data.toString()
    let str1 = str.replace(/（/ig, '(')
    let str2 = str1.replace(/）/ig, ')')
    let str3 = str2.replace(/ “/g, '\'')
    let str4 = str3.replace(/图形/g, '字符')
    let str5 = str4.replace(/签名/g,'有符号')
    let str6 = str5.replace(/，/g,',')
    console.log('done!')
    FS.writeFileSync(filePath, str6)
}

replaceFile('README.md')