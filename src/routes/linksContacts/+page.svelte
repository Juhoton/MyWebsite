<script>
    import { ExternalLinkIcon } from "@lucide/svelte";
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
</script>

<div class="grow grid-cols-1 content-center">
    <div class="grid grid-rows-2 place-items-center justify-self-center gap-6">
        <div class="flex gap-6">
            <a href="https://github.com/Juhoton" target="_blank" class="btn preset-filled-primary-500">
                <span>Github</span>
                <ExternalLinkIcon />
            </a>
            <a href="https://www.linkedin.com/in/juho-nyk%C3%A4nen/" target="_blank" class="btn preset-filled-primary-500">
                <span>LinkedIn</span>
                <ExternalLinkIcon />
            </a>
        </div>

        <div>
            <p class="text-center">You can reach me at:</p>
            <a href="mailto:juho.k.nykanen@hotmail.com" 
            class="no-underline hover:underline">juho.k.nykanen@hotmail.com</a>
        </div>
    </div>
</div>
