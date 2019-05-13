import { writable, derived } from "svelte/store";

const makeFilterReducer = $filters => items =>
  Object.values($filters).reduce((ac, f) => ac.filter(f), items);

export default function useFilters(initialFilters = {}) {
  const filters = writable(initialFilters);
  const apply = derived(filters, makeFilterReducer, items => items);
  const update = (name, f) => filters.update(old => ({ ...old, [name]: f }));

  return { addOrUpdateFilter: update, applyFilters: apply };
}
