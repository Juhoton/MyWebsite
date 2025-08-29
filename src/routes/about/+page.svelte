<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
</script>

<div class="grid-cols-1">

    <div class="flex flex-col gap-6 max-w-2xl">

        <div>
            <img src="cv_pic.png" alt="cv pic" class="float-left rounded-sm mr-6 w-auto h-60">

            <p class="">
                Hey! I'm Juho Nykänen, 25 year old student living in Turku.  I study Information and communication technology at the university of Turku.
            </p>
        </div>

        <div>
            <p class="h6 mb-2">
                Current plans:
            </p>
            <p>
                I'm currently completing my last year of Master's degree, in which I plan to graduate in may/June 2026. I'm looking for Master's thesis opportunities as well. During my studies I'm available for part time/freelancer work, after I'm looking for a full-time position.
            </p>
            
        </div>

        <div>
            <p class="h6">
                Hobbies/freetime:
            </p>
            <ul class="list-inside list-disc space-y-0">
                <li>
                    Boardgames
                </li>
                <li>
                    Videogames
                </li>
                <li>
                    Beach volleyball
                </li>
            </ul>
        </div>

    </div>
</div>
