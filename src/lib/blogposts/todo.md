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
- **Context:** <p>
  I want an endpoint and widget that show off a randomly selected project. A "project" in this scenario can be a github repo or sub-repo, where a readme is grabbed and parsed to extract a title, description, and image (this requires some standardization of my project readmes). The other option is showing off a game from this blogs POC games endpoint. eventually I would like the showcase widget to include a little playable version of the game, but at first just an image, description, title and link to the games own playable page is sufficient.

The end goal is to have a showcase widget that can be used on the home page to show off a random project or game. an MVP would be a new route that shows off the described info, and uses a component to display it (with the consideration that we will later turn that component into a widget for the home page).

</p>
**Related:** T011, T012

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

### [ ] Create widget component for homepage

- **ID:** T011
- **File:** src/routes/home/
- **Tags:** widget, home
- **Context:** <p>
  Create a generalized component widget for the home page. This widget should accept a svelte component that it will render. The widget will also have a modular layout system, that allows the same widget component to be used for many different sized widgets.

This widget component will be a wrapper that will handle the layout, and provide the svelte component with the necessary props to render itself.
The component being rendered as a widget will be responsible for its own styling, and async/external requests, and should be designed to be used in a widget context

the product goal is to have a genarlized widget component that lets my show off the different endpoints that I'm creating. Currently I have a showcase widget, a cat gallery widget, a contributions widget, and a blog widget. I want to be able to use the same widget component for all of these, and be able to easily add new widgets to the home page.

</p>
**Related:** T012, T013, T014, T015

---

### [ ] Create widget for showcase

- **ID:** T012
- **File:** src/routes/showcase/
- **Tags:** widget, showcase
- **Context:** <p>
Create a widget for the showcase endpoint. This widget should be able to show off a random project or game.
</p>
**Related:** T011

---

### [ ] Create widget for cat gallery

- **ID:** T013
- **File:** src/routes/cats/
- **Tags:** widget, cats
- **Context:** <p>
Create a widget for the cat gallery endpoint. This widget should be able to show off a random cat.
</p>
**Related:** T011

---

### [ ] Create widget for contributions

- **ID:** T014
- **File:** src/routes/contributions/
- **Tags:** widget, contributions
- **Context:** <p>
Create a widget for the contributions endpoint. This widget should be able to show off a random contribution.
</p>
**Related:** T011

---

### [ ] Create widget for blog

- **ID:** T015
- **File:** src/routes/blog/
- **Tags:** widget, blog
- **Context:** <p>
Create a widget for the blog endpoint. This widget should be able to show off a random blog post.
</p>
**Related:** T011

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

### [x] Add playable POC games

- **ID:** T004
- **File:** src/routes/games/
- **Tags:** games, poc
- **Completed:** 2025-04-27

---
