const testData = require('../data/testData.json');

describe('User SignUp', () => {

    it('Sign up User Account', async () => {
        // Debug: Log the test data to make sure it's loaded
        console.log('Test Data loaded:', JSON.stringify(testData, null, 2));
        console.log('User data:', testData.users[0]);

        const profilepage = await $('~Profile\nTab 5 of 5');
        await profilepage.click();

        const signin = await $('~Sign In');
        await signin.click();

        const signup = await $('~Sign Up');
        await signup.click();

        // Get the user data
        const userData = testData.users[0];

        // Fill in the form fields
        const firstname = await $('~First Name');
        await firstname.setValue(userData.firstname);
        console.log(`Set firstname: ${userData.firstname}`);

        const lastname = await $('~Last Name');
        await lastname.setValue(userData.lastname);
        console.log(`Set lastname: ${userData.lastname}`);

        const username = await $('~User Name');
        await username.setValue(userData.username);
        console.log(`Set username: ${userData.username}`);

        const email = await $('~Email Address');
        await email.setValue(userData.email);
        console.log(`Set email: ${userData.email}`);

        const contactnumber = await $('~Contact Number');
        await contactnumber.setValue(userData.contactnumber);
        console.log(`Set contact number: ${userData.contactnumber}`);

        const password = await $('~Password');
        await password.setValue(userData.password);
        console.log(`Set password: ${userData.password}`);
    });
});