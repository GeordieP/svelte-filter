<script>
  export let addItem;

  let newItemText = "";

  const addAndClear = () => {
    addItem(newItemText);
    newItemText = "";
  }
</script>

<input type="text" bind:value={newItemText} placeholder="Item Text" />
<button on:click={addAndClear} title="Add">&plus;</button>
