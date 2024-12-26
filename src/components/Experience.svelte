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
    </hgroup>
    <p><strong>{company}</strong></p>
    <ul>
      {#each role.accomplishments as accomplishment}
        <li>{accomplishment}</li>
      {/each}
    </ul>
  </div>
{/snippet}

<section id="experiences">
  <h2>Work Experience</h2>
  <hr />
  {#each experiences as exp}
    {#each exp.roles as role}
      {@render experienceBlock(role, exp.company)}
    {/each}
  {/each}
</section>

<style>
  h2 {
    font-size: var(--h2-font-size);
    text-align: center;
    margin: 0%;
  }

  hgroup > h3 {
    margin: 0%;
    display: flex;
    font-size: var(--h3-font-size);
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
    margin: 0%;
    font-size: var(--body-font-size, 12px);
  }

  ul {
    margin: 0.25em 0em 0.5em;
    padding-inline-start: 1.5em;
    li {
      font-size: var(--body-font-size, 12px);
    }
  }
</style>
