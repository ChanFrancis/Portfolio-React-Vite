# Francis Chan — Portfolio

Personal portfolio of **Francis Chan**, full-stack web developer.
Single-page application built with **React** and **Vite**, featuring an animated
scroll-based navigation, interactive 3D scenes (Spline), and a data-driven
projects / experiences showcase.

🔗 **Live:** https://francis-chan.onrender.com/

## Tech stack

- **React 18** + **Vite 5** (SWC)
- **Redux Toolkit** — page/scroll state
- **Spline** — 3D hero scenes
- **ESLint 9** (flat config)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
npm run lint     # lint the codebase
```

## Project structure

```
src/
├─ main.jsx                     # app entry, Redux store, section composition
└─ components/
   ├─ S1_presentation/          # hero section
   ├─ S2_projects/              # experiences & projects (data-driven via JSON)
   │  ├─ Experiences/
   │  ├─ Projects/
   │  └─ Utils/                 # renderers, image scroller, hooks
   ├─ S4_contact/               # contact section
   ├─ ScrollEffect/             # scroll navigation & page-count state
   ├─ Utils/                    # image-loading hook & reducer
   └─ styles/                   # per-section CSS
```

Projects and experiences are defined in
[`myProjectsData.json`](src/components/S2_projects/Projects/myProjectsData.json) and
[`experiencesData.json`](src/components/S2_projects/Experiences/experiencesData.json) —
edit these to update content.

## Contact

- LinkedIn: https://www.linkedin.com/in/francis-chan-290325123/
- GitHub: https://github.com/ChanFrancis
