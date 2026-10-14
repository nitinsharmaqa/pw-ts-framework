import { test, expect } from '@playwright/test';

test('post 1 returns 200 and a title', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.title).toBeTruthy();
});

test('create post returns 201 and the title', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'qa return',
      body: 'playwright api check',
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.title).toBe('qa return');
});