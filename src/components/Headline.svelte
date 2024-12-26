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
