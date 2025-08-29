import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);

if (typeof localStorage !== 'undefined') {
	isLoggedIn.set(localStorage.getItem('isLoggedIn') === 'true');
}

isLoggedIn.subscribe((value) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('isLoggedIn', String(value));
	}
});
