/// <reference types="cypress" />

describe('My app', () => {
    it('should look correct', async () => {
        await browser.url('http://localhost:3000/');
        await browser.execute('/*@visual.init*/', 'My React App');
        await browser.execute('/*@visual.snapshot*/', 'Home Page');

        const result = await browser.execute('/*@visual.end*/');
        expect(result.message).toBeNull();
    });
});
