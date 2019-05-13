<script>
  export let addOrUpdateFilter;
  let searchValue = "";
  $: addOrUpdateFilter("search", i => i.includes(searchValue));
</script>

<input type="text" bind:value={searchValue} placeholder="Search..." />
<button on:click={() => searchValue = ""} title="Clear Search">&times;</button>
