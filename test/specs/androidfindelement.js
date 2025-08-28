describe('Android Find Element', () => {
    it('should find an element by its accessibility id', async () => {
        const element = await $('~App');
        await element.click();

        const actionbar = await $('~Action Bar');
        await expect(actionbar).toBeExisting();

    });
});