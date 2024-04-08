/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let st = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (st.length > 0 && Math.abs(char.charCodeAt(0) - st[st.length - 1].charCodeAt(0)) === 32) {
            st.pop();
        } else {
            st.push(char);
        }
    }
    
    return st.join('');
};
