<script lang="ts">
  // TODO: Convert "../lib" to "$lib", but make sure it is type-checked
  import { testData } from "../lib";
  import Experience from "../lib/Experience.svelte";
  import Headline from "../lib/Headline.svelte";
  import Skills from "../lib/Skills.svelte";
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
