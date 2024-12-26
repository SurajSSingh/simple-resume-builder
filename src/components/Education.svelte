<script lang="ts">
  import type { EducationType } from "$lib";
  import { json } from "@sveltejs/kit";
  const {
    education,
    degreeSeparator = " | ",
  }: { education: EducationType; degreeSeparator?: string } = $props();
</script>

<section id="education">
  <h2>Education</h2>
  <hr />
  {#each education as edu}
    <hgroup>
      <h3>
        {edu.degrees
          .map((degree) =>
            typeof degree === "string"
              ? degree
              : `${degree.name}, ${degree.rank}`
          )
          .join(degreeSeparator)}
        <span class="right">{edu.start.year}—{edu.grad.year}</span>
      </h3>
      <p>
        {edu.org.full}
      </p>
    </hgroup>
  {/each}
</section>

<style>
  h2 {
    margin: 0%;
    text-align: center;
    font-size: var(--h2-font-size);
  }

  hgroup {
    margin: 0.5em 0.5em;
  }

  h3 {
    margin: 0.25em 0em;
    font-size: var(--h3-font-size);
    display: flex;
    .left {
      flex: auto;
      text-align: left;
    }
    .right {
      flex: content;
      flex-shrink: 2;
      text-align: right;
    }
  }

  p {
    font-size: var(--body-font-size, 12px);
    margin: 0%;
  }
</style>
