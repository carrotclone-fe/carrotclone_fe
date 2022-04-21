

const regCheck = (check, sel) => {

    sel = sel.match(/^i/i) ? 'id' : sel
    sel = sel.match(/^p/i) ? 'pw' : sel

    const Checking = {
        IdCheck: /^[가-힣a-zA-Z0-9-_.]{2,10}$/,
        PwCheck: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{6,20}$/,
    }

    switch (sel) {
        case 'id': return Checking.IdCheck.test(check)
        case 'pw': return Checking.PwCheck.test(check)
        default: return false;
    }
}

export default regCheck;