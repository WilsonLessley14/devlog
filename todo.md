# TODOs

---

## LLM/Agent Directives

- When asked to add a TODO, create a new item in the format below, referencing the relevant file, lines, and context if provided.
- When asked for TODOs relevant to a file or area, search for TODOs whose **File** or **Tags** fields match the query.
- When a user highlights text and asks to add a TODO, include the quoted context in the **Context** field.
- Always keep TODO items in this structured format. Do not remove metadata fields.
- Mark completed TODOs with [x] and move them to an optional "Completed" section if desired.

---

## TODO Item Template

### [ ] Brief description of the task

- **ID:** TXXX
- **File:** path/to/file.ext[:lines]
- **Context:**
  ```
  (Optional code/text snippet)
  ```
- **Tags:** tag1, tag2, ...
- **Related:** (comma-separated TODO IDs)

---

## Active TODOs

### [ ] Showcase projects

- **ID:** T003
- **File:** src/routes/projects/
- **Tags:** showcase, portfolio

---

### [ ] Add playable POC games

- **ID:** T004
- **File:** src/routes/games/
- **Tags:** games, poc

---

### [ ] Deploy site

- **ID:** T005
- **File:** (project root)
- **Tags:** deploy, production

---

### [ ] Improve markdown styling

- **ID:** T006
- **File:** src/routes/blog/
- **Tags:** markdown, styling

---

### [ ] Create widget for cat gallery to be used on home page

- **ID:** T007
- **File:** src/routes/cats/
- **Tags:** widget, gallery, home

---

### [ ] Create widget for contributions to be used on home page

- **ID:** T008
- **File:** src/routes/contributions/
- **Tags:** widget, contributions, home

---

### [ ] Create widget for blog to be used on home page

- **ID:** T009
- **File:** src/routes/blog/
- **Tags:** widget, blog, home

---

### [ ] Improve contributions with contribution density visualization

- **ID:** T010
- **File:** src/routes/contributions/
- **Tags:** contributions, visualization, density

---

## Completed

### [x] Set up Svelte frontend

- **ID:** T001
- **File:** src/app.svelte
- **Tags:** svelte, frontend
- **Related:**
- **Completed:** 2025-04-27

---

### [x] Add markdown-supported blog post functionality

- **ID:** T002
- **File:** src/routes/blog/
- **Tags:** markdown, blog
- **Completed:** 2025-04-27

---
