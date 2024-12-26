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

<style global>
  /* Define Page Properties */
  @page {
    size: letter portrait;
  }

  /* Define Variables */
  :root {
    --h1-font-size: 22px;
    --h2-font-size: 18px;
    --h3-font-size: 16px;
    --subheading-font-size: 15px;
    --body-font-size: 14px;
  }

  * {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0%;
  }

  p,
  li {
    font-size: var(--body-font-size, 12px);
  }

  hr {
    margin: 0.5em 0em;
  }

  main {
    margin: 0.5in 0.5in;
  }

  @media print {
    header,
    footer {
      display: none;
    }
  }
</style>
