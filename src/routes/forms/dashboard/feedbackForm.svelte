<script>
  import { createForm } from 'svelte-forms-lib';
  import { z } from 'zod';

  const schema = z.object({
    email: z.string().email(),
    message: z.string().min(10)
  });

  const { form, handleSubmit, errors } = createForm({
    initialValues: { email: '', message: '' },
    validate: (values) => {
      const result = schema.safeParse(values);
      if (!result.success) {
        return result.error.flatten().fieldErrors;
      }
    },
    onSubmit: (values) => {
      console.log('Submitted', values);
    }
  });
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>Email</label>
  <input name="email" bind:value={$form.email} />
  {#if errors.email}<p>{errors.email}</p>{/if}

  <label>Message</label>
  <textarea name="message" bind:value={$form.message}></textarea>
  {#if errors.message}<p>{errors.message}</p>{/if}

  <button type="submit">Submit Feedback</button>
</form>