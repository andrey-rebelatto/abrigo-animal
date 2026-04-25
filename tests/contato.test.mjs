import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/contato/index.html', 'utf-8');

test('has Instagram link', () => {
  assert.ok(html.includes('https://www.instagram.com/abrigoanimaldejoinville/'));
});

test('has Facebook link', () => {
  assert.ok(html.includes('https://www.facebook.com/abrigoanimaldejoinville/'));
});

test('shows opening hours', () => {
  assert.ok(html.includes('9h'));
  assert.ok(html.includes('17h'));
  assert.ok(html.includes('Domingo'));
});

test('shows address', () => {
  assert.ok(html.includes('Mário Bächtold'));
});

test('has Google Maps embed', () => {
  assert.ok(html.includes('maps.google.com') || html.includes('google.com/maps'));
});
