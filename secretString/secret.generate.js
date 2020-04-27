module.exports.secretStr = () => {
    let res = '';
    let len = 50;
    while (len!=0) {
        const ranNum = Math.floor(Math.random() * 40 + 215);
        res += String.fromCharCode(ranNum);
        len--;
    }
    return res;
}