<script lang="ts">
  import type { ExperienceType } from "$lib";
  type Experience = (typeof experiences)[number];
  type Role = Experience["roles"][number];
  const {
    experiences,
  }: {
    experiences: ExperienceType;
  } = $props();
</script>

{#snippet experienceBlock(role: Role, company: Experience["company"])}
  <div>
    <hgroup>
      <h3>
        <span class="left">{role.title}</span>
        <span class="right"
          >{role.start.year}—{role.end?.year ?? "Present"}</span
        >
      </h3>
      <p>{company}</p>
      <ul>
        {#each role.accomplishments as accomplishment}
          <li>{accomplishment}</li>
        {/each}
      </ul>
    </hgroup>
  </div>
{/snippet}

<section id="experiences">
  <h2>Work Experience</h2>
  {#each experiences as exp}
    {#each exp.roles as role}
      {@render experienceBlock(role, exp.company)}
    {/each}
  {/each}
</section>
