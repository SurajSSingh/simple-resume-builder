<script lang="ts">
  import { testData, userData } from "$lib";
  import Experience from "../components/Experience.svelte";
  import Headline from "../components/Headline.svelte";
  import Skills from "../components/Skills.svelte";
</script>

<Headline
  name={testData.name}
  contacts={[
    testData.contact.website,
    testData.contact.linkedin,
    testData.contact.github,
  ]}
/>
<hr />
<Experience experiences={testData.experience} />
<hr />
<Skills programmingLangs={testData["programming-languages"]} />
