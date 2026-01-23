import { Tooltip } from "bootstrap";
import { useEffect, useRef } from "react";

/*
Skill Tree List:
- Game Development
  - Unity
    - C#
    - UIToolkit
    - Tooling
  - Unreal Engine
    - C++
    - Blueprints
    - AI (Behavior Trees)
    - Optimisation
    - CommonUI
    - Tooling
  - Architecture
    - Design Patterns
    - UML documentation
    - Data Structures
    - Team Oriented Design

- Web Development
  - Frontend
    - React


*/

function TechnicalSkillTree() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const triggers = svgRef.current.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    const instances = Array.from(triggers).map((el) => new Tooltip(el));
    return () => instances.forEach((t) => t.dispose());
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: "10px",
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1661 1269"
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
      >
        <g id="SkillTree">
          <path
            id="ArrowPath1"
            d="M76.8937 773.872L168.989 582.482C172.155 575.904 178.81 571.721 186.11 571.721L343.668 571.721"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath0"
            d="M76.8938 773.872L168.29 960.721C171.478 967.239 178.101 971.372 185.357 971.372L424.5 971.372"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath00"
            d="M423.547 971.969L515.571 1187.34C518.561 1194.33 525.435 1198.87 533.043 1198.87L667.5 1198.87"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath01"
            d="M474.5 932.372L674.569 932.372C678.431 932.372 682.201 933.549 685.378 935.746L740.5 973.872"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath02"
            d="M435 951.372L500 828.372L636.213 828.372C642.354 828.372 648.117 825.404 651.683 820.404L692 763.872"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath11"
            d="M350 529.872L577.344 529.872C583.963 529.872 590.105 526.428 593.556 520.78L698 349.872"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath114"
            d="M691 295.372L691 144.445C691 137.871 694.398 131.764 699.985 128.299L801 65.645"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath110"
            d="M700 392.954L767.185 449.869C770.617 452.777 774.968 454.372 779.466 454.372L1018.92 454.372C1023.18 454.372 1027.32 452.938 1030.67 450.3L1103.5 392.954"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath113"
            d="M743 332.372L799.372 246.449C802.885 241.096 808.856 237.872 815.259 237.872L971.721 237.872C978.406 237.872 984.6 234.358 988.03 228.619L1022.5 170.943"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath112"
            d="M759 333.872L833.999 279.225C837.249 276.857 841.167 275.581 845.188 275.581L1246.26 275.581C1252.65 275.581 1258.62 272.365 1262.13 267.022L1315.5 185.872"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath111"
            d="M747 385.872L840.024 322.465C843.179 320.314 846.908 319.164 850.725 319.164L1414.9 319.164C1420.37 319.164 1425.57 316.812 1429.17 312.709L1476.5 258.872"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath10"
            d="M367 585.645L861.873 585.645C865.857 585.645 869.74 586.897 872.973 589.224L1001 681.372"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath102"
            d="M991.5 632.872L1215.9 632.872C1220.17 632.872 1224.33 631.429 1227.68 628.776L1287 581.872"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath101"
            d="M978 717.03L1525.86 717.03C1530.76 717.03 1535.47 715.137 1539.01 711.746L1578 674.372"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />
          <path
            id="ArrowPath100"
            d="M988.5 692.872L1028.37 777.778C1031.5 784.445 1038.2 788.702 1045.57 788.702L1343.15 788.702C1350.4 788.702 1357.02 792.832 1360.21 799.348L1406 892.872"
            stroke="#61FFFF"
            stroke-width="10"
            stroke-linecap="round"
          />

          <g
            id="SkillSlot00"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>General Dev Skills</h5>
            <p>Game Development was my primary focus for many years, but I have also gained experience in web development and software engineering in general.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2"
              x="350"
              y="897.872"
              width="148"
              height="148"
              rx="15"
              fill="url(#paint0_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1"
              x="348"
              y="895.872"
              width="152"
              height="152"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
          </g>
          <g
            id="SkillSlot01"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Game Development</h5>
            <p>Originaly a game developer, i have strong foundation in OOP and software architecture.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_2"
              x="276"
              y="491.872"
              width="148"
              height="148"
              rx="15"
              fill="url(#paint1_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_2"
              x="274"
              y="489.872"
              width="152"
              height="152"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/controller-icon.png"
              x="274"
              y="489.872"
              width="152"
              height="152"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot010"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Unity</h5>
            <p>The first engine I learned and also the only one i used professionally,
             I particullarly like the options for tooling and compute shaders compared to other Engines.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_3"
              x="915"
              y="598.872"
              width="148"
              height="148"
              rx="15"
              fill="url(#paint2_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_3"
              x="913"
              y="596.872"
              width="152"
              height="152"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/unity-icon.png"
              x="913"
              y="596.872"
              width="152"
              height="152"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0102"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>C#</h5>
            <p>While working on unity these past years I have developed a strong understanding of C# programming, focusing on clean code understandable by others and maintainability.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_4"
              x="1256"
              y="533.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint3_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_4"
              x="1254"
              y="531.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/csharp-icon.png"
              x="1254"
              y="531.872"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0114"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>C++</h5>
            <p>My last year project gave me the opportunity to learn C++, while a one month job a SABENA helped me gain practical experience.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_5"
              x="750"
              y="22.8721"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint4_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_5"
              x="748"
              y="20.8721"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/cpp-icon.png"
              x="748"
              y="20.8721"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0113"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Blueprints</h5>
            <p>My final year project was mostly done in Blueprints (BP) as it allowed the rapid prototyping of game mechanics and logic without deep programming knowledge.
            which helped involve non-programmers in the development process.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_6"
              x="979"
              y="103.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint5_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_6"
              x="977"
              y="101.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/bp-icon.png"
              x="977"
              y="101.872"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0112"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>AI (Behaviour Trees)</h5>
            <p>My final year project being originally an RTS it involved implementing AI using behaviour trees. It helped separate squad and individual behaviour and allowed Game Designers to modify behaviour without interfering with the codebase</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
            data-bs-placement="right"
          >
            <rect
              id="Rectangle 2_7"
              x="1256"
              y="122.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint6_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_7"
              x="1254"
              y="120.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/bht-icon.png"
              x="1254"
              y="120.872"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0111"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Optimisation</h5>
            <p>I was tasked to handle performance optimization in my final year project, ensuring smooth gameplay and efficient resource management.</p>
            <p>I learned it was often more a role of management, policing of the project and scope more than raw technical abilities.</p>
            <p>I have still a lot to learn in this domain.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_8"
              x="1460"
              y="203.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint7_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_8"
              x="1458"
              y="201.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/performance-icon.png" // put the image in public/images
              x="1458"
              y="201.872"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0110"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Tooling</h5>
            <p>Tooling takes a huge portion of the development process, enabling efficient workflows and automation.</p>
            <p>In Game dev a lot of the team's productivity relies on the tools available to them. They need to be reliable and easily understandable by someone no matter their technical background.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
            data-bs-placement="right"
          >
            <rect
              id="Rectangle 2_9"
              x="1052"
              y="345.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint8_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_9"
              x="1050"
              y="343.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/tooling.png" // put the image in public/images
              x="1050"
              y="343.872"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0101"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>UIToolkit</h5>
            <p>During my internship at ENKI DIGITAL I worked on various UI systems using Unity's UIToolkit.
             I created reusable components and optimized UI performance for better user experience on mobile and tablet devices.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_10"
              x="1560"
              y="617.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint9_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_10"
              x="1558"
              y="615.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/ui-icon.png"
              x="1558"
              y="615.872"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g id="SkillSlot001">
            <rect
              id="Rectangle 2_11"
              x="714"
              y="940.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint10_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <g id="SkillSlot002">
              <rect
                id="Rectangle 2_12"
                x="641"
                y="692.872"
                width="98"
                height="98"
                rx="15"
                fill="url(#paint11_linear_1_67)"
                stroke="#CE1B1B"
                stroke-width="2"
              />
              <rect
                id="Rectangle 1_12"
                x="639"
                y="690.872"
                width="102"
                height="102"
                rx="17"
                stroke="#61FFFF"
                stroke-width="2"
              />
            </g>

            <rect
              id="Rectangle 1_11"
              x="712"
              y="938.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
          </g>
          <g
            id="SkillSlot0100"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Tooling</h5>
            <p>I gained a lot of experience on Unity Tooling at ENKI DIGITAL, I know how to handle various ways to handle data in the editor and create custom tools to improve workflow efficiency.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_12"
              x="1356"
              y="861.872"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint15_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_12"
              x="1354"
              y="859.872"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/tooling.png"
              x="1354"
              y="859.872"
              width="102"
              height="102"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot000"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Software Architecture</h5>
            <p>On my different projects I was always asigned the task of designing and implementing the overall structure of the software, ensuring scalability, maintainability, and performance.</p>
            <p>Even during my internship at ENKI DIGITAL I was tasked with designing the architecture of new features from scratch.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_13"
              x="621"
              y="1147.87"
              width="98"
              height="98"
              rx="15"
              fill="url(#paint12_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_13"
              x="619"
              y="1145.87"
              width="102"
              height="102"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
          </g>
          <g
            id="SkillSlot011"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>Unreal Engine</h5>
            <p>Having done my final year project on Unreal Engine,
             I have practical experience with its features and capabilities on large scale projects.</p>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_14"
              x="621"
              y="270.872"
              width="148"
              height="148"
              rx="15"
              fill="url(#paint13_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_14"
              x="619"
              y="268.872"
              width="152"
              height="152"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <image
              href="/unreal-icon.png"
              x="621"
              y="270.872"
              width="148"
              height="148"
              preserveAspectRatio="xMidYMid slice"
              pointerEvents="none"
            />
          </g>
          <g
            id="SkillSlot0"
            data-bs-toggle="tooltip"
            data-bs-title="<div>
            <h5>MIRIEL-MATHIS root:</h5>
            </div>"
            data-bs-trigger="hover"
            data-bs-html="true"
          >
            <rect
              id="Rectangle 2_15"
              x="3"
              y="699.872"
              width="148"
              height="148"
              rx="15"
              fill="url(#paint14_linear_1_67)"
              stroke="#CE1B1B"
              stroke-width="2"
            />
            <rect
              id="Rectangle 1_15"
              x="1"
              y="697.872"
              width="152"
              height="152"
              rx="17"
              stroke="#61FFFF"
              stroke-width="2"
            />
            <text
              x={1 + 152 / 2}
              y={697.872 + 152 / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#61ffff"
              fontSize="35"
              fontFamily="Orbitron, sans-serif"
              pointerEvents="none"
            >
              /root
            </text>
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_67"
            x1="424"
            y1="896.872"
            x2="424"
            y2="1046.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_67"
            x1="350"
            y1="490.872"
            x2="350"
            y2="640.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_67"
            x1="989"
            y1="597.872"
            x2="989"
            y2="747.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_67"
            x1="1305"
            y1="532.872"
            x2="1305"
            y2="632.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_67"
            x1="799"
            y1="21.8721"
            x2="799"
            y2="121.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_67"
            x1="1028"
            y1="102.872"
            x2="1028"
            y2="202.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1_67"
            x1="1305"
            y1="121.872"
            x2="1305"
            y2="221.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1_67"
            x1="1509"
            y1="202.872"
            x2="1509"
            y2="302.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1_67"
            x1="1101"
            y1="344.872"
            x2="1101"
            y2="444.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1_67"
            x1="1609"
            y1="616.872"
            x2="1609"
            y2="716.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_1_67"
            x1="763"
            y1="939.872"
            x2="763"
            y2="1039.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_1_67"
            x1="690"
            y1="691.872"
            x2="690"
            y2="791.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>

          <linearGradient
            id="paint15_linear_1_67"
            x1="1405"
            y1="860.872"
            x2="1405"
            y2="960.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_1_67"
            x1="670"
            y1="1146.87"
            x2="670"
            y2="1246.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_1_67"
            x1="695"
            y1="269.872"
            x2="695"
            y2="419.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_1_67"
            x1="77"
            y1="698.872"
            x2="77"
            y2="848.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#561F1F" />
            <stop offset="1" stop-color="#233F3F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default TechnicalSkillTree;
