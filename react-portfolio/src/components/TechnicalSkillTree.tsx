import { Tooltip } from "bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage, type Translated } from "../i18n";

/*
Skill tree, generated from the data below instead of hand placed svg paths.
To add a skill : add a node in the tree with its position, the links,
animation delays and tooltips are computed automatically.

Layout (left to right) :
- /root
  - Application development  -> Front-end, Back-end, Databases, Python & Data
  - Design & methods         -> Architecture, Project management, Soft skills
  - Video games & 3D         -> Unity  -> C#, UI Toolkit, AR Foundation, Tooling
                             -> Unreal -> C++, Blueprints, AI, Optimisation
*/

// Tooltip contents (html strings for bootstrap)
const tooltip = (title: Translated<string>, paragraphs: Translated<string[]>) => ({
  fr: `<div><h5>${title.fr}</h5>${paragraphs.fr.map((p) => `<p>${p}</p>`).join("")}</div>`,
  en: `<div><h5>${title.en}</h5>${paragraphs.en.map((p) => `<p>${p}</p>`).join("")}</div>`,
});

interface SkillNode {
  id: string;
  icon?: string; // image in /public, if missing the label is written instead
  label?: string;
  size: number;
  x: number; // left edge
  y: number; // vertical center
  linkMidX?: number; // x where the links to the children turn
  tooltip: Translated<string>;
  children?: SkillNode[];
}

// column positions and slot sizes
const COL = [10, 330, 720, 1150];
const BIG = 150;
const MEDIUM = 110;
const SMALL = 100;
// rows of the 3rd column (9 slots) and the 4th one (8 slots)
const row2 = (i: number) => 70 + i * 130;
const row3 = (i: number) => 70 + i * 148.5;

const skillTree: SkillNode = {
  id: "root",
  label: "/root",
  size: BIG,
  x: COL[0],
  y: (265 + 720 + 1045) / 3,
  linkMidX: 245,
  tooltip: {
    fr: "<div><h5>MIRIEL-MATHIS root:</h5></div>",
    en: "<div><h5>MIRIEL-MATHIS root:</h5></div>",
  },
  children: [
    {
      id: "app-dev",
      icon: "/skills/layers.svg",
      size: BIG,
      x: COL[1],
      y: 265,
      linkMidX: 600,
      tooltip: tooltip(
        { fr: "Développement d'applications", en: "Application Development" },
        {
          fr: [
            "Le cœur de ma formation CDA : concevoir et développer des applications web et desktop complètes, de l'interface jusqu'à la base de données.",
            "Je fais aussi attention aux tests (Vitest, Selenium) et à la documentation tout au long du projet.",
          ],
          en: [
            "The core of my CDA training : designing and developing complete web and desktop applications, from the interface down to the database.",
            "I also care about testing (Vitest, Selenium) and documentation throughout the project.",
          ],
        },
      ),
      children: [
        {
          id: "front-end",
          icon: "/front-end-icon.png",
          size: MEDIUM,
          x: COL[2],
          y: row2(0),
          tooltip: tooltip(
            { fr: "Front-end", en: "Front End" },
            {
              fr: [
                "JavaScript / TypeScript, React (ce site !), Vue 3 et Phaser.js pour mes jeux navigateur, avec des maquettes sur Figma.",
                "Mon expérience de l'UI/UX dans le jeu vidéo m'aide à prendre en main beaucoup plus facilement un nouveau framework.",
              ],
              en: [
                "JavaScript / TypeScript, React (this website !), Vue 3 and Phaser.js for my browser games, with mockups on Figma.",
                "My experience with UI/UX in game development helps me pick up any new framework much more easily.",
              ],
            },
          ),
        },
        {
          id: "back-end",
          icon: "/skills/backend.svg",
          size: MEDIUM,
          x: COL[2],
          y: row2(1),
          tooltip: tooltip(
            { fr: "Back-end", en: "Back End" },
            {
              fr: [
                "Java / Spring Boot : sur BorneFlash, je conçois et j'intègre les couches Service et Repository d'une partie du backend.",
                "Node.js / Express pour mes API JavaScript.",
              ],
              en: [
                "Java / Spring Boot : on BorneFlash, I design and integrate the Service and Repository layers of part of the backend.",
                "Node.js / Express for my JavaScript APIs.",
              ],
            },
          ),
        },
        {
          id: "databases",
          icon: "/skills/database.svg",
          size: MEDIUM,
          x: COL[2],
          y: row2(2),
          tooltip: tooltip(
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
        },
        {
          id: "python-data",
          icon: "/skills/data.svg",
          size: MEDIUM,
          x: COL[2],
          y: row2(3),
          tooltip: tooltip(
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
        },
      ],
    },
    {
      id: "design",
      icon: "/general-dev-skills.png",
      size: BIG,
      x: COL[1],
      y: 720,
      linkMidX: 600,
      tooltip: tooltip(
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
      children: [
        {
          id: "architecture",
          icon: "/architecture-icon.png",
          size: MEDIUM,
          x: COL[2],
          y: row2(4),
          tooltip: tooltip(
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
        },
        {
          id: "project-management",
          icon: "/skills/git.svg",
          size: MEDIUM,
          x: COL[2],
          y: row2(5),
          tooltip: tooltip(
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
        },
        {
          id: "soft-skills",
          icon: "/soft-skill.png",
          size: MEDIUM,
          x: COL[2],
          y: row2(6),
          tooltip: tooltip(
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
        },
      ],
    },
    {
      id: "game-dev",
      icon: "/controller-icon.png",
      size: BIG,
      x: COL[1],
      y: 1045,
      linkMidX: 600,
      tooltip: tooltip(
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
      children: [
        {
          id: "unity",
          icon: "/unity-icon.png",
          size: MEDIUM,
          x: COL[2],
          y: row2(7),
          // the two engines turn at different x so their links never cross
          linkMidX: 930,
          tooltip: tooltip(
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
          children: [
            {
              id: "csharp",
              icon: "/csharp-icon.png",
              size: SMALL,
              x: COL[3],
              y: row3(0),
              tooltip: tooltip(
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
            },
            {
              id: "ui-toolkit",
              icon: "/ui-icon.png",
              size: SMALL,
              x: COL[3],
              y: row3(1),
              tooltip: tooltip(
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
            },
            {
              id: "ar-foundation",
              icon: "/skills/ar.svg",
              size: SMALL,
              x: COL[3],
              y: row3(2),
              tooltip: tooltip(
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
            },
            {
              id: "unity-tooling",
              icon: "/tooling.png",
              size: SMALL,
              x: COL[3],
              y: row3(3),
              tooltip: tooltip(
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
            },
          ],
        },
        {
          id: "unreal",
          icon: "/unreal-icon.png",
          size: MEDIUM,
          x: COL[2],
          y: row2(8),
          linkMidX: 1040,
          tooltip: tooltip(
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
          children: [
            {
              id: "cpp",
              icon: "/cpp-icon.png",
              size: SMALL,
              x: COL[3],
              y: row3(4),
              tooltip: tooltip(
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
            },
            {
              id: "blueprints",
              icon: "/bp-icon.png",
              size: SMALL,
              x: COL[3],
              y: row3(5),
              tooltip: tooltip(
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
            },
            {
              id: "ai",
              icon: "/bht-icon.png",
              size: SMALL,
              x: COL[3],
              y: row3(6),
              tooltip: tooltip(
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
            },
            {
              id: "optimisation",
              icon: "/performance-icon.png",
              size: SMALL,
              x: COL[3],
              y: row3(7),
              tooltip: tooltip(
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
            },
          ],
        },
      ],
    },
  ],
};

const VIEW_WIDTH = COL[3] + SMALL + 20;
const VIEW_HEIGHT = row2(8) + MEDIUM / 2 + 20;

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

const placedNodes = flatten(skillTree);

// link with rounded corners : right edge of the parent -> turn at midX -> left edge of the child
function linkPath(parent: SkillNode, child: SkillNode) {
  const x1 = parent.x + parent.size + 2;
  const y1 = parent.y;
  const x2 = child.x - 2;
  const y2 = child.y;
  const midX = parent.linkMidX ?? (x1 + x2) / 2;
  const dy = y2 - y1;
  if (Math.abs(dy) < 1) return `M${x1} ${y1} H${x2}`;
  const dir = Math.sign(dy);
  const r = Math.min(25, Math.abs(dy) / 2);
  return [
    `M${x1} ${y1}`,
    `H${midX - r}`,
    `Q${midX} ${y1} ${midX} ${y1 + dir * r}`,
    `V${y2 - dir * r}`,
    `Q${midX} ${y2} ${midX + r} ${y2}`,
    `H${x2}`,
  ].join(" ");
}

const slotDelay = (depth: number, order: number) => depth * 0.3 + order * 0.05;
const linkDelay = (depth: number, order: number) => 0.15 + (depth - 1) * 0.3 + order * 0.05;

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
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
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
                style={{ animationDelay: `${linkDelay(depth, order)}s` }}
              />
            ))}

          {placedNodes.map(({ node, depth, order }) => {
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
                  x={node.x}
                  y={top}
                  width={node.size}
                  height={node.size}
                  rx={15}
                  fill="url(#slotGradient)"
                  stroke="#CE1B1B"
                  strokeWidth={2}
                />
                <rect
                  x={node.x - 2}
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
                    x={node.x - 2}
                    y={top - 2}
                    width={node.size + 4}
                    height={node.size + 4}
                    preserveAspectRatio="xMidYMid slice"
                    pointerEvents="none"
                  />
                ) : (
                  <text
                    x={node.x + node.size / 2}
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
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default TechnicalSkillTree;
