# Spawning Agents Skill

Best practices for spawning Code Agents to avoid wasted tokens and redundant work.

## Pre-Spawn Checklist

**BEFORE spawning any agent, verify:**

1. **Work doesn't already exist** - Quick grep/glob to check if the files or features already exist
2. **Previous agent didn't already do it** - Review summaries from earlier agents in the session
3. **Task is well-scoped** - Agent should have a clear, bounded objective

```bash
# Examples of quick checks before spawning
grep -l "CardSection" src/routes/design-system/+page.svelte  # Does section exist?
ls src/stories/Card.stories.svelte 2>/dev/null               # Does file exist?
```

## Lessons Learned

### Redundant Verification (Token Waste)

An agent was spawned to "add Card examples to showcase page" but the previous Card component agent had already done this. The new agent spent ~38k tokens reading files, starting dev server, and taking screenshots only to conclude "already complete."

**Prevention**: Before spawning an "add X to Y" agent, do a 5-second check:

- Does X already exist in Y?
- Did a previous agent's summary mention completing this?

## Agent Prompt Guidelines

### Be Specific About Scope

Bad: "Add documentation for the Card component"
Good: "Create /src/stories/Card.stories.svelte with stories for content and code variants"

### Include Exit Conditions

Add to prompts: "If the work already exists, report back immediately without modifications."

### Limit Exploration

For targeted tasks, specify exactly which files to read rather than "explore the codebase."

## Token-Efficient Patterns

### For "Create New File" Tasks

```
1. Check if file exists
2. If exists, report and stop
3. If not, create it
```

### For "Add Section to Existing File" Tasks

```
1. Grep for section marker/heading
2. If found, report and stop
3. If not, add the section
```

### For "Fix Bug" Tasks

```
1. Read the specific file
2. Make the fix
3. Validate
```

No need to explore unrelated files.

## Spawning Template

When spawning agents, use this mental checklist:

- [ ] Did I verify the work isn't already done?
- [ ] Is the task specific enough?
- [ ] Did I include "if already exists, report back" instruction?
- [ ] Did I limit the files the agent should read?
- [ ] Is Browser MCP verification actually needed, or is `just check/test` sufficient?
