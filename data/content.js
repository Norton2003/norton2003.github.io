/* =====================================================================
   SITE CONTENT — this is the only file you need to edit day to day.
   - Change text, links and dates here.
   - Add a project: copy one block in PROJECTS, paste it at the top, edit.
   - Media paths point into /assets. Drop the file in that folder with the
     same name and it appears on the site automatically.
   - Media types: "image", "video" (mp4 in /assets), "youtube" (video id)
   ===================================================================== */

window.SITE = {
  // Set to false once your photos are in, to hide the file names shown in empty slots.
  showSlotPaths: true,

  name: "Riley Norton",
  role: "Mechanical Engineering · Texas Tech University",
  intro:
    "I spent four years as a professional welder before I started designing the parts I used to build. " +
    "Now I lead cooling design for Red Raider Racing's electric Formula SAE car, and I bring a fabricator's eye to every model I make.",
  location: "Lubbock, Texas",
  email: "your.email@example.com",          // ← replace
  linkedin: "https://www.linkedin.com/in/your-handle", // ← replace
  github: "https://github.com/your-handle",           // ← replace (or "" to hide)
  resumePdf: "assets/docs/Riley_Norton_Resume.pdf",
  portrait: "assets/images/portrait.jpg",

  stats: [
    { value: "4.0", label: "GPA, Texas Tech ME" },
    { value: "4 yrs", label: "Professional welding" },
    { value: "3", label: "Internships by 2027" },
    { value: "1st", label: "Pantex innovation challenge" }
  ],

  // Your story, in order. Years left blank print without a date.
  timeline: [
    { when: "2021", title: "Azle High School", text: "Graduated and went straight into the trades." },
    { when: "", title: "Universal Technical Institute", text: "Welding program, 4.0 — while welding full time at IMS Industries." },
    { when: "", title: "IMS Industries · Welder", text: "Two years of production and fabrication welding." },
    { when: "", title: "RELCO · Traveling sanitary welder", text: "Stainless sanitary work on site, where weld quality is inspected, not assumed." },
    { when: "", title: "Tarrant County College → Texas Tech", text: "Started engineering at TCC, transferred to Texas Tech Mechanical Engineering." },
    { when: "Fall 2025", title: "Lead Welder, Red Raider Racing", text: "Responsible for the team's welded structures and fixtures." },
    { when: "Spring 2026", title: "Vice President, AGC", text: "Led site visits and competed in TEXO and DBIA design-build." },
    { when: "Summer 2026", title: "The Beck Group · Construction Intern", text: "First internship." },
    { when: "Fall 2026", title: "Cooling Design Lead, Red Raider Racing", text: "Owning the thermal system of the FSAE EV." },
    { when: "Spring 2027", title: "ME 4331 Individual Study", text: "Designing and prototyping a custom Formula heat exchanger." },
    { when: "Summer 2027", title: "L3Harris · Mechanical Design Engineer Intern", text: "Waco, Texas. Third internship." },
    { when: "Spring 2028", title: "B.S. Mechanical Engineering", text: "Expected graduation." }
  ],

  // ------------------------------------------------------------------
  // PROJECTS — newest first. category: "Design", "Fabrication", "Venture" or "Software"
  // status: "Complete", "In progress", "Planned"
  // ------------------------------------------------------------------
  projects: [
    {
      id: "formula-heat-exchanger",
      title: "Custom Formula heat exchanger",
      category: "Design",
      status: "In progress",
      when: "Spring 2027",
      org: "ME 4331 Individual Study · supervised by Dr. Jingfei Liu",
      summary: "Designing, simulating and prototyping a radiator built for Formula applications instead of borrowed from a dirt bike.",
      cover: "assets/projects/heat-exchanger/cover.jpg",
      problem: "The team's car is cooled by an off-the-shelf dirt bike radiator: not sized, shaped or validated for our loads and packaging.",
      role: "Project lead. Course: Innovations in Cooling Technology: Red Raider Racing.",
      process: [
        "Cooling calculator that sizes a heat exchanger for an individual application",
        "Complete radiator model in SolidWorks",
        "CFD in ANSYS / SimScale for heat transfer and fluid flow",
        "Design the die and build an initial prototype",
        "Test against the old radiator using MoTeC data",
        "Crowdfunding to a set budget, patent work with TTU's legal advisors, and training two teammates on the full process"
      ],
      results: "Testing in progress. Measured results will be added here.",
      tools: ["SolidWorks", "ANSYS", "SimScale", "MoTeC", "Fabrication"],
      media: [
        { type: "image", src: "assets/projects/heat-exchanger/cad.jpg", caption: "SolidWorks radiator model" },
        { type: "image", src: "assets/projects/heat-exchanger/cfd.jpg", caption: "CFD: temperature and flow field" },
        { type: "image", src: "assets/projects/heat-exchanger/prototype.jpg", caption: "First prototype" },
        { type: "video", src: "assets/projects/heat-exchanger/test.mp4", caption: "Bench test" }
      ],
      docs: [
        { label: "Course outline (PDF)", href: "assets/docs/ME4331_Course_Outline.pdf" }
      ],
      links: []
    },
    {
      id: "fsae-ev-cooling",
      title: "FSAE EV cooling system",
      category: "Design",
      status: "In progress",
      when: "Fall 2026 – Fall 2027",
      org: "Red Raider Racing · Cooling Design Lead",
      summary: "Thermal management for Texas Tech's electric Formula SAE car: keeping the motor, inverter and accumulator in their operating window.",
      cover: "assets/projects/fsae-cooling/cover.jpg",
      problem: "An electric powertrain only makes full power while its components stay cool, and every gram and every inch of packaging counts.",
      role: "Cooling Design Lead: system layout, component sizing and integration with the rest of the car.",
      process: [
        "Define heat loads and target temperatures for each component",
        "Size the loop: pump, lines, radiator and airflow",
        "Package the system in the chassis with the other subteams",
        "Build, install and validate with logged data"
      ],
      results: "Add design targets, measured temperatures and lessons learned as the season goes.",
      tools: ["SolidWorks", "Thermal analysis", "Data logging"],
      media: [
        { type: "image", src: "assets/projects/fsae-cooling/layout.jpg", caption: "Cooling loop layout" },
        { type: "image", src: "assets/projects/fsae-cooling/install.jpg", caption: "Installed on the car" }
      ],
      docs: [],
      links: []
    },
    {
      id: "fsae-fabrication",
      title: "Formula SAE fabrication",
      category: "Fabrication",
      status: "In progress",
      when: "Fall 2025 – present",
      org: "Red Raider Racing · Lead Welder",
      summary: "Welding for a competition car, where every joint is load-bearing and gets checked at tech inspection.",
      cover: "assets/projects/fsae-fab/cover.jpg",
      problem: "Student-built cars need welds and fixtures that hold up to competition loads and inspection.",
      role: "Lead welder: welding, fixturing, and teaching teammates.",
      process: [
        "Plan joint prep and fixturing with the designers",
        "Weld structures and components",
        "Inspect, fix and document"
      ],
      results: "Add the parts you built and how they performed.",
      tools: ["TIG", "MIG", "Fixturing", "Metal prep"],
      media: [
        { type: "image", src: "assets/projects/fsae-fab/weld-01.jpg", caption: "Weld detail" },
        { type: "image", src: "assets/projects/fsae-fab/fixture.jpg", caption: "Fixture setup" },
        { type: "video", src: "assets/projects/fsae-fab/welding.mp4", caption: "In the booth" }
      ],
      docs: [],
      links: []
    },
    {
      id: "pantex-challenge",
      title: "Pantex innovation challenges",
      category: "Venture",
      status: "Complete",
      when: "",
      org: "Pantex · two challenges, one first-place finish",
      summary: "Competed twice in Pantex innovation challenges and won one.",
      cover: "assets/projects/pantex/cover.jpg",
      problem: "Describe the challenge prompt here.",
      role: "Describe your role on the team.",
      process: ["Research", "Concept", "Pitch"],
      results: "First place in one challenge.",
      tools: ["Concept design", "Pitching"],
      media: [
        { type: "image", src: "assets/projects/pantex/team.jpg", caption: "Presentation day" }
      ],
      docs: [],
      links: []
    },
    {
      id: "innovation-hub",
      title: "Startups at the TTU Innovation Hub",
      category: "Venture",
      status: "In progress",
      when: "",
      org: "Red Raider Startup · iLaunch · iCore (planned)",
      summary: "Taking ideas through Texas Tech's startup programs: customer discovery, pitching and early prototypes.",
      cover: "assets/projects/innovation-hub/cover.jpg",
      problem: "Describe the venture and the problem it solves.",
      role: "Founder.",
      process: ["Red Raider Startup", "iLaunch", "iCore (planned)"],
      results: "Add milestones as they happen.",
      tools: ["Customer discovery", "Business modeling"],
      media: [],
      docs: [],
      links: []
    },
    {
      id: "design-build",
      title: "TEXO & DBIA design-build competitions",
      category: "Venture",
      status: "Complete",
      when: "Spring 2026",
      org: "Associated General Contractors · Vice President",
      summary: "Competed in the TEXO Open Design-Build and DBIA competitions and led chapter site visits to local construction companies.",
      cover: "assets/projects/design-build/cover.jpg",
      problem: "Describe the competition brief.",
      role: "Vice President of the student chapter; competitor.",
      process: ["Brief", "Design", "Estimate & schedule", "Present"],
      results: "Add placing and takeaways.",
      tools: ["Design-build", "Estimating", "Scheduling"],
      media: [],
      docs: [],
      links: []
    },
    {
      id: "lock-in-app",
      title: "Lock-in & LifeManaged apps",
      category: "Software",
      status: "In progress",
      when: "2026",
      org: "Personal projects",
      summary: "Phone home-screen web apps that keep all data on the device, built and deployed through GitHub.",
      cover: "assets/projects/apps/cover.jpg",
      problem: "I wanted tools that organize my life without sending my data anywhere.",
      role: "Designer and builder.",
      process: ["Define features", "Build as installable web app", "Deploy with GitHub Pages", "Use daily and iterate"],
      results: "In daily use.",
      tools: ["HTML/CSS/JS", "GitHub"],
      media: [],
      docs: [],
      links: []
    }
  ],

  // ------------------------------------------------------------------
  welding: {
    intro: "Before engineering, I welded for a living. I learned that a drawing is only as good as someone's ability to build it, and I bring that into every design review.",
    skills: [
      { name: "Sanitary stainless", where: "RELCO, traveling", note: "Clean, inspected welds for food and process equipment" },
      { name: "Production & fabrication", where: "IMS Industries, 2 years", note: "High-volume work to print" },
      { name: "Motorsport structures", where: "Red Raider Racing", note: "Lead welder for the FSAE team" },
      { name: "Formal training", where: "Universal Technical Institute", note: "Welding program, 4.0" }
    ],
    gallery: [
      { type: "image", src: "assets/welding/weld-01.jpg", caption: "Sanitary butt weld" },
      { type: "image", src: "assets/welding/weld-02.jpg", caption: "Stainless detail" },
      { type: "image", src: "assets/welding/weld-03.jpg", caption: "Fabrication" },
      { type: "image", src: "assets/welding/weld-04.jpg", caption: "On site" },
      { type: "video", src: "assets/welding/welding-reel.mp4", caption: "Welding reel" }
    ],
    certs: [] // e.g. { label: "AWS D1.1 certification (PDF)", href: "assets/docs/AWS_cert.pdf" }
  },

  experience: [
    { org: "L3Harris", role: "Mechanical Design Engineer Intern", when: "Summer 2027 · incoming", where: "Waco, TX", text: "Incoming design engineering internship." },
    { org: "The Beck Group", role: "Construction Intern", when: "Summer 2026", where: "", text: "Add two lines on your projects and responsibilities." },
    { org: "Red Raider Racing", role: "Cooling Design Lead · Lead Welder", when: "Fall 2025 – present", where: "Texas Tech", text: "Lead the cooling system of the FSAE EV and the team's welding." },
    { org: "Associated General Contractors", role: "Vice President", when: "Spring 2026 – present", where: "Texas Tech chapter", text: "Led two site visits to local construction companies; competed in TEXO and DBIA." },
    { org: "RELCO", role: "Traveling Sanitary Welder", when: "", where: "", text: "Stainless sanitary welding on customer sites." },
    { org: "IMS Industries", role: "Welder", when: "2 years", where: "", text: "Production and fabrication welding while studying at UTI." }
  ],

  education: [
    { school: "Texas Tech University", what: "B.S. Mechanical Engineering · 4.0 GPA", when: "Expected Spring 2028" },
    { school: "Tarrant County College", what: "Engineering coursework · transferred", when: "" },
    { school: "Universal Technical Institute", what: "Welding · 4.0", when: "" }
  ]
};
