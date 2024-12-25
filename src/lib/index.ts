// place files you want to import through the `$lib` alias in this folder.

import test from "./private.json" with { type: "json" };

export let testData = test;
