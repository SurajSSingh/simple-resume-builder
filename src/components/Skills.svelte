<script lang="ts">
  const {
    programmingLangs,
    skillsByCatagory = [],
  }: {
    programmingLangs?: string[];
    skillsByCatagory: { catagory: string; skills: string[] }[];
  } = $props();
</script>

{#snippet skill_block(title: string, array: string[])}
  <div>
    <h3>{title}</h3>
    <ul>
      {#each array as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
{/snippet}

<section id="skills">
  <h2>Skills</h2>
  {#each skillsByCatagory as skillData}
    {@render skill_block(skillData.catagory, skillData.skills ?? [])}
  {/each}
</section>
