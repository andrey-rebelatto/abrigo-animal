import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf-8');

test('hamburger button has aria-controls pointing to mobile menu', () => {
  assert.ok(html.includes('aria-controls="mobile-menu"'));
});

test('mobile menu panel exists in the DOM', () => {
  assert.ok(html.includes('id="mobile-menu"'));
});

test('mobile menu contains link to adote', () => {
  const menuStart = html.indexOf('id="mobile-menu"');
  const menuEnd = html.indexOf('</nav>', menuStart);
  const menuHtml = html.slice(menuStart, menuEnd);
  assert.ok(menuHtml.includes('href="/adote"'));
});

test('mobile menu contains link to sobre', () => {
  const menuStart = html.indexOf('id="mobile-menu"');
  const menuEnd = html.indexOf('</nav>', menuStart);
  const menuHtml = html.slice(menuStart, menuEnd);
  assert.ok(menuHtml.includes('href="/sobre"'));
});

test('mobile menu contains link to caofilhado', () => {
  const menuStart = html.indexOf('id="mobile-menu"');
  const menuEnd = html.indexOf('</nav>', menuStart);
  const menuHtml = html.slice(menuStart, menuEnd);
  assert.ok(menuHtml.includes('href="/caofilhado"'));
});

test('mobile menu contains link to contato', () => {
  const menuStart = html.indexOf('id="mobile-menu"');
  const menuEnd = html.indexOf('</nav>', menuStart);
  const menuHtml = html.slice(menuStart, menuEnd);
  assert.ok(menuHtml.includes('href="/contato"'));
});

test('mobile menu contains link to ajudar', () => {
  const menuStart = html.indexOf('id="mobile-menu"');
  const menuEnd = html.indexOf('</nav>', menuStart);
  const menuHtml = html.slice(menuStart, menuEnd);
  assert.ok(menuHtml.includes('href="/ajudar"'));
});
