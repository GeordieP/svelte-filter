<script>
	import useFilters from "./useFilters.js";
	import AddItemForm from "./AddItemForm.svelte";
	import SearchBar from "./SearchBar.svelte";
	import StartsWith from "./StartsWith.svelte";

	let items = ["first", "second", "third", "fourth"];
	const addItem = i => {
		items = [...items, i];
	}

	const { addOrUpdateFilter, applyFilters } = useFilters();
	$: filteredItems = $applyFilters(items);
</script>

<h3>Add New List Item</h3>
<AddItemForm {addItem} />

<h3>Filter Settings</h3>
<SearchBar {addOrUpdateFilter} />

<h4>Starts With Filter</h4>
<StartsWith {addOrUpdateFilter} />

<h3>Filtered List</h3>
<ul>
	{#each filteredItems as i}
		<li>{i}</li>
	{/each}
</ul>
