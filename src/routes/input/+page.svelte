<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy, createEventDispatcher } from 'svelte';

  let name = '';
  let agree = false;
  let selected = 'Option1';
  let inputRef;
  const dispatch = createEventDispatcher();

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted: ${name}, Agree: ${agree}, Selected: ${selected}`);
  }

  onMount(() => {
    console.log('Component mounted');
  });

  beforeUpdate(() => {
    console.log('Before update');
  });

  afterUpdate(() => {
    console.log('After update');
  });

  onDestroy(() => {
    console.log('Component destroyed');
  });

  function forwardClick() {
    dispatch('click');
  }
</script>

<form on:submit={handleSubmit}>
  <label>
    Name:
    <input bind:value={name} on:input={() => console.log('Input changed:', name)} />
  </label>

  <label class="checkbox">
    <input type="checkbox" bind:checked={agree} />
    I agree
  </label>

  <label>
    Choose:
    <select bind:value={selected}>
      <option>Option1</option>
      <option>Option2</option>
    </select>
  </label>

  <button type="submit">Submit</button>
</form>

<div class="extra-actions">
  <button on:click={forwardClick}>Forward Click</button>
  <input bind:this={inputRef} placeholder="Focus me with JS" />
  <button on:click={() => inputRef.focus()}>Focus Input</button>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    padding: 2rem;
    margin: 2rem auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 0.95rem;
    color: #333;
  }

  input[type="text"],
  input[type="checkbox"],
  select {
    margin-top: 0.4rem;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #bbb;
  }

  .checkbox {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    padding: 0.6rem 1rem;
    background-color: #0057ff;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #0041cc;
  }

  .extra-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .extra-actions input {
    width: 60%;
    padding: 0.5rem;
  }
</style>
