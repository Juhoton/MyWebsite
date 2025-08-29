<script>
    let props = $props();
    let job = props.info
    // {role:"", place:"", time:"", notes: ["",""]}
</script>

<div class="card">
    <p class="font-bold mb-2">{job.role}</p>
    <p class="">{job.place}</p>
    <p class="italic mb-1">{job.time}</p>
    <ul class="list-inside list-disc space-y-0">
        {#each job.notes as note}
            <li>{note}</li>
        {/each}
    </ul>
</div>