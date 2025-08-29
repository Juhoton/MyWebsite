<script>
	import '../app.css';
	let { children } = $props();

	import { isLoggedIn } from '$lib/stores/auth';
	let loggedIn="Login";
</script>

<div class="grid grid-rows-[auto_1fr] min-h-screen">

	<header class="w-screen p-4 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center">

		<nav class="justify-self-center bg-surface-800 rounded-md p-2 px-3 space-x-4 col-span-1 sm:col-start-2">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/skills">Skills</a>
			<a href="/linksContacts">Links/Contact</a>
		</nav>

		<div class="justify-self-center sm:justify-self-end sm:col-start-3">
			{#if $isLoggedIn}
				<a href="/secret" class="btn bg-secondary-500" >secrets</a>
				<button
					class="btn bg-red-400"
					onclick={() => isLoggedIn.set(false)}>
					Logout
				</button>
			{:else}
				<a href="/login" class="btn bg-surface-300">
					Login
				</a>
			{/if}
		</div>

	</header>
	<main class="grid place-items-center">
		<div class="flex card p-8 preset-outlined-primary-500 w-fit h-fit min-w-1/3 min-h-2/4 place-self-center">
			{@render children()}
		</div>
	</main>

</div>