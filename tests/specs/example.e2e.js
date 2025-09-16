describe('Aflores Construction Homepage Test', () => {
  it('should open the homepage and check the title', async () => {
    // Navigate to your website
    await browser.url('https://www.afloresconstruction.com/');

    // Get page title
    const title = await browser.getTitle();
    console.log('Page title is: ' + title);

    // Simple assertion (checks title contains a keyword)
    expect(title).toContain('Aflores Construction'); 
  });
});
