<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    import { isLoggedIn } from '$lib/stores/auth';
</script>


{#if $isLoggedIn}
<div class="grow grid-cols-1 content-center">
    <img src="capy.jpg" alt="Capybara">
</div>
{:else}
{/if}
