<script>
    import WorkItem from "$lib/components/workItem.svelte";
    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    // {role:"", place:"", time:"", notes: ["",""]}
    const jobList = [
        {role:"System Installer", place:"Finnish Defence Forces C5 Agency", time:"09/2018 - 12/2019", 
            notes: [
                "Worked there for six months after rookie season, then continued as a contract soldier for an additional nine months.",
                "Installed CAT and optical fiber cables between telecommunications cabinets.",
                "Performed fiber welding and made CAT connectors."]
        },
        {role:"Carpenter's Assistant", place:"Quick-Kaluste Oy", time:"07/2017 - 08/2017",
            notes: [
                "Built and assembled kitchen furniture, including tables, cabinets, and boxes.",
                "Assisted with various tasks, such as equipment installation, dismantling wall coverings, wall painting, etc.",
                "Cleaned up the worksite at the end of the day"]
        },
        {role:"Computer installer", place:"Raisio's Ekotori", time:"10/2016 - 12/2016", 
            notes: [
                "Put old machines up for sale",
                "Tested various electronic devices",
                "Diagnosed and fixed any issues with the devices"]
        }]
</script>

<div class="flex gap-10">
    <div class="max-w-140">
        <p class="h6">
            Work experience:
        </p>
        <ul class="list-inside list-none space-y-2 mt-2">
            {#each jobList as job}
                <hr class="hr"/>
                <li>
                    <WorkItem info={job}/>
                </li>

            {/each}
        </ul>
    </div>

    <div class="flex flex-col gap-3">
        <div>
            <p class="h6 mb-1">Programming skills:</p>
            <p class="font-semibold italic">Intermediate</p>
            <p>Git</p>
            <p class="font-semibold italic">Beginner</p>
            <p>C# | JavaScript | React | Python | Java</p>
        </div>
        <hr class="hr"/>
        <div>
            <p class="h6">IT Skills:</p>
            <ul class="list-inside list-disc space-y-0">
                <li>MS Office</li>
                <li>Power BI</li>
                <li>Figma</li>
            </ul>
        </div>
        <hr class="hr"/>
        <div>
            <p class="h6">Language Skills:</p>
            <ul class="list-inside list-disc space-y-0">
                <li>Finnish:native</li>
                <li>English:fluent</li>
            </ul>
        </div>
    </div>

</div>