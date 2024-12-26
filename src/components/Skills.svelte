<script lang="ts">
  const { programmingLangs }: { programmingLangs: string[] } = $props();
</script>

<section id="skills">
  <h2>Skills</h2>
  <h3>Programming Languages</h3>
  <ul>
    {#each programmingLangs as pLang}
      <li>{pLang}</li>
    {/each}
  </ul>
</section>
