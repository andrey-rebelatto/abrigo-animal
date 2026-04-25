import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/sobre/index.html', 'utf-8');

test('shows founding year 2001', () => {
  assert.ok(html.includes('2001'));
});

test('shows current animal count', () => {
  assert.ok(html.includes('320'));
});

test('mentions castração as key program', () => {
  assert.ok(html.toLowerCase().includes('castração') || html.toLowerCase().includes('castrar'));
});

test('mentions Brechó as funding source', () => {
  assert.ok(html.includes('Brechó') || html.includes('brechó'));
});

test('mentions Cãofilhado program', () => {
  assert.ok(html.includes('Cãofilhado') || html.includes('cãofilhado'));
});

test('has link to ajudar', () => {
  assert.ok(html.includes('href="/ajudar"'));
});

test('has CNPJ', () => {
  assert.ok(html.includes('04.603.573/0001-60'));
});

test('page title identifies the organization and city', () => {
  assert.ok(html.includes('Joinville'));
});

test('main heading is present', () => {
  assert.ok(html.includes('<h1'));
});
