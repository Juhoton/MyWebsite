import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);

// Load from localStorage when app starts
if (typeof localStorage !== 'undefined') {
	isLoggedIn.set(localStorage.getItem('isLoggedIn') === 'true');
}

// Keep localStorage in sync
isLoggedIn.subscribe((value) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('isLoggedIn', String(value));
	}
});
