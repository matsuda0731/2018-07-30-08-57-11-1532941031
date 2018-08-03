module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
    let readline = require('readline');
    let rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    let str = ''
    let digitArr = [
    [
        ['.','_','.'],
        ['|','.','|'],
        ['|','_','|']
    ],
    [
        ['.','.','.'],
        ['.','.','|'],
        ['.','.','|']

    ],
    [
        ['.','_','.'],
        ['.','_','|'],
        ['|','_','.']
    ],
    [
        ['.','_','.'],
        ['.','_','|'],
        ['.','_','|']


    ],
    [
        ['.','.','.'],
        ['|','_','|'],
        ['.','.','|']

    ],
    [
        ['.','_','.'],
        ['|','_','.'],
        ['.','_','|']
    ],
    [
        ['.','_','.'],
        ['|','_','.'],
        ['|','_','|']

    ],
    [

        ['.','_','.'],
        ['.','.','|'],
        ['.','.','|']

    ],
    [
        ['.','_','.'],
        ['|','_','|'],
        ['|','_','|']
    ],
        ['.','_','.'],
        ['|','_','|'],
        ['.','.','|']
    ]
    rl.on('line',function(data){
        str += data;
        // 璋冪敤鍑芥暟鏃朵紶鍏ヨ澶勭悊鐨勬暟缁勫嵆鍙€?
        let j;
        let newStr = [];
        for(j=0;j<str.length;j++){
           switch(str[j]){
            case '0':
                newStr.push(digitArr[0]);
            break;
            case '1':
               newStr.push(digitArr[1]);
            break;
            case '2':
                newStr.push(digitArr[2]);
            break;
            case '3':
                newStr.push(digitArr[3]);
            break;
            case '4':
                newStr.push(digitArr[4]);
            break;
            case '5':
                newStr.push(digitArr[5]);
            break;
            case '6':
                newStr.push(digitArr[6]);
            break;
            case '7':
                newStr.push(digitArr[7]);
            break;
            case '8':
                newStr.push(digitArr[8]);
            break;
            case '9':
                newStr.push(digitArr[9]);
            break;
           }
        }
       console.log(newStr);
    })

};
