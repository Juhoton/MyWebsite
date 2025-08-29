<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    import { isLoggedIn } from '$lib/stores/auth';

	const login = (e) => {
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
		if (data.username === "test" && data.password === "1234") {
			isLoggedIn.set(true);
	}}
</script>

<div class="grow grid grid-cols-1 place-items-center">
    <form onsubmit={login} class="flex flex-col gap-4">
        <label class="label">
        <span class="label-text">Username:</span>
        <input class="input preset-outlined-primary-50-950" type="text" placeholder="" name="username"/>
        </label>

        <label class="label">
        <span class="label-text">Password:</span>
        <input class="input preset-outlined-primary-50-950" type="text" placeholder="" name="password"/>
        </label>
        <input type="submit" value="Submit" class="btn preset-filled-primary-500">
    </form>
</div>