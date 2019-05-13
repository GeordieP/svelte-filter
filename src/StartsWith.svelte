<script>
  export let addOrUpdateFilter;
  let letter = "";

  $: if (letter.length > 0) {
    addOrUpdateFilter("startsWith", i => i[0].toLowerCase() === letter.toLowerCase());
  } else {
    // do removal this hacky way because we don't implement a removeFilter() in the demo
    addOrUpdateFilter("startsWith", i => i);
  }
</script>

<style>
  .wrap { display: flex; }
  .wrap label { margin: 0 10px 0 10px; }
</style>

<div class="wrap">
  <button on:click={() => letter = ""} title="Clear">&times;</button>

  <label>
    <input type="radio" bind:group={letter} value="f" />
    Starts with F
  </label>

  <label>
    <input type="radio" bind:group={letter} value="t" />
    Starts with T
  </label>

  <label>
    <input type="radio" bind:group={letter} value="a" />
    Starts with A
  </label>
</div>
