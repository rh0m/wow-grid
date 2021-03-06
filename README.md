# wow-grid
A tool for generating a grid in the OmniUpdate WYSIWYG editor JustEdit.

---

## Structure
Editable regions are now split into 4 containers:

> **Sections** > **Rows** > **Columns** > **Modules**

**Sections** divide the editable region into subdivisions for different types of content.

**Rows** contain further divide the section into clean divisions of up to 12 columns.

**Columns** contain and arrange modules.

**Modules** are the individual pieces of content in each part of the page. These are HTML snippets that can contain text, images, and snippets. At this level, you can edit the source code for that particular module.

---

## Objectives
The Wow-Grid will have the following functions:

- Generate, edit, and delete responsive 12-column grid components.
    - This will include layout of columns and general alignments.
- Change background colors of masonry.
- Edit source code of modules.

[Demo](https://homr0.github.io/wow-grid)

### Completed Objectives
- Components can be rearranged.
- Components can be duplicated.
- Components can be deleted.
- Blank components can be added.
- Rows and sections can be added with a specific layout.
- Row layout can be adjusted.
- Background color classes can be added to components.
- Background color classes can be adjusted.
- Background image can be set.
- Components can be given an id.
---

## Known Issues
- Issue with dragging and dropping rows and sections vertically.
- Issue with getting initial columns for an uneven row for editing.
---

## Dependencies

- Git - version control system for code.
- Node.js - cross-platform JavaScript runtime environment.
    - Node Package Manager (NPM) - library for installing Node project dependencies.
        - Yarn - Node package that organizes and updates web components.
        - Gulp - Node package that helps automate work flow.

### Installation for Development
1. Clone this repository.
2. Make sure that Yarn and Gulp are installed globally.
3. Use Yarn to install NPM project dependencies.

    ```sh
    yarn install
    ```
### Testing Environment
Run 'gulp' to spin up a server and get to the test page.

### Customizable Styles
1. Background colors
  - Palette names must be unique. Otherwise, class names should match any background classes in the stylesheet. Labels need to be one word.
  - Palettes can be changed or added via ```wowStylesBackgroundSet()``` or removed ```wowStylesBackgroundRemove()```.
    - Multiple palettes can be added/edited via:  
    ```javascript
    wowStylesBackgroundSet({
        palette1: {
            labelName1: className1,
            labelName2: className2
        },

        palette2: {
            labelName1: className1,
            labelName2: className2,
            labelName3: className3
        }
    });
    ```
    - Individual palettes can be removed via:  
    ```javascript
    wowStylesBackgroundRemove(palette);
    ```
