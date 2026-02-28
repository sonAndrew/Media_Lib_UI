# Media Library UI: Overview

## Overview

As the name suggest, this is media library ui.
A frontend for your media library api backend.
A test project to learn an practice React + Typescript + Tailwindcss.

### Branches

There are 2 main branches: **main**, **dev**.

#### * main

Source of truth for the project.
Do not make changes directly on this branch.
Changes need to be made on the **dev** branch and then merged into **main**.

#### * dev

The branch that you will work in most.
Make your changes here and then create a pull request to merge into **main**.

### Top Level Folder Stucture: Outline

* src/
  * core/
    * Global configurations, assets/, context providers/, styles/
  * layouts/
    * Application-level layouts
  * features/
    * Specific functionality that includes: components/, hooks/, type/, views/, routes/, etc...
  * shared/
    * Shared functionality such as components/, hooks/, utils/
  * store/
    * Contains files related to state management such as Redux store configurations, actions, and reducers.
  * routes/
    * Global routing rules
  * App.tsx
    * Application container
  * main.tsx
    * React entry point

### References

A list of references and documentation that I've researched and/used for this project can be found inside the **_docs.refs.json_** file.

### AI

No AI has been or is currently being used in this project.
