<script lang="ts">
  const {
    name,
    contacts,
    separator = " | ",
  }: {
    name: string;
    separator?: string;
    contacts: { name: string; value: string }[];
  } = $props();
</script>

<section id="headline">
  <hgroup>
    <h1>{name}</h1>
    <!-- TODO figure out where to use c.name -->
    <p>{contacts.map((c) => c.value).join(separator)}</p>
  </hgroup>
</section>

<style>
  hgroup {
    padding: 0em 1em;
    h1 {
      font-size: var(--h1-font-size);
      text-align: center;
      margin: 0.5em 0em;
    }
    p {
      font-size: var(--subheading-font-size);
      text-align: center;
      margin: 0.25em;
    }
  }
</style>
