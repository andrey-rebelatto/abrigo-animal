import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/caofilhado/index.html', 'utf-8');

test('page has h1 heading', () => {
  assert.ok(html.includes('<h1'));
});

test('project name Cãofilhado appears in the page', () => {
  assert.ok(html.toLowerCase().includes('cãofilhado'));
});

test('distinction between apadrinhamento and adoption is communicated', () => {
  const lower = html.toLowerCase();
  assert.ok(lower.includes('apadrinhar') || lower.includes('apadrinhamento'));
});

test('operating hours are stated', () => {
  assert.ok(html.includes('9h') || html.includes('9 h'));
  assert.ok(html.includes('17h') || html.includes('14h'));
});

test('days of operation are stated', () => {
  const lower = html.toLowerCase();
  assert.ok(lower.includes('segunda') || lower.includes('sábado'));
});

test('Ficha de Apadrinhamento is mentioned', () => {
  assert.ok(html.toLowerCase().includes('ficha'));
});

test('a download link for the form exists', () => {
  assert.ok(html.includes('ficha-apadrinhamento.pdf'));
});

test('instructions to deliver in person to the shelter are stated', () => {
  const lower = html.toLowerCase();
  assert.ok(lower.includes('entregar') || lower.includes('abrigo'));
});

test('there is a link to contato page', () => {
  assert.ok(html.includes('href="/contato"'));
});

test('warning about not delivering to unauthorized parties is present', () => {
  const lower = html.toLowerCase();
  assert.ok(lower.includes('terceiros') || lower.includes('apenas no abrigo'));
});
