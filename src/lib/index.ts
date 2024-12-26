// place files you want to import through the `$lib` alias in this folder.

import test from "./private.json" with { type: "json" };

import staticData from "../private/static.json";
import skillsData from "../private/dyanmic/skills.json";
import expData from "../private/dyanmic/experience.json";

export type EducationType = typeof staticData.education;
export type ExperienceType = typeof expData;

export const testData = test;
export const userData = { ...staticData, ...skillsData, experiennces: expData };
