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
  showSlotPaths: false,

  name: "Riley Norton",
  role: "Mechanical Engineering · Texas Tech University",
  intro:
    "I spent four years as a professional welder before I started designing the parts I used to build. " +
    "Now I lead cooling design for Red Raider Racing's electric Formula SAE car, and I bring a fabricator's eye to every model I make.",
  location: "Lubbock, Texas",
  email: "riley.norton55@gmail.com",
  linkedin: "https://www.linkedin.com/in/riley-norton-b5566a321",
  github: "https://github.com/Norton2003",            // or "" to hide
  resumePdf: "assets/docs/Riley_Norton_Resume.pdf",
  portrait: "assets/images/portrait.jpg",


  // A one-line "what I'm working on now". Update the date when you change it.
  now: { when: "Nov 2026", text: "Building the louvered radiator prototype for on-car testing.", project: "louver-edge" },

  // Drag-to-compare in the Story section: the same car, designed and built.
  compare: {
    before: { src: "assets/projects/fsae-cooling/car-cad.jpg", label: "Designed" },
    after: { src: "assets/projects/fsae-cooling/michigan-team.jpg", label: "Raced" },
    caption: "Red Raider Racing's car, in SolidWorks and at Formula SAE Michigan."
  },

  stats: [
    { value: "4.0", label: "GPA, Texas Tech ME" },
    { value: "4 yrs", label: "Professional welding" },
    { value: "3", label: "Internships by 2027" },
    { value: "1st", label: "Pantex challenge, Texas Tech round" }
  ],

  // Your story, in order.
  timeline: [
    { when: "2020", title: "IMS Industries · Structural Welder / Fitter", text: "Overhead crane drums and load blocks to AWS D1.1, with zero rejected welds." },
    { when: "2021", title: "Azle High School", text: "Graduated while already welding professionally." },
    { when: "2022", title: "Universal Technical Institute", text: "Metallurgical Processes, 4.0 GPA, earned while working full time." },
    { when: "2022", title: "RELCO · Pharmaceutical Welder", text: "Led two-person field teams solving mechanical issues at dairy processing plants." },
    { when: "2025", title: "Tarrant County College → Texas Tech", text: "Started engineering at TCC (3.67), transferred to Texas Tech Mechanical Engineering." },
    { when: "Fall 2025", title: "Lead Welder, Red Raider Racing", text: "Welding the team's tube-frame chassis." },
    { when: "Spring 2026", title: "Vice President, AGC", text: "Led site visits and competed in design-build competitions." },
    { when: "Summer 2026", title: "The Beck Group · FSAE Michigan", text: "Construction internship; competed at Formula SAE Michigan (EV) with Red Raider Racing." },
    { when: "Fall 2026", title: "Cooling Design Lead · The Louver Edge", text: "Took over the EV's cooling system and pitched a louvered radiator at Red Raider Startup." },
    { when: "Oct 2026", title: "Pantex Innovation Challenge", text: "Team Diamond Deterrence won the Texas Tech round, then placed 2nd at the finals." },
    { when: "Spring 2027", title: "ME 4331 Individual Study", text: "Prototyping and testing the louvered radiator." },
    { when: "Summer 2027", title: "L3Harris · Mechanical Design Engineer Intern", text: "Waco, Texas. Third internship." },
    { when: "Spring 2028", title: "B.S. Mechanical Engineering", text: "Expected graduation." }
  ],

  // ------------------------------------------------------------------
  // PROJECTS — newest first. category: "Design", "Fabrication" or "Competition"
  // status: "Complete", "In progress", "Planned"
  // Media types: image, video (mp4 in assets), youtube (video id). Add loop: true for short animations.
  // ------------------------------------------------------------------
  projects: [
    {
      id: "louver-edge",
      stat: { value: "9 of 11", label: "Formula engineers surveyed struggle with overheating" },
      lesson: "", // optional: one or two sentences on what you learned or would change
      title: "The Louver Edge: a louvered radiator",
      category: "Design",
      status: "In progress",
      when: "Fall 2026 – Spring 2027",
      org: "Red Raider Startup · ME 4331 Individual Study with Dr. Jingfei Liu",
      summary: "Replacing the team's borrowed dirt bike radiator with one designed for the job: louvered fins that break up the boundary layer to pull more heat out of the same footprint.",
      cover: "assets/projects/louver-edge/cover.jpg",
      problem: "Red Raider Racing cooled its car with an old, underperforming dirt bike radiator. Off-the-shelf cores aren't sized or shaped for a Formula car's heat loads and packaging, and every gram and square inch matters.",
      role: "Project lead: heat transfer calculations, CAD, CFD, the startup pitch and crowdfunding.",
      process: [
        "Built a cooling calculator to size the radiator from the heat each component generates",
        "Surveyed 11 Formula racing engineers; 9 said they struggle with overheating under load",
        "Designed louvered fin geometry in SolidWorks, driven by NTU heat transfer equations",
        "Simulated heat transfer and airflow in SimScale CFD and compared it against standard microchannel and bio-inspired designs",
        "Pitched it at Red Raider Startup and launched an ONWARD crowdfunding campaign (goal: $6,000) to fund the prototype",
        "Next: build the prototype and heat-cycle test it on the car against the old radiator using MoTeC data"
      ],
      results: "Design and simulation complete, with a manufacturing-ready CAD model. Prototype build and on-car testing follow in Spring 2027.",
      tools: ["SolidWorks", "SimScale CFD", "NTU method", "MoTeC data", "Customer discovery"],
      media: [
        { type: "youtube", src: "8iFsJ0AoWeA", caption: "The Louver Edge: Innovations in Cooling Technology" },
        { type: "image", src: "assets/projects/louver-edge/concept.jpg", caption: "Concept: air flows through angled louvers between coolant tubes" },
        { type: "image", src: "assets/projects/louver-edge/louver-cad.jpg", caption: "Louvered fin pack, SolidWorks" },
        { type: "image", src: "assets/projects/louver-edge/louver-detail.jpg", caption: "Fin and louver detail" },
        { type: "image", src: "assets/projects/louver-edge/louver-section.jpg", caption: "Section through the fins" },
        { type: "image", src: "assets/projects/louver-edge/cfd-flow.jpg", caption: "CFD: airflow velocity through the core" },
        { type: "image", src: "assets/projects/louver-edge/cfd-temp.jpg", caption: "CFD simulation setup in SimScale" },
        { type: "image", src: "assets/projects/louver-edge/cfd-results.jpg", caption: "CFD results" },
        { type: "image", src: "assets/projects/louver-edge/old-radiator.jpg", caption: "What it replaces: the old dirt bike radiator" },
        { type: "image", src: "assets/projects/louver-edge/temp-log.jpg", caption: "Logged coolant temperatures from the car" },
        { type: "image", src: "assets/projects/louver-edge/pitch.jpg", caption: "Red Raider Startup pitch" },
        { type: "image", src: "assets/projects/louver-edge/flyer.jpg", caption: "ONWARD crowdfunding campaign" }
      ],
      docs: [
        { label: "Pitch deck (PDF)", href: "assets/docs/Louver_Edge_Pitch_Deck.pdf" }
      ],
      links: [
        { label: "Watch the pitch on YouTube", href: "https://www.youtube.com/watch?v=8iFsJ0AoWeA" },
        { label: "ONWARD crowdfunding campaign", href: "https://onward.ttu.edu/campaigns/red-raider-racing-innovations-in-cooling-technology" }
      ]
    },
    {
      id: "fsae-ev-cooling",
      stat: { value: "28 L/min", label: "motor coolant flow target" },
      lesson: "", // optional: one or two sentences on what you learned or would change
      title: "FSAE EV cooling system",
      category: "Design",
      status: "In progress",
      when: "Fall 2026 – Fall 2027",
      org: "Red Raider Racing · Cooling Design Lead",
      summary: "The coolant loop for Texas Tech's electric Formula SAE car, sized for the endurance event: pump, swirl pot, motor, inverter, radiator and fan.",
      cover: "assets/projects/fsae-cooling/cover.jpg",
      problem: "The motor and inverter only make full power while they stay in their temperature window, and the car has to survive a full endurance run on a hot day (designed for 32.2 °C at Michigan).",
      role: "Cooling Design Lead: system layout, component sizing, rules compliance and integration with the other subteams.",
      process: [
        "Built a component-by-component cooling calculator: motor, inverter, radiator, fan, pump, swirl pot, fittings, sensors and shroud",
        "Set flow targets from the datasheets: 28 L/min at 0.5 bar for the motor and 11.67 L/min at 0.05 bar for the inverter",
        "Laid out a single-radiator loop with Y-fittings splitting flow between motor and inverter",
        "Checked every choice against the FSAE rules (coolant, catch can, routing near high-voltage parts)",
        "Estimated total system mass of about 6.6 kg, then filled, bled and tested the loop on the car"
      ],
      results: "Calculator, layout and loop complete. Temperature data logged on the car now drives the louvered radiator design.",
      tools: ["SolidWorks", "Thermal analysis", "FSAE rules", "Data logging"],
      media: [
        { type: "image", src: "assets/projects/fsae-cooling/loop-diagram.jpg", caption: "Coolant loop layout from my cooling calculator" },
        { type: "image", src: "assets/projects/fsae-cooling/packaging-cad.jpg", caption: "Packaging the radiator and pump in the chassis" },
        { type: "image", src: "assets/projects/fsae-cooling/inverter-loop.jpg", caption: "Coolant lines at the inverter" },
        { type: "image", src: "assets/projects/fsae-cooling/plumbing.jpg", caption: "Plumbing on the car" },
        { type: "image", src: "assets/projects/fsae-cooling/bench-test.jpg", caption: "Filling and bleeding the system" },
        { type: "image", src: "assets/projects/fsae-cooling/car-cad.jpg", caption: "Full car model" },
        { type: "image", src: "assets/projects/fsae-cooling/michigan-car.jpg", caption: "Formula SAE Michigan" },
        { type: "image", src: "assets/projects/fsae-cooling/michigan-team.jpg", caption: "Red Raider Racing at Michigan, 2026" }
      ],
      docs: [],
      links: []
    },
    {
      id: "fsae-chassis",
      stat: { value: "96", label: "tubes in the cut list" },
      lesson: "", // optional: one or two sentences on what you learned or would change
      title: "Formula SAE chassis fabrication",
      category: "Fabrication",
      status: "In progress",
      when: "Fall 2025 – present",
      org: "Red Raider Racing · Lead Welder",
      summary: "TIG welding the team's steel tube-frame chassis in a fixture jig, from a 96-tube SolidWorks cut list to a finished frame.",
      cover: "assets/projects/fsae-fab/cover.jpg",
      problem: "A Formula SAE chassis is a safety structure that's checked at technical inspection. Nodes where six or seven tubes meet have to be fit tight and welded without distorting the frame.",
      role: "Lead welder: fixturing, fit-up and TIG welding, and teaching teammates.",
      process: [
        "Cut and notch tubes to the drawing's cut list",
        "Fixture every tube on the jig table to hold geometry",
        "Tack, check, then weld nodes in a sequence that controls distortion",
        "Support the composites work: vacuum-bagged carbon fiber parts"
      ],
      results: "Complete chassis off the jig. Add inspection results and weight once the car is finished.",
      tools: ["TIG", "Fixturing", "Tube notching", "Carbon fiber layup"],
      media: [
        { type: "image", src: "assets/projects/fsae-fab/node-01.jpg", caption: "Multi-tube node, TIG welded" },
        { type: "image", src: "assets/projects/fsae-fab/node-02.jpg", caption: "Another node" },
        { type: "image", src: "assets/projects/fsae-fab/chassis-rear.jpg", caption: "Finished frame" },
        { type: "image", src: "assets/projects/fsae-fab/jig.jpg", caption: "Frame fixtured on the jig table" },
        { type: "image", src: "assets/projects/fsae-fab/jig-wide.jpg", caption: "Tacked and clamped" },
        { type: "image", src: "assets/projects/fsae-fab/drawing.jpg", caption: "The chassis drawing and 96-tube cut list" },
        { type: "video", src: "assets/projects/fsae-fab/team-shop.mp4", caption: "Red Raider Racing in the shop" },
        { type: "image", src: "assets/projects/fsae-fab/carbon-bag.jpg", caption: "Vacuum-bagging a carbon fiber part" },
        { type: "image", src: "assets/projects/fsae-fab/carbon-part.jpg", caption: "Carbon fiber after cure" }
      ],
      docs: [],
      links: []
    },
    {
      id: "pantex-challenge",
      stat: { value: "1st", label: "Texas Tech round, then 2nd at the finals" },
      lesson: "", // optional: one or two sentences on what you learned or would change
      title: "Pantex Innovation Challenge",
      category: "Competition",
      status: "Complete",
      when: "Fall 2025 · Fall 2026",
      org: "Team Diamond Deterrence · Texas Tech University",
      summary: "A national security innovation challenge: student teams take a real problem Pantex is working on and develop a solution with an engineering mentor.",
      cover: "assets/projects/pantex/cover.jpg",
      problem: "Each team picks a real issue the Pantex Plant is trying to solve and is paired with a mentor to build a solution.",
      role: "Team member, Diamond Deterrence. Competed in Fall 2025 and Fall 2026.",
      process: [
        "Choose a real Pantex problem",
        "Develop the solution with a Pantex mentor",
        "Pitch to judges at Texas Tech's Innovation Hub",
        "Present at the finals at Pantex"
      ],
      results: "Fall 2026: 1st place in the Texas Tech round ($5,000), then 2nd place at the Pantex finals ($6,000).",
      tools: ["Problem framing", "Concept design", "Pitching"],
      media: [
        { type: "image", src: "assets/projects/pantex/cover.jpg", caption: "Diamond Deterrence takes 1st at Texas Tech" },
        { type: "image", src: "assets/projects/pantex/check.jpg", caption: "October 23, 2026" }
      ],
      docs: [],
      links: [
        { label: "NewsChannel 10 coverage", href: "https://www.newschannel10.com/2026/11/07/pantex-challenges-students-find-national-security-solutions/" }
      ]
    },
    {
      id: "dump-truck",
      stat: { value: "3", label: "motion studies" },
      lesson: "", // optional: one or two sentences on what you learned or would change
      title: "Dump truck assembly & motion study",
      category: "Design",
      status: "Complete",
      when: "",
      org: "SolidWorks assembly project",
      summary: "A full dump truck modeled part by part, assembled with mates, and animated: the wheels drive and the bed tilts.",
      cover: "assets/projects/dump-truck/cover.jpg",
      problem: "Model a complete multi-part machine so that it assembles correctly and its mechanisms actually move.",
      role: "Sole designer.",
      process: [
        "Model each part: chassis, cab, dump bed, axles and wheels",
        "Assemble with mates that leave the right degrees of freedom",
        "Run motion studies for wheel rotation and the bed lift",
        "Produce an exploded-view drawing with a ballooned parts list"
      ],
      results: "Working assembly with three animations and an exploded-view drawing.",
      tools: ["SolidWorks", "Assemblies & mates", "Motion study", "Drawings"],
      media: [
        { type: "video", src: "assets/projects/dump-truck/tilt.mp4", caption: "Bed tilt", loop: true },
        { type: "video", src: "assets/projects/dump-truck/assembly.mp4", caption: "Assembly animation", loop: true },
        { type: "video", src: "assets/projects/dump-truck/wheels.mp4", caption: "Wheels in motion", loop: true },
        { type: "image", src: "assets/projects/dump-truck/assembly.jpg", caption: "Exploded assembly" },
        { type: "image", src: "assets/projects/dump-truck/drawing.jpg", caption: "Assembly drawing" }
      ],
      docs: [
        { label: "Exploded view drawing (PDF)", href: "assets/docs/Dump_Truck_Exploded_View.pdf" }
      ],
      links: []
    },
    {
      id: "design-build",
      stat: { value: "42 pages", label: "statement of qualifications" },
      lesson: "", // optional: one or two sentences on what you learned or would change
      title: "Design-build competitions",
      category: "Competition",
      status: "Complete",
      when: "2026",
      org: "Associated General Contractors · TEXO & DBIA",
      summary: "As Project Manager, led a student team writing a full Statement of Qualifications for a design-build regional medical center.",
      cover: "assets/projects/design-build/cover.jpg",
      problem: "Win a design-build contract on paper: prove the team can deliver a regional medical center on budget, on schedule and to quality standards.",
      role: "Project Manager and point of contact for a five-person team covering quality, design, environmental and safety.",
      process: [
        "Read the owner's request and scoring criteria",
        "Assign roles: quality, design, environmental and safety managers",
        "Write the 42-page SOQ: team, experience, approach, schedule and safety",
        "Submit for judging"
      ],
      results: "Completed SOQ submitted September 2026.",
      tools: ["Design-build", "Project management", "Technical writing"],
      media: [
        { type: "image", src: "assets/projects/design-build/cover.jpg", caption: "SOQ title page" }
      ],
      docs: [
        { label: "Statement of Qualifications (PDF)", href: "assets/docs/TEXO_Design-Build_SOQ.pdf" }
      ],
      links: []
    },
    {
      id: "garage-builds",
      stat: { value: "Cast iron", label: "axle housing" },
      lesson: "", // optional: one or two sentences on what you learned or would change
      title: "Garage build: axle truss",
      category: "Fabrication",
      status: "Complete",
      when: "",
      org: "Personal project",
      summary: "Welded a truss onto my truck's cast iron front axle housing to stiffen it, then finished and painted it.",
      cover: "assets/projects/garage/cover.jpg",
      problem: "A stock axle housing can bend under load, and a truss stiffens it. The catch: the housing is cast iron, which cracks easily if the heat isn't managed.",
      role: "Everything: prep, fit-up, welding and finish.",
      process: ["Strip and clean the cast iron housing", "Fit the truss", "Weld in short stages, controlling heat to avoid cracking", "Paint and reinstall"],
      results: "Back on the truck and in use.",
      tools: ["Cast iron welding", "Fit-up", "Surface prep"],
      media: [
        { type: "image", src: "assets/projects/garage/truss.jpg", caption: "Truss welded to the housing" },
        { type: "image", src: "assets/projects/garage/cover.jpg", caption: "Painted and going back in" }
      ],
      docs: [],
      links: []
    }
  ],

  // ------------------------------------------------------------------
  welding: {
    intro: "Before engineering, I welded for a living. I learned that a drawing is only as good as someone's ability to build it, and I bring that into every design review.",
    skills: [
      { name: "Structural & crane", where: "IMS Industries · 2020–2022", note: "Drums and load blocks for 50+ ton overhead cranes, AWS D1.1, zero rejected welds" },
      { name: "Pharmaceutical & sanitary", where: "RELCO · 2022–2024", note: "Stainless process welding; led field teams and cut plant downtime by up to 20%" },
      { name: "Motorsport", where: "Red Raider Racing · 2025–now", note: "TIG welding the FSAE chassis" },
      { name: "Every process", where: "MIG · TIG · Stick · sub-arc", note: "Also CNC, plasma and oxyacetylene cutting" }
    ],
    galleries: [
      {
        title: "Stainless & sanitary · RELCO",
        items: [
          { type: "video", src: "assets/welding/relco-weld.mp4", caption: "Tube weld, close up" },
          { type: "image", src: "assets/welding/relco-03.jpg", caption: "Stainless circumferential weld" },
          { type: "image", src: "assets/welding/relco-04.jpg", caption: "Nozzle weld" },
          { type: "image", src: "assets/welding/relco-05.jpg", caption: "Ring weld" },
          { type: "image", src: "assets/welding/relco-06.jpg", caption: "Long seam" },
          { type: "image", src: "assets/welding/relco-07.jpg", caption: "Sanitary piping spool" },
          { type: "image", src: "assets/welding/relco-08.jpg", caption: "Welding by mirror" },
          { type: "image", src: "assets/welding/relco-09.jpg", caption: "Tube weld, polished line" },
          { type: "image", src: "assets/welding/relco-10.jpg", caption: "Pipe-to-plate fillet" }
        ]
      },
      {
        title: "Mild steel structural · IMS Industries",
        items: [
          { type: "image", src: "assets/welding/ims-01.jpg", caption: "Crane drum assembly" },
          { type: "image", src: "assets/welding/relco-01.jpg", caption: "Machined cable drum, circumferential weld" },
          { type: "image", src: "assets/welding/relco-02.jpg", caption: "Checking a fillet with a weld gauge" },
          { type: "image", src: "assets/welding/ims-02.jpg", caption: "Grooved cable drum" },
          { type: "image", src: "assets/welding/ims-03.jpg", caption: "Drum assembly ready to ship" },
          { type: "image", src: "assets/welding/ims-04.jpg", caption: "Multi-pass groove weld" },
          { type: "image", src: "assets/welding/ims-05.jpg", caption: "Fillet weld" },
          { type: "image", src: "assets/welding/ims-06.jpg", caption: "Bend test: no cracking" },
          { type: "image", src: "assets/welding/ims-07.jpg", caption: "Bend test coupons" },
          { type: "image", src: "assets/welding/ims-08.jpg", caption: "Shaft weld" }
        ]
      },
      {
        title: "Tube-frame chassis · Red Raider Racing",
        items: [
          { type: "image", src: "assets/projects/fsae-fab/node-01.jpg", caption: "Chassis node" },
          { type: "image", src: "assets/projects/fsae-fab/node-02.jpg", caption: "Chassis node" },
          { type: "image", src: "assets/projects/fsae-fab/cover.jpg", caption: "Finished frame" }
        ]
      }
    ],
    certs: [
      { label: "AWS TIG, MIG & Stick certified (2021–2025)" },
      { label: "OSHA 30-Hour & 10-Hour" }
    ]
  },

  experience: [
    { org: "L3Harris", role: "Mechanical Design Engineer Intern", when: "Summer 2027 · incoming", where: "Waco, TX", text: "Incoming design engineering internship." },
    { org: "The Beck Group", role: "Construction Intern", when: "May – Aug 2026", where: "", text: "Coordinated 20+ MEP trade packages with architects, engineers and subcontractors in Procore and Bluebeam, resolving design and field issues to cut rework. Saved the company $1,000+ by reviewing drawings, specs, RFIs, submittals and PCOs.",
      photos: [
        { type: "image", src: "assets/images/beck-01.jpg", caption: "On site" },
        { type: "image", src: "assets/images/beck-02.jpg", caption: "Structure going up" }
      ] },
    { org: "TechStar", role: "Engineering Intern", when: "May – Aug 2025", where: "", text: "Used laser spectroscopy to identify gas types and concentrations to ±2% across 40+ miles of pipeline." },
    { org: "Red Raider Racing", role: "Cooling Design Lead · Lead Welder", when: "Fall 2025 – present", where: "Texas Tech", text: "Lead the cooling system of the FSAE EV and weld the team's chassis. Competed at Formula SAE Michigan (EV), Summer 2026." },
    { org: "Associated General Contractors", role: "Vice President", when: "Spring 2026 – present", where: "Texas Tech chapter", text: "Led two site visits to local construction companies; competed in TEXO and DBIA design-build competitions." },
    { org: "RELCO", role: "Pharmaceutical Welder", when: "Jul 2022 – Jun 2024", where: "", text: "Led two-person field teams diagnosing and fixing mechanical issues at dairy processing plants, and worked with plant managers to cut downtime by up to 20%." },
    { org: "IMS Industries", role: "Structural Welder / Fitter", when: "Sep 2020 – Jul 2022", where: "", text: "Fabricated drums and load blocks for overhead cranes to AWS D1.1 with zero rejected welds, working from blueprints and weld maps for 50+ ton systems." }
  ],

  education: [
    { school: "Texas Tech University", what: "B.S. Mechanical Engineering · 4.0 GPA", when: "Expected Spring 2028" },
    { school: "Tarrant County College", what: "Mechanical Engineering · 3.67 GPA", when: "Transferred Summer 2025" },
    { school: "Universal Technical Institute", what: "Metallurgical Processes · 4.0 GPA", when: "Graduated September 2022" }
  ],

  skills: ["SolidWorks", "FEA & CFD simulation", "MIG · TIG · Stick · sub-arc", "CNC & plasma cutting", "Oxyacetylene", "Procore & Bluebeam", "Excel · Word · PowerPoint", "Team leadership"],
  interests: "working out, rock climbing, hiking, camping and reading."
};
