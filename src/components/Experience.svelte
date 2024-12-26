<script lang="ts">
  const {
    experiences,
  }: {
    experiences: {
      company: string;
      title: string;
      start: string;
      end?: string;
    }[];
  } = $props();
</script>

<section id="experience">
  <h2>Work Experience</h2>
  {#each experiences as exp}
    <div>
      <h3>{exp.title} @ {exp.company}: {exp.start}—{exp.end ?? "Present"}</h3>
    </div>
  {/each}
</section>
