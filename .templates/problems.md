## Available Scripts

In the project directory, you can run:

### `npm run lint`
Runs the linter.
###  `npm run create-readme`
Generates the README.md.
## Problems and Solutions
{{#each sections}}

### {{makeTitle title}}
{{#each categories}}
#### {{title}}
| Difficulty | Problem | Solution |
| --- | --- | --- |
{{#each problems}}
| {{difficulty}} | [{{title}}]({{link}}) | [Solution]({{path}})|
{{/each}}
{{/each}}

**[⬆ back to top](#Table-of-contents)**

---
{{/each}}

