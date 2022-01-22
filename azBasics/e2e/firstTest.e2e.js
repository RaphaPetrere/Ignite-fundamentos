describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check register new skill', async () => {
    const inputNewSkill = await element(by.id('input-new'));
    const buttonAddSkill = await element(by.id('button-add'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native');

    await buttonAddSkill.tap();
    await expect(element(by.text('React Native'))).toBeVisible();
  });
});
