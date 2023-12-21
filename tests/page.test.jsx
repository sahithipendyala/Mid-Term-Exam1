const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.title();
  expect(title).toBe('Page 1 - Mid Term exam');
});
test('Facebook icon is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.fa-facebook-f');
  expect(isVisible).toBe(false);
});

test('LinkedIn icon is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.fa-linkedin-in');
  expect(isVisible).toBe(false);
});

test('Twitter icon is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.fa-twitter');
  expect(isVisible).toBe(false);
});

test('Github icon is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.fa-github');
  expect(isVisible).toBe(false);
});

test('Email link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.contact .underline');
  expect(isVisible).toBe(true);
});

test('Phone number is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.contact p:not(.underline)');
  expect(isVisible).toBe(true);
});

test('Connect with me button is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.btn');
  expect(isVisible).toBe(true);
});

test('Profile image is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.img img');
  expect(isVisible).toBe(true);
});

test('Software Developer title is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.bottom.bold-h1');
  expect(isVisible).toBe(true);
});

test('Download CV button is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.right .btn');
  expect(isVisible).toBe(true);
});

test('About Me navigation link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.custom-nav');
  expect(isVisible).toBe(true);
});

test('Skills navigation link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.custom-nav');
  expect(isVisible).toBe(true);
});

test('Projects navigation link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.custom-nav');
  expect(isVisible).toBe(true);
});

test('Education navigation link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.custom-nav');
  expect(isVisible).toBe(true);
});

test('Certifications navigation link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.custom-nav');
  expect(isVisible).toBe(true);
});

test('About Me section is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.ab');
  expect(isVisible).toBe(true);
});

test('Skills section is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.skills');
  expect(isVisible).toBe(true);
});

test('Projects section is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.projects');
  expect(isVisible).toBe(true);
});

test('Education section is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.education');
  expect(isVisible).toBe(true);
});

test('Certifications section is visible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const isVisible = await page.isVisible('.certifications');
  expect(isVisible).toBe(true);
});