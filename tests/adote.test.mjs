import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync('dist/adote/index.html', 'utf-8');

test('page has h1 heading', () => {
  assert.ok(html.includes('<h1'));
});

test('minimum age requirement is communicated', () => {
  assert.ok(html.includes('18'));
});

test('secured walled property requirement is communicated', () => {
  const lower = html.toLowerCase();
  assert.ok(lower.includes('cercado') || lower.includes('murado') || lower.includes('grades'));
});

test('cat screen protection requirement is communicated', () => {
  assert.ok(html.toLowerCase().includes('tela'));
});

test('RG document is listed', () => {
  assert.ok(html.includes('RG'));
});

test('CNH document is listed', () => {
  assert.ok(html.includes('CNH'));
});

test('CPF document is listed', () => {
  assert.ok(html.includes('CPF'));
});

test('proof of residence is listed', () => {
  const lower = html.toLowerCase();
  assert.ok(lower.includes('comprovante') || lower.includes('residência'));
});

test('responsibility message conveys life adoption', () => {
  assert.ok(html.includes('VIDA') || html.includes('vida'));
});

test('castration obligation is mentioned', () => {
  const lower = html.toLowerCase();
  assert.ok(lower.includes('castração') || lower.includes('castrar') || lower.includes('castrad'));
});

test('vaccination obligation is mentioned', () => {
  assert.ok(html.toLowerCase().includes('vacin'));
});

test('deworming obligation is mentioned', () => {
  assert.ok(html.toLowerCase().includes('vermifug'));
});

test('CTA links to contato page', () => {
  assert.ok(html.includes('href="/contato"'));
});
