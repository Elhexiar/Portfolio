import { Tooltip } from "bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage, type Translated } from "../i18n";

/*
Skill tree, generated from the data below.
Each node has a center position, and each link goes from the parent center
to the child center through a few waypoints ("via"), with rounded corners.
The parts of the links under the slots are hidden, so they look like they
come out of the side of the slots, like the branches of a "USB logo".

Tip for new branches : the branches going the furthest should split first
(closest to the parent), so the links never cross.

Layout :
- /root
  - Application development -> Front-end (React, Vue, TypeScript), Back-end (Spring Boot, Node),
                               Databases, Tests, Python & Data
  - Design & methods        -> Architecture, Project management, Soft skills
  - Video games & 3D        -> Unity (C#, UI Toolkit, AR, Tooling), Unreal (C++, Blueprints, AI, Optimisation)
*/

// Tooltip contents (html strings for bootstrap)
const tooltip = (title: Translated<string>, paragraphs: Translated<string[]>) => ({
  fr: `<div><h5>${title.fr}</h5>${paragraphs.fr.map((p) => `<p>${p}</p>`).join("")}</div>`,
  en: `<div><h5>${title.en}</h5>${paragraphs.en.map((p) => `<p>${p}</p>`).join("")}</div>`,
});

const tips = {
  root: {
    fr: "<div><h5>MIRIEL-MATHIS root:</h5></div>",
    en: "<div><h5>MIRIEL-MATHIS root:</h5></div>",
  },
  appDev: tooltip(
    { fr: "Développement d'applications", en: "Application Development" },
    {
      fr: [
        "Le cœur de ma formation CDA : concevoir et développer des applications web et desktop complètes, de l'interface jusqu'à la base de données.",
      ],
      en: [
        "The core of my CDA training : designing and developing complete web and desktop applications, from the interface down to the database.",
      ],
    },
  ),
  frontEnd: tooltip(
    { fr: "Front-end", en: "Front End" },
    {
      fr: [
        "Des interfaces agréables à utiliser et responsive, maquettées sur Figma quand il le faut.",
        "Mon expérience de l'UI/UX dans le jeu vidéo m'aide à prendre en main beaucoup plus facilement un nouveau framework.",
      ],
      en: [
        "User-friendly and responsive interfaces, with Figma mockups when needed.",
        "My experience with UI/UX in game development helps me pick up any new framework much more easily.",
      ],
    },
  ),
  react: tooltip(
    { fr: "React", en: "React" },
    {
      fr: [
        "Ce site est fait en React : fenêtres déplaçables, animations, version FR / EN avec un Context, et cet arbre généré à partir de données !",
      ],
      en: [
        "This website is made with React : draggable windows, animations, FR / EN version with a Context, and this tree generated from data !",
      ],
    },
  ),
  vue: tooltip(
    { fr: "Vue 3", en: "Vue 3" },
    {
      fr: ["Vue 3 pour des applications web pendant ma formation CDA."],
      en: ["Vue 3 for web applications during my CDA training."],
    },
  ),
  typescript: tooltip(
    { fr: "JavaScript / TypeScript", en: "JavaScript / TypeScript" },
    {
      fr: [
        "TypeScript au quotidien (ce site en est un exemple), et JavaScript avec Phaser.js pour mes jeux navigateur comme Citadel.",
      ],
      en: [
        "TypeScript every day (this website is an example), and JavaScript with Phaser.js for my browser games like Citadel.",
      ],
    },
  ),
  backEnd: tooltip(
    { fr: "Back-end", en: "Back End" },
    {
      fr: [
        "Conception d'API et de la logique métier, en séparant proprement les couches (contrôleurs, services, accès aux données).",
      ],
      en: [
        "Designing APIs and business logic, with cleanly separated layers (controllers, services, data access).",
      ],
    },
  ),
  spring: tooltip(
    { fr: "Java / Spring Boot", en: "Java / Spring Boot" },
    {
      fr: [
        "Sur BorneFlash, je conçois et j'intègre les couches Service et Repository d'une partie du backend Spring Boot.",
      ],
      en: [
        "On BorneFlash, I design and integrate the Service and Repository layers of part of the Spring Boot backend.",
      ],
    },
  ),
  node: tooltip(
    { fr: "Node.js / Express", en: "Node.js / Express" },
    {
      fr: ["Node.js et Express pour mes API JavaScript, avec PostgreSQL derrière."],
      en: ["Node.js and Express for my JavaScript APIs, with PostgreSQL behind them."],
    },
  ),
  databases: tooltip(
    { fr: "Bases de données", en: "Databases" },
    {
      fr: [
        "SQL et PostgreSQL, avec une conception faite proprement en amont avec Merise (MCD, MLD).",
        "Je suis responsable d'une partie de la conception de la base de données de BorneFlash.",
      ],
      en: [
        "SQL and PostgreSQL, with a proper design done beforehand using Merise (conceptual and logical data models).",
        "I am responsible for part of the database design of BorneFlash.",
      ],
    },
  ),
  tests: tooltip(
    { fr: "Tests & qualité", en: "Testing & Quality" },
    {
      fr: [
        "Tests unitaires avec Vitest, tests de bout en bout avec Selenium, et hooks Git avec Husky pour garder un code propre à chaque commit.",
      ],
      en: [
        "Unit tests with Vitest, end-to-end tests with Selenium, and Git hooks with Husky to keep the code clean on every commit.",
      ],
    },
  ),
  pythonData: tooltip(
    { fr: "Python & Data", en: "Python & Data" },
    {
      fr: [
        "Pendant mon stage au laboratoire LTSI, j'ai créé des scripts Python (pandas, Matplotlib) pour analyser de gros volumes de données de traitement du signal et comparer différents algorithmes.",
        "J'utilise aussi Python pour du scripting au quotidien.",
      ],
      en: [
        "During my internship at the LTSI lab, I wrote Python scripts (pandas, Matplotlib) to analyse large volumes of signal processing data and compare different algorithms.",
        "I also use Python for everyday scripting.",
      ],
    },
  ),
  design: tooltip(
    { fr: "Conception & méthodes", en: "Design & Methods" },
    {
      fr: [
        "Tout ce qui se passe avant et autour du code, et qui fait qu'un projet tient la route sur la durée.",
      ],
      en: [
        "Everything that happens before and around the code, and that keeps a project on track in the long run.",
      ],
    },
  ),
  architecture: tooltip(
    { fr: "Architecture & documentation", en: "Architecture & Documentation" },
    {
      fr: [
        "Sur mes différents projets, j'ai toujours été chargé de concevoir la structure globale du logiciel, en veillant à son évolutivité et sa maintenabilité.",
        "Je documente systématiquement mes choix (UML, C4, PlantUML) : pour moi, la documentation fait partie intégrante du développement.",
      ],
      en: [
        "On my different projects I was always in charge of designing the overall structure of the software, ensuring scalability and maintainability.",
        "I always document my choices (UML, C4, PlantUML) : to me, documentation is part of development.",
      ],
    },
  ),
  projectManagement: tooltip(
    { fr: "Gestion de projet", en: "Project Management" },
    {
      fr: [
        "Git, méthodes Agile, Jira et Taiga, sur des projets en équipe pluridisciplinaire allant jusqu'à 11 personnes.",
      ],
      en: [
        "Git, Agile methods, Jira and Taiga, on multidisciplinary team projects of up to 11 people.",
      ],
    },
  ),
  softSkills: tooltip(
    { fr: "Soft skills", en: "Soft Skills" },
    {
      fr: [
        "J'accorde beaucoup d'importance à une communication efficace, au travail en équipe et à l'adaptabilité.",
        "La réussite de l'équipe est toujours ma priorité : sur mon projet de fin d'études, j'ai repris le leadership pour pivoter le projet et le livrer dans les délais.",
        "La curiosité et l'apprentissage continu sont aussi au cœur de mon développement personnel et professionnel.",
      ],
      en: [
        "I value effective communication, teamwork, and adaptability.",
        "Team success is always my priority : on my final year project, I took the lead to pivot the project and deliver it on time.",
        "Curiosity and continuous learning are also key aspects of my personal and professional development.",
      ],
    },
  ),
  gameDev: tooltip(
    { fr: "Jeu vidéo & 3D", en: "Video Games & 3D" },
    {
      fr: [
        "Mon premier terrain de jeu : développeur de jeux vidéo à l'origine, j'en ai gardé des bases solides en programmation orientée objet, en temps réel et en performance.",
      ],
      en: [
        "My first playground : originally a game developer, I kept a strong foundation in OOP, real time programming and performance from it.",
      ],
    },
  ),
  unity: tooltip(
    { fr: "Unity", en: "Unity" },
    {
      fr: [
        "Le premier moteur que j'ai appris, et celui que j'ai utilisé en contexte professionnel chez Enki Digital, notamment pour de la réalité augmentée sur mobile.",
      ],
      en: [
        "The first engine I learned, and the one I used professionally at Enki Digital, especially for augmented reality on mobile.",
      ],
    },
  ),
  csharp: tooltip(
    { fr: "C#", en: "C#" },
    {
      fr: [
        "En travaillant sur Unity ces dernières années, j'ai acquis une solide maîtrise du C#, en mettant l'accent sur un code propre, compréhensible par les autres et maintenable.",
      ],
      en: [
        "While working on Unity these past years I have developed a strong understanding of C#, focusing on clean code that others can understand and maintain.",
      ],
    },
  ),
  uiToolkit: tooltip(
    { fr: "UI Toolkit", en: "UI Toolkit" },
    {
      fr: [
        "Chez ENKI DIGITAL, j'ai conçu l'architecture UI complète d'une application avec l'UI Toolkit de Unity : composants réutilisables, navigation, notifications, data binding et localisation.",
      ],
      en: [
        "At ENKI DIGITAL, I designed the complete UI architecture of an app with Unity's UI Toolkit : reusable components, navigation, notifications, data binding and localization.",
      ],
    },
  ),
  ar: tooltip(
    { fr: "Réalité augmentée", en: "Augmented Reality" },
    {
      fr: [
        "R&D et intégration avec AR Foundation pour superposer des objets 3D dans l'environnement réel, sur iOS et Android, pour l'Office de Tourisme de Rennes et le Stade Rennais.",
      ],
      en: [
        "R&D and integration with AR Foundation to overlay 3D objects in the real environment, on iOS and Android, for the Rennes Tourism Office and Stade Rennais.",
      ],
    },
  ),
  unityTooling: tooltip(
    { fr: "Outillage", en: "Tooling" },
    {
      fr: [
        "Dans le jeu vidéo, une grande partie de la productivité de l'équipe dépend de ses outils. J'ai appris chez ENKI DIGITAL à gérer les données dans l'éditeur et à créer des outils sur mesure, fiables et faciles à comprendre pour tout le monde.",
      ],
      en: [
        "In game dev, a lot of the team's productivity relies on its tools. At ENKI DIGITAL I learned to handle data in the editor and to build custom tools that are reliable and easy to understand for everyone.",
      ],
    },
  ),
  unreal: tooltip(
    { fr: "Unreal Engine", en: "Unreal Engine" },
    {
      fr: [
        "Ayant réalisé mon projet de fin d'études sur Unreal Engine, j'ai une expérience concrète de ses fonctionnalités sur un projet de 8 mois en équipe.",
      ],
      en: [
        "Having done my final year project on Unreal Engine, I have practical experience with its features on an 8 months team project.",
      ],
    },
  ),
  cpp: tooltip(
    { fr: "C++", en: "C++" },
    {
      fr: [
        "Sur Unreal pour mon projet de fin d'études, mais aussi en industrie : chez Sabena Technics, j'ai conçu et documenté une API C++ pour un banc de test ARINC 429 (protocole avionique).",
      ],
      en: [
        "On Unreal for my final year project, but also in the industry : at Sabena Technics, I designed and documented a C++ API for an ARINC 429 test bench (avionics protocol).",
      ],
    },
  ),
  blueprints: tooltip(
    { fr: "Blueprints", en: "Blueprints" },
    {
      fr: [
        "Mon projet de fin d'études a été réalisé en grande partie en Blueprints, ce qui a permis de prototyper rapidement et d'impliquer les non-programmeurs dans le développement.",
      ],
      en: [
        "My final year project was mostly done in Blueprints, which allowed rapid prototyping and helped involve non-programmers in the development process.",
      ],
    },
  ),
  ai: tooltip(
    { fr: "IA (Behaviour Trees)", en: "AI (Behaviour Trees)" },
    {
      fr: [
        "Mon projet de fin d'études étant à l'origine un RTS, j'ai implémenté l'IA avec des behaviour trees et la navigation avec le NavMesh. Les Game Designers pouvaient ainsi modifier les comportements sans toucher au code.",
      ],
      en: [
        "My final year project being originally an RTS, I implemented the AI with behaviour trees and navigation with the NavMesh. Game Designers could then tweak behaviours without touching the code.",
      ],
    },
  ),
  optimisation: tooltip(
    { fr: "Optimisation", en: "Optimisation" },
    {
      fr: [
        "J'étais chargé des performances sur mon projet de fin d'études : profilage régulier, systèmes pensés pour la performance dès le départ, et multithreading.",
        "J'ai appris que c'est souvent autant une question de suivi du projet et du périmètre que de pure technique.",
      ],
      en: [
        "I was in charge of performance on my final year project : regular profiling, systems designed for performance from the start, and multithreading.",
        "I learned it is often as much about keeping track of the project and its scope as about raw technical skills.",
      ],
    },
  ),
};

// short names written next to the slots (the tooltips have the details)
const names: Record<string, Translated<string>> = {
  "app-dev": { fr: "Applications", en: "Applications" },
  "python-data": { fr: "Python & Data", en: "Python & Data" },
  "front-end": { fr: "Front-end", en: "Front-end" },
  react: { fr: "React", en: "React" },
  typescript: { fr: "TypeScript", en: "TypeScript" },
  vue: { fr: "Vue 3", en: "Vue 3" },
  "back-end": { fr: "Back-end", en: "Back-end" },
  spring: { fr: "Spring Boot", en: "Spring Boot" },
  node: { fr: "Node.js", en: "Node.js" },
  databases: { fr: "Bases de données", en: "Databases" },
  tests: { fr: "Tests", en: "Testing" },
  design: { fr: "Conception", en: "Design" },
  architecture: { fr: "Architecture", en: "Architecture" },
  "project-management": { fr: "Gestion de projet", en: "Project management" },
  "soft-skills": { fr: "Soft skills", en: "Soft skills" },
  "game-dev": { fr: "Jeu vidéo & 3D", en: "Games & 3D" },
  unity: { fr: "Unity", en: "Unity" },
  "unity-tooling": { fr: "Outillage", en: "Tooling" },
  "ar-foundation": { fr: "Réalité augmentée", en: "Augmented reality" },
  csharp: { fr: "C#", en: "C#" },
  "ui-toolkit": { fr: "UI Toolkit", en: "UI Toolkit" },
  unreal: { fr: "Unreal", en: "Unreal" },
  cpp: { fr: "C++", en: "C++" },
  blueprints: { fr: "Blueprints", en: "Blueprints" },
  ai: { fr: "IA", en: "AI" },
  optimisation: { fr: "Optimisation", en: "Optimisation" },
};

// leaves get their name on the right (end of the branch), nodes with children below
// (their branch leaves from the right side). Override here when a name bumps into something.
type LabelPosition = "right" | "below" | "above";
const labelPositionOverrides: Record<string, LabelPosition> = {
  "back-end": "above",
};

const LABEL_FONT_SIZE = 24;
const LABEL_GAP = 12;

type Point = [number, number];

interface SkillNode {
  id: string;
  icon?: string; // image in /public, if missing the label is written instead
  label?: string;
  size: number;
  x: number; // center
  y: number; // center
  via?: Point[]; // waypoints of the link coming from the parent
  tooltip: Translated<string>;
  children?: SkillNode[];
}

const BIG = 140;
const MEDIUM = 100;
const SMALL = 84;

const skillTree: SkillNode = {
  id: "root", label: "/root", size: BIG, x: 85, y: 640, tooltip: tips.root,
  children: [
    {
      id: "app-dev", icon: "/skills/layers.svg", size: BIG, x: 470, y: 300,
      via: [[260, 300]],
      tooltip: tips.appDev,
      children: [
        { id: "python-data", icon: "/skills/data.svg", size: SMALL, x: 720, y: 60, via: [[580, 300], [640, 60]], tooltip: tips.pythonData },
        {
          id: "front-end", icon: "/front-end-icon.png", size: MEDIUM, x: 860, y: 160,
          via: [[660, 300], [740, 160]],
          tooltip: tips.frontEnd,
          children: [
            { id: "react", icon: "/skills/react.svg", size: SMALL, x: 1180, y: 70, via: [[990, 160], [1040, 70]], tooltip: tips.react },
            { id: "typescript", icon: "/skills/typescript.svg", size: SMALL, x: 1190, y: 260, via: [[1000, 160], [1055, 260]], tooltip: tips.typescript },
            { id: "vue", icon: "/skills/vue.svg", size: SMALL, x: 1300, y: 160, tooltip: tips.vue },
          ],
        },
        {
          id: "back-end", icon: "/skills/backend.svg", size: MEDIUM, x: 1100, y: 390,
          via: [[780, 300], [830, 390]],
          tooltip: tips.backEnd,
          children: [
            { id: "spring", icon: "/skills/spring.svg", size: SMALL, x: 1420, y: 320, via: [[1230, 390], [1270, 320]], tooltip: tips.spring },
            { id: "node", icon: "/skills/node.svg", size: SMALL, x: 1440, y: 460, via: [[1250, 390], [1290, 460]], tooltip: tips.node },
          ],
        },
        { id: "databases", icon: "/skills/database.svg", size: MEDIUM, x: 900, y: 480, via: [[680, 300], [770, 480]], tooltip: tips.databases },
        { id: "tests", icon: "/skills/tests.svg", size: SMALL, x: 1160, y: 570, via: [[600, 300], [700, 570]], tooltip: tips.tests },
      ],
    },
    {
      id: "design", icon: "/general-dev-skills.png", size: BIG, x: 480, y: 760,
      via: [[270, 760]],
      tooltip: tips.design,
      children: [
        { id: "architecture", icon: "/architecture-icon.png", size: MEDIUM, x: 790, y: 650, via: [[620, 760], [680, 650]], tooltip: tips.architecture },
        { id: "project-management", icon: "/skills/git.svg", size: MEDIUM, x: 850, y: 760, tooltip: tips.projectManagement },
        { id: "soft-skills", icon: "/soft-skill.png", size: MEDIUM, x: 790, y: 880, via: [[620, 760], [690, 880]], tooltip: tips.softSkills },
      ],
    },
    {
      id: "game-dev", icon: "/controller-icon.png", size: BIG, x: 470, y: 1080,
      via: [[240, 1080]],
      tooltip: tips.gameDev,
      children: [
        {
          id: "unity", icon: "/unity-icon.png", size: MEDIUM, x: 830, y: 1010,
          via: [[620, 1080], [660, 1010]],
          tooltip: tips.unity,
          children: [
            { id: "unity-tooling", icon: "/tooling.png", size: SMALL, x: 1560, y: 780, via: [[900, 1010], [1010, 780]], tooltip: tips.unityTooling },
            { id: "ar-foundation", icon: "/skills/ar.svg", size: SMALL, x: 1400, y: 860, via: [[980, 1010], [1080, 860]], tooltip: tips.ar },
            { id: "csharp", icon: "/csharp-icon.png", size: SMALL, x: 1240, y: 940, via: [[1060, 1010], [1110, 940]], tooltip: tips.csharp },
            { id: "ui-toolkit", icon: "/ui-icon.png", size: SMALL, x: 1340, y: 1010, tooltip: tips.uiToolkit },
          ],
        },
        {
          id: "unreal", icon: "/unreal-icon.png", size: MEDIUM, x: 860, y: 1180,
          via: [[640, 1080], [700, 1180]],
          tooltip: tips.unreal,
          children: [
            { id: "cpp", icon: "/cpp-icon.png", size: SMALL, x: 1130, y: 1100, via: [[980, 1180], [1020, 1100]], tooltip: tips.cpp },
            { id: "blueprints", icon: "/bp-icon.png", size: SMALL, x: 1110, y: 1260, via: [[990, 1180], [1030, 1260]], tooltip: tips.blueprints },
            { id: "ai", icon: "/bht-icon.png", size: SMALL, x: 1300, y: 1180, tooltip: tips.ai },
            { id: "optimisation", icon: "/performance-icon.png", size: SMALL, x: 1560, y: 1110, via: [[1180, 1180], [1220, 1110]], tooltip: tips.optimisation },
          ],
        },
      ],
    },
  ],
};

// flatten the tree, keeping the depth and the position among siblings for the animation delays
interface PlacedNode {
  node: SkillNode;
  parent?: SkillNode;
  depth: number;
  order: number;
}

function flatten(node: SkillNode, depth = 0, order = 0, parent?: SkillNode): PlacedNode[] {
  return [
    { node, parent, depth, order },
    ...(node.children ?? []).flatMap((child, i) => flatten(child, depth + 1, i, node)),
  ];
}

// the tab is wider than tall : stretch the positions horizontally (not the slots) to fill it
const X_STRETCH = 1.3;

function stretch(node: SkillNode): SkillNode {
  return {
    ...node,
    x: node.x * X_STRETCH,
    via: node.via?.map(([x, y]): Point => [x * X_STRETCH, y]),
    children: node.children?.map(stretch),
  };
}

const placedNodes = flatten(stretch(skillTree));

function labelPosition(node: SkillNode): LabelPosition {
  return labelPositionOverrides[node.id] ?? (node.children ? "below" : "right");
}

// rough text width, only used to leave room for the labels in the viewBox
const longestName = (id: string) =>
  Math.max(...Object.values(names[id] ?? { fr: "", en: "" }).map((n) => n.length));
const labelWidth = (id: string) => longestName(id) * LABEL_FONT_SIZE * 0.55;

// fit the viewBox around all the slots and their labels
const MARGIN = 10;
const nodeRight = (node: SkillNode) =>
  node.x + node.size / 2 + (labelPosition(node) === "right" ? LABEL_GAP + labelWidth(node.id) : 0);
const nodeBottom = (node: SkillNode) =>
  node.y + node.size / 2 + (names[node.id] && labelPosition(node) === "below" ? LABEL_GAP + LABEL_FONT_SIZE : 0);
const VIEW_MIN_X = Math.min(...placedNodes.map(({ node }) => node.x - node.size / 2)) - MARGIN;
const VIEW_MIN_Y = Math.min(...placedNodes.map(({ node }) => node.y - node.size / 2)) - MARGIN;
const VIEW_WIDTH = Math.max(...placedNodes.map(({ node }) => nodeRight(node))) + MARGIN - VIEW_MIN_X;
const VIEW_HEIGHT = Math.max(...placedNodes.map(({ node }) => nodeBottom(node))) + MARGIN - VIEW_MIN_Y;

// polyline from the parent center to the child center, with rounded corners on each waypoint
const CORNER_RADIUS = 22;

function linkPath(parent: SkillNode, child: SkillNode) {
  const points: Point[] = [[parent.x, parent.y], ...(child.via ?? []), [child.x, child.y]];
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1];
    const [cx, cy] = points[i];
    const [nx, ny] = points[i + 1];
    const lenIn = Math.hypot(cx - px, cy - py);
    const lenOut = Math.hypot(nx - cx, ny - cy);
    const r = Math.min(CORNER_RADIUS, lenIn / 2, lenOut / 2);
    const ax = cx - ((cx - px) / lenIn) * r;
    const ay = cy - ((cy - py) / lenIn) * r;
    const bx = cx + ((nx - cx) / lenOut) * r;
    const by = cy + ((ny - cy) / lenOut) * r;
    d += ` L${ax} ${ay} Q${cx} ${cy} ${bx} ${by}`;
  }
  const [lx, ly] = points[points.length - 1];
  return d + ` L${lx} ${ly}`;
}

const slotDelay = (depth: number, order: number) => depth * 0.3 + order * 0.05;
const linkDelay = (depth: number, order: number) => 0.1 + (depth - 1) * 0.3 + order * 0.05;

// small name next to a slot, kept subtle : thin, semi transparent, brighter on hover (see App.css)
function SkillLabel({ node, text }: { node: SkillNode; text: string }) {
  const position = labelPosition(node);
  const half = node.size / 2;
  const placement = {
    right: { x: node.x + half + LABEL_GAP, y: node.y, anchor: "start" as const },
    below: { x: node.x, y: node.y + half + LABEL_GAP + LABEL_FONT_SIZE / 2, anchor: "middle" as const },
    above: { x: node.x, y: node.y - half - LABEL_GAP - LABEL_FONT_SIZE / 2, anchor: "middle" as const },
  }[position];

  return (
    <text
      className="skill-label"
      x={placement.x}
      y={placement.y}
      textAnchor={placement.anchor}
      dominantBaseline="middle"
      fontSize={LABEL_FONT_SIZE}
      pointerEvents="none"
    >
      {text}
    </text>
  );
}

function TechnicalSkillTree() {
  const { lang, tr } = useLanguage();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images used in the skill tree
  useEffect(() => {
    const imageUrls = placedNodes
      .map(({ node }) => node.icon)
      .filter((url): url is string => !!url);

    const loadImage = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load ${url}`));
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => {
        console.error("Error preloading images:", err);
        setImagesLoaded(true); // Show anyway even if some images fail
      });
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !svgRef.current) return;
    const triggers = svgRef.current.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    const instances = Array.from(triggers).map((el) =>
      Tooltip.getOrCreateInstance(el),
    );
    return () => instances.forEach((t) => t.dispose());
    // bootstrap reads the title only on creation, so recreate the tooltips when the language changes
  }, [imagesLoaded, lang]);

  if (!imagesLoaded) {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#61FFFF",
        }}
      >
        {tr({ fr: "Chargement...", en: "Loading..." })}
      </div>
    );
  }

  return (
    <div
      className="skill-tree-container"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: "10px",
      }}
    >
      <svg
        ref={svgRef}
        viewBox={`${VIEW_MIN_X} ${VIEW_MIN_Y} ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <defs>
          <linearGradient id="slotGradient" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#561F1F" />
            <stop offset="1" stopColor="#233F3F" />
          </linearGradient>
        </defs>
        <g id="SkillTree">
          {/* links first so the slots are drawn on top of them */}
          {placedNodes
            .filter(({ parent }) => parent)
            .map(({ node, parent, depth, order }) => (
              <path
                key={`link-${node.id}`}
                d={linkPath(parent!, node)}
                pathLength={1000}
                stroke="#61FFFF"
                strokeWidth={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ animationDelay: `${linkDelay(depth, order)}s` }}
              />
            ))}

          {placedNodes.map(({ node, depth, order }) => {
            const left = node.x - node.size / 2;
            const top = node.y - node.size / 2;
            return (
              <g
                key={node.id}
                id={`SkillSlot-${node.id}`}
                data-bs-toggle="tooltip"
                data-bs-title={tr(node.tooltip)}
                data-bs-trigger="hover"
                data-bs-html="true"
                style={
                  {
                    "--slot-delay": `${slotDelay(depth, order)}s`,
                  } as React.CSSProperties
                }
              >
                <rect
                  x={left}
                  y={top}
                  width={node.size}
                  height={node.size}
                  rx={15}
                  fill="url(#slotGradient)"
                  stroke="#CE1B1B"
                  strokeWidth={2}
                />
                <rect
                  x={left - 2}
                  y={top - 2}
                  width={node.size + 4}
                  height={node.size + 4}
                  rx={17}
                  stroke="#61FFFF"
                  strokeWidth={2}
                />
                {node.icon ? (
                  <image
                    href={node.icon}
                    x={left - 2}
                    y={top - 2}
                    width={node.size + 4}
                    height={node.size + 4}
                    preserveAspectRatio="xMidYMid slice"
                    pointerEvents="none"
                  />
                ) : (
                  <text
                    x={node.x}
                    y={node.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#61ffff"
                    fontSize="35"
                    fontFamily="Orbitron, sans-serif"
                    pointerEvents="none"
                  >
                    {node.label}
                  </text>
                )}
                {names[node.id] && <SkillLabel node={node} text={tr(names[node.id])} />}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default TechnicalSkillTree;
