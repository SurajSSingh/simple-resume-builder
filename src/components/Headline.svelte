<script lang="ts">
  const { name, contacts }: { name: string; contacts: string[] } = $props();
</script>

<section id="headline">
  <hgroup>
    <h1>{name}</h1>
    <p>{contacts.join(" | ")}</p>
  </hgroup>
</section>
