# Code Agent Directive

## Purpose

This document defines the standard operating procedure for Code Agents spawned by the Meta Agent to implement tasks.

## Code Agent Responsibilities

When spawned to implement a task, Code Agents MUST:

### 1. Planning Phase

1. Read the task requirements (from Beads, user instructions, or context)
2. Explore the codebase to understand context
3. Create a brief implementation plan
4. If using Beads: Update status to `in_progress`

### 2. Implementation Phase

1. **Actually write the code** - Use Write/Edit tools to create/modify files
2. Follow project conventions (check for project documentation)
3. Implement all requirements
4. Ensure code is properly typed (if applicable)
5. Follow existing patterns and architecture in the codebase

### 3. Testing & Validation Phase

1. **Run tests** - Execute project test suite and fix failures
2. **Run build** - Ensure build succeeds
3. **Run linter** - Fix any linting errors
4. **Run type checker** - Fix any type errors (if applicable)
5. **For UI work**: Use Browser MCP to:
   - Start dev server
   - Open browser and navigate to the new feature
   - Take screenshots of the implementation
   - Verify functionality works as expected
   - Test responsive design (mobile/desktop views)
   - Test different themes/modes if applicable
   - Test different states (hover, active, disabled, loading, error, etc.)
   - Test edge cases and error handling

### 4. Completion Phase

1. Verify all requirements are met
2. Document any notable decisions or trade-offs
3. Report completion with:
   - Summary of what was implemented
   - Screenshots (for UI work)
   - Test results
   - Any issues encountered or limitations
4. Leave task status for Meta Agent to review and finalize

## Browser MCP Usage for UI Work

When implementing UI features, Code Agents MUST:

1. **Launch dev server** in the background
2. **Use Browser MCP** to:
   - Navigate to the implemented feature
   - Take before/after screenshots if modifying existing UI
   - Take screenshots of different states and variations
   - Test user interactions (clicks, forms, navigation, etc.)
   - Verify responsive behavior at different screen sizes
   - Test accessibility (keyboard navigation, screen reader compatibility)
   - Verify visual consistency across browsers if possible
3. **Document visual changes** with screenshots in the final report
4. **Test edge cases**: Empty states, loading states, error states, long content, etc.

## Example Code Agent Prompt Template

```
You are the Code Agent. Implement [TASK DESCRIPTION].

PROTOCOL:
1. Planning:
   - Understand requirements fully
   - Explore codebase for context
   - Identify files to create/modify
   - [IF USING BEADS] Update task status to in_progress

2. Implementation:
   - Write ALL code using Write/Edit tools
   - Follow project conventions and patterns
   - Ensure proper typing and error handling
   - Write clean, maintainable code

3. Testing & Validation:
   - Run test suite and fix failures
   - Run build and fix errors
   - Run linter and fix issues
   - Run type checker and fix errors
   - [IF UI WORK] Use Browser MCP:
     * Start dev server
     * Navigate to feature
     * Take comprehensive screenshots
     * Test all functionality
     * Test responsive design
     * Test different states/themes
     * Test edge cases

4. Completion:
   - Verify all requirements met
   - Report with:
     * Implementation summary
     * Screenshots (if UI)
     * Test results
     * Any issues or limitations
   - Leave task for Meta Agent review

CRITICAL: You must ACTUALLY IMPLEMENT the code, not just provide plans, proposals, or code snippets. Create and modify all necessary files to complete the task.
```

## Common Mistakes to Avoid

❌ **DON'T**: Just provide code snippets, plans, or proposals
✅ **DO**: Actually create/modify files with Write/Edit tools

❌ **DON'T**: Skip testing and validation steps
✅ **DO**: Run all tests and checks before reporting completion

❌ **DON'T**: Assume the task is complete without verification
✅ **DO**: Test thoroughly and document results

❌ **DON'T**: Implement without understanding requirements
✅ **DO**: Read requirements carefully and explore context first

❌ **DON'T**: Ignore UI testing for visual features
✅ **DO**: Use Browser MCP to verify and screenshot UI work

❌ **DON'T**: Leave broken tests or build errors
✅ **DO**: Fix all errors before reporting completion

❌ **DON'T**: Implement features that aren't requested
✅ **DO**: Stay focused on the specific requirements

## Meta Agent Responsibilities

The Meta Agent (coordinator) is responsible for:

1. **Pre-spawn verification** - Check if work already exists before spawning agents (see `.claude/skills/spawning-agents.md`)
2. Creating clear, detailed task descriptions
3. Spawning Code Agents with proper directives
4. Reviewing completed work
5. Managing task status and dependencies
6. Handling version control operations (commits, pushes)
7. Coordinating between multiple agents when needed

**IMPORTANT**: Before spawning any agent, do a quick check (grep/ls) to verify the work isn't already done. This prevents wasted tokens on redundant verification.

## Version Control Workflow

Code Agents should NOT:

- Create git commits
- Push to remote repositories
- Make version control decisions

The Meta Agent handles all version control operations after reviewing the Code Agent's work.

## Quality Standards

All code implemented by Code Agents must:

- Follow existing project conventions and style
- Be properly tested (unit tests, integration tests as appropriate)
- Build successfully without errors or warnings
- Pass all linting and type checking
- Include appropriate error handling
- Be documented where necessary (complex logic, public APIs, etc.)
- For UI: Be accessible, responsive, and visually consistent
