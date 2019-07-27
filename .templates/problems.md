{{#each sections}}

## {{makeTitle title}}
{{#each categories}}
### {{title}}
| Difficulty | Problem | Solution |
| --- | --- | --- |
{{#each problems}}
| {{difficulty}} | [{{title}}]({{link}}) | [Solution]({{path}})|
{{/each}}
{{/each}}
{{/each}}

