import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const animals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/animals' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      species: z.enum(['dog', 'cat', 'other']),
      sex: z.enum(['male', 'female']),
      ageMonths: z.number().int().nonnegative(),
      size: z.enum(['small', 'medium', 'large']),
      neutered: z.boolean(),
      vaccinated: z.boolean(),
      photo: image(),
      photoAlt: z.string(),
      intakeDate: z.coerce.date(),
      status: z.enum(['available', 'adopted', 'sponsored', 'under-care']).default('available'),
      sponsorshipOpen: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { animals, pages };
