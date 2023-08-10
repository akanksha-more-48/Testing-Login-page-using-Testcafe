import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://beta.deepthought.education/login`;
    
test(`Google Chrome`, async t => {
    await t
        .click('#login')    
        .click('#username')
        .click('#password')
        .doubleClick(Selector('#login-form div').withText('Password'))
        .click('#username')
        .click(Selector('#content div').withText('Alternate Logins').nth(1))
        .click('#username')
        .click(Selector('#login-form a').withText('Register'))
        .typeText('#email', 'akanksha1331976@gmail.com')
        .pressKey('tab')
        .typeText('#username', 'Akanskha ')
        .pressKey('tab')
        .typeText('#password', 'more@123')
        .pressKey('tab')
        .typeText('#password-confirm', 'more@123')
        .click('#register')
        .click('#gdpr_agree_data')
        .click('#gdpr_agree_email')
        .click(Selector('#content button').withText('Submit'))
        .click(Selector('header div').withText('Home').nth(1))
        .click('header .fas.fa-ellipsis-v.ellipsis')
        .click(Selector('header span').withText('Logout'))
});

test('Google Chrome 1', async t => {
    await t
        .click('#login')    
        .typeText('#username', 'akanksha1331976@gmail.com')
        .click('#login')
        .click('#password')
        .click('#login')
        .click('#password')
        .click('#login')
        .click('#username')
        .click('#login')
        .click('#password')
        .selectText('#username', 25, 0)
        .typeText('#username', 'More', {
            caretPos: 0
        })
        .typeText('#password', 'more')
        .click('#login')
        .click('#password')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click('#username')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText('#username', 'akanksha1331976@gmail.com')
        .typeText('#password', 'Akanksha')
        .click('#login')
        .selectText('#username', 25, 0)
        .pressKey('backspace')
        .click('#login')
        .selectText('#password', 8, 0)
        .pressKey('backspace')
    await t
        .typeText('#username', 'akanksha')
        .click('#password')
        .typeText('#username', '1331976@gmail.cim')
        .typeText('#password', 'more@123')
        .click('#login')
        .selectText('#password', 8, 0)
        .typeText('#password', 'akanksha', {
            caretPos: 0
        })
        .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
        .typeText('#password', 'Akanksha@48')
        .click('#login')
        .click('#username', {
            caretPos: 24
        })
        .typeText('#username', '0', {
            caretPos: 23
        })
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText('#username', 'o', {
            caretPos: 23
        })
        .selectText('#password', 11, 0)
        .typeText('#password', 'more@123', {
            caretPos: 0
        })
        .selectText('#password', 8, 0)
        .typeText('#password', 'more@123', {
            caretPos: 0
        })
        .click('#login')
        .selectText('#password', 8, 0)
        .typeText('#password', 'Akanksha@1', {
            caretPos: 0
        })
        .pressKey('backspace')
        .typeText('#password', '48')
        .click('#login')
        .click(Selector('div').withText('Session Mismatch'))
        .click('#profile')
        .click(Selector('#content a').withText('Edit'))
        .click(Selector('#content a').withText('Change Password'))
        .typeText('#inputCurrentPassword', 'Akanksha@48')
        .pressKey('tab')
        .typeText('#inputNewPassword', 'More@123')
        .pressKey('tab')
        .typeText('#inputNewPasswordAgain', 'More@123')
        .click('#changePasswordBtn')
        .typeText('#username', 'akanksha1331976@gmail.com')
        .pressKey('tab')
        .typeText('#password', 'More@123')
        .pressKey('enter')
        .click(Selector('header div').withText('Home').nth(1))
        .click('header .fas.fa-ellipsis-v.ellipsis')
        .click('header .dropdown-item')
        .click(Selector('header button').withText('Logout'))
        .click('#content')
        .click('#username')
        .typeText('#username', 'akanksha1331976@gmail.com')
        .click('#reset-link')
        .typeText('#email', 'akanksha1331976@gmail.com')
        .click('#reset')
        .click('#reset')
        .click('#reset')
        .typeText('#otp', '123456')
        .typeText('#password', 'More@123')
        .pressKey('tab')
        .typeText('#repeat', 'More@123')
        .click('#reset')
        .click(Selector('#content span').withText('Home'))
        .click('#login')
        .typeText('#username', 'Aka')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText('#username', 'Akanksha')
        .click('#login')
        .selectText('#username', 8, 0)
        .pressKey('backspace')
        .typeText('#password', 'More@123')
        .click('#login')
        .typeText('#username', 'Akanksha@48')
        .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
        .typeText('#username', 'Akanksha')
        .click('#login')
        .click('#username')
        .selectText('#username', 8, 0)
        .click('#password')
        .selectText('#password', 8, 0)
        .typeText('#password', 'More@123', {
            caretPos: 0
        })
        .click('#username')
        .typeText('#username', 'a', {
            caretPos: 1
        })
        .pressKey('backspace right right right right right right right right right right right right right right')
        .typeText('#username', '1331976@gmail.com')
        .click('#login')
        .click('#username', {
            caretPos: 0
        })
        .pressKey('backspace')
        .selectText('#password', 8, 0)
        .typeText('#password', 'Akanksha@48', {
            caretPos: 0
        })
        .click('#login')
        .selectText('#password', 11, 0)
        .typeText('#password', 'More@123', {
            caretPos: 0
        })
        .click('#login')
});

test('Microsoft Edge', async t => {
    await t
        .click('#login')    
        .typeText('#username', 'Akanksha')
        .typeText('#password', 'More@123')
        .pressKey('enter')
        .click('#password', {
            caretPos: 0
        })
        .click('#password', {
            caretPos: 0
        })
        .click('#username')
        .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
        .typeText('#username', 'akanksha1331976@gmail.com')
        .pressKey('enter')
        .click(Selector('div').withText('Session Mismatch'))
        .click(Selector('header div').withText('Home'))
        .click('header .fas.fa-ellipsis-v.ellipsis')
        .click(Selector('header span').withText('Logout'))
        .typeText('#username', 'Akanksha')
        .click('#login')
        .selectText('#username', 8, 0)
        .pressKey('backspace')
        .typeText('#password', 'More@123')
        .click('#password', {
            caretPos: 0
        })
        .click('#login')
        .click('#login')
        .click(Selector('#content a').withText('Login with Google'))
        .typeText('#identifierId', 'akank')
        .click('#reset-link')
        .click('#email')
        .click('#reset')
        .typeText('#otp', '123456')
        .pressKey('enter')
        .pressKey('backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace')
        .pressKey('enter')
        .typeText('#otp', '123456')
        .pressKey('tab')
        .typeText('#password', 'Akanksha@123')
        .pressKey('tab')
        .typeText('#repeat', 'Akanksha@123')
        .pressKey('enter')
        .click('header div a span img')
});