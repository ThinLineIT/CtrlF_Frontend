export const emailReg = (email) => {
    const emailRegExp = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
    return emailRegExp.test(email)
};

export const nickReg = (nick) => {
    const specilaReg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]/gi;
    const nickReg = /^[a-zA-Z0-9가-힣]{2,10}/g;
    if (nickReg.test(nick) && !specilaReg.test(nick) ) {
        return true;
    } else {
        return false;
    }
}

export const passwordReg = (pw) => {
    const num = pw.search(/[0-9]/g);
    const eng = pw.search(/[a-zA-Z]/gi);
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if(pw.length <8 || pw.length > 20){
        return false
    }else if(pw.search(/\s/) != -1){
        return false
    }else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
        return false
    }else {
       return true
    }
}