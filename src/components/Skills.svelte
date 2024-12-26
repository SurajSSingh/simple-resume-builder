<script lang="ts">
  import { json } from "@sveltejs/kit";

  const {
    skillsByCatagory = [],
  }: {
    skillsByCatagory: { catagory: string; skills: string[] }[];
  } = $props();
</script>

{#snippet skill_block(title: string, array: string[])}
  <div>
    <em>{title}: </em>
    <span>{array.join(", ")}</span>
  </div>
{/snippet}

<section id="skills">
  <h2>Skills</h2>
  <hr />
  {#each skillsByCatagory as skillData}
    {@render skill_block(skillData.catagory, skillData.skills ?? [])}
  {/each}
</section>

<style>
  h2 {
    margin: 0%;
    text-align: center;
    font-size: var(--h2-font-size);
  }
  div {
    font-size: var(--body-font-size, 12px);
    margin: 0.5em;
    em {
      float: left;
      padding-inline-end: 1em;
    }
    text-align: left;
  }
</style>
