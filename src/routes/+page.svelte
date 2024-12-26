<script lang="ts">
  import { testData, userData } from "$lib";
  import Education from "../components/Education.svelte";
  import Experience from "../components/Experience.svelte";
  import Headline from "../components/Headline.svelte";
  import Skills from "../components/Skills.svelte";
</script>

<header></header>
<main>
  <Headline
    name={userData.headline.name}
    contacts={[
      { name: "Website", value: userData.headline.contact.website },
      { name: "Email", value: userData.headline.contact.email },
      { name: "Phone", value: userData.headline.contact.phone },
    ]}
  />
  <hr />
  <Experience experiences={userData.experiennces} />
  <hr />
  <Education education={userData.education} />
  <hr />
  <Skills
    skillsByCatagory={[
      {
        catagory: "Programming Languages",
        skills: userData["programming-languages"],
      },
      {
        catagory: "Software Technologies",
        skills: userData["software-technologies"],
      },
      {
        catagory: "Project Management",
        skills: userData["project-management"],
      },
    ]}
  />
</main>
<footer></footer>
