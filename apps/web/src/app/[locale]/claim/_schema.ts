import { z } from 'zod';

export const claimFormSchema = z.object({
  code: z
    .string()
    .min(10, {
      message: 'Token must be at least 10 characters long',
    })
    .max(10),
});
