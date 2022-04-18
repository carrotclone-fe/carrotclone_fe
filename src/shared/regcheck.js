

const regCheck = (check, sel) => {

    sel = sel.match(/^id/i) ? 'id' : sel
    sel = sel.match(/^pw/i) ? 'pw' : sel

    const Checking = {
        IdCheck: /^([a-zA-Z])[a-zA-Z0-9_.]{1,10}$/,
        PwCheck: /^([a-zA-Z])[0-9a-zA-Z!@#$%^&*]{3,20}$/,
    }

    console.log(check.match(/^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{3,20}$/))
    console.log(Checking.PwCheck.test(check))

    switch (sel) {
        case 'id':  console.log('id')
            return Checking.IdCheck.test(check)
        case 'pw':  console.log('pw')
            return Checking.PwCheck.test(check)
        default: return false;
    }
}

export default regCheck;