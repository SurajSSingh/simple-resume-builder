<script lang="ts">
  import type { EducationType } from "$lib";
  const education: EducationType = $props();
</script>

<section id="education">
  <h2>Education</h2>
  {#each education as edu}
    <hgroup>
      <h3>{edu.org.full}</h3>
      {#each edu.degrees as degree, idx}
        {@const formattedDegree =
          typeof degree === "string"
            ? degree
            : `${degree.name}, ${degree.rank}`}
        <p>
          <span class="left">{formattedDegree}</span>
          {#if idx === 0}
            <span class="right">{edu.start.year}—{edu.grad.year}</span>
          {/if}
        </p>
      {/each}
    </hgroup>
  {/each}
</section>
