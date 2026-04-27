export const portfolioData = {
    global: {
        operatorName: "Moaz",
        title: "Game Developer",
        brandName: "Moaz",
        copyrightYear: "2026",
        copyrightText: "PILTOVER ARCHIVES // MANA_STABILIZED"
    },
    navLinks: [
        { id: "hub", label: "HOME", icon: "home" },
        { id: "arsenal", label: "ARSENAL", icon: "precision_manufacturing" },
        { id: "alchemy", label: "ALCHEMY", icon: "science" },
        { id: "chronicles", label: "CHRONICLES", icon: "menu_book" },
        { id: "valve", label: "VALVE", icon: "settings_input_component" }
    ],
    hub: {
        operatorId: "OPERATOR_01",
        status: "Core Stabilized",
        centralImage: `${import.meta.env.BASE_URL}arcane-circle.png`,
        navigation: [
            {
                id: "arsenal",
                title: "ARSENAL",
                subtitle: "WEAPONS_&_TECH_VAULT",
                icon: "precision_manufacturing",
                description: "Access stabilized project records and schematics.",
                route: "/arsenal"
            },
            {
                id: "chronicles",
                title: "CHRONICLES",
                subtitle: "BIOGRAPHICAL_DATA_STREAM",
                icon: "menu_book",
                description: "Review operator origins and directive parameters.",
                route: "/chronicles"
            },
            {
                id: "valve",
                title: "VALVE",
                subtitle: "COMMUNICATION_LINK",
                icon: "settings_input_component",
                description: "Establish terminal link for encrypted transmission.",
                route: "/valve"
            }
        ]
    },
    archive: {
        headerTitle: "THE ARCHIVE VAULT",
        headerSubtitle: "STABILIZED_PROJECT_RECORDS // ACCESS_GRANTED",
        projects: [
            {
                id: 1,
                title: "War Ships",
                description: "Pirates Game.",
                image: "https://img.itch.zone/aW1nLzI0NjQ4MzQ2LnBuZw==/347x500/jXddXb.png",
                date: "2025",
                stack: "Unity // C#",
                icon: "skull",
                widthClass: "w-[30%]"
            },
            {
                id: 2,
                title: "Kitchen Chaos",
                description: "Cooking Game",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2W5GmoNlfzHHZ-cUYQdN6XvZiG-zQ_REYDcQL_5Ooo7yPjRj9_75WseyM_74MY1TKk7mw-IPLXPj0cBPIIqycOV6LlePcCY5qzblfxy-oKEx_Mfff074k7X_Llw7EQ1xqHnreuZJMbCmc3qP-d28C_Ekos21LOIMJxgalvECxJ4H_-CloSxSFGKCD1I5_fddPT9QIwZm0QgjuTg4FK2-LrERZIA0N98pbuq82w0DRPEXZ8VeLzLAZv-OAzWzB1aG5a1KR-sL1xZXA",
                status: "DEPLOYED",
                stack: "Unity // C#",
                icon: "lock_open",
                widthClass: "w-[100%]"
            },
            {
                id: 3,
                title: "Upcoming...",
                description: "",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzu8a_eO0C8CEQVE4V3cxuNyAV2IUtNEJhlVpH5wmgWaWCFucyzIA2bLSAg-1BiQN7wNn6dAdzdg4iMtSdVjmrwNGfdbUFUFhtvuK_tbXi0Fij6KKqz9RLKeqaOwbDoafzHc011R92NjkyAF7zvC5cq4C5aIaUhkS9C8sgkPYzQqC8PxEAZRQ-ZOL2eFWpJoazgVzow6_sqqWr2OikVvUC_JC2t8LWHQBkjddsMp_B6Wm1D-FYSLx6rzmK3HFxhNlT08JWezMUbh91",
                icon: "lock",
                widthClass: "w-[0%]"
            }
        ]
    },
    chronos: {
        headerTitle: "CHRONOS_ARCHIVE",
        headerSubtitle: "BIOGRAPHICAL_DATA_STREAM :: ACTIVE",
        portraitImage: "https://www.linkedin.com/in/moaz-nasser-a81a24388/",
        portraitLensImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPHHCTkRgAj8NiiZKc2FYXYwx32pCFZfIwiTflPav7A1akwPIho-GOlzHEsEeXuyOLCZNqSvgRb55cp_aJjAfEGDQU68A78f0Kiv0mvHJeyzy29duCUHlx0zpxxAJDVTecpkNso3TlcZZaolJ26IGu6zz97zPWHizqJwaJVh7F8FdNsNVft5naBU2-uDQWW2YBm3MhgNGDM5BViu7tI3WbBL03dy6yqthRdIlralDk4qrVANGtmfJ17nz8LYtoJnW6d3sA3c61KxZ",
        metrics: [
            { label: "Unity", value: 70, colorClass: "bg-gradient-to-r from-on-tertiary-container to-primary-container", shadowClass: "shadow-[0_0_10px_rgba(0,229,255,0.8)]" },
            { label: "C#", value: 44, colorClass: "bg-gradient-to-r from-secondary-container to-secondary", shadowClass: "" }
        ],
        biography: {
            title: "Origin & Directives",
            paragraphs: [
                "Unity Game Developer focused on building responsive gameplay systems, multiplayer interactions, and scalable mechanics using <span class=\"text-primary-container font-code-data px-1 border border-primary-container/30 bg-primary-container/10\">C#</span>. Experience includes Unity Netcode, event-driven architecture, and performance-oriented design.",
                "Currently, I work as a PR at <span class=\"text-primary-container font-code-data px-1 border border-primary-container/30 bg-primary-container/10\">FCAI GD CLUB</span>"
            ],
            logId: "CHR-0092",
            encryptionLevel: "LEVEL_IV"
        },
        skills: [
            { title: "Unity", icon: "gamepad" },
            { title: "AI", icon: "bolt" },
            { title: "C#", icon: "data_object" },
            { title: "Programmer", icon: "code" }
        ]
    },
    techTree: {
        headerTitle: "Skills Tree",
        headerSubtitle: "Skills I Have Developed Over Time.",
        systemStatus: "OPTIMAL",
        nodes: [
            {
                id: 1,
                title: "C#",
                icon: "memory",
                output: 60,
                cost: "1200 RESONANCE",
                description: "Enhances raw data throughput between neural implants and the Aether Core. Upgrading this node increases passive mana regeneration and lowers cognitive load during complex alchemical synthesis.",
                status: "active"
            },
            {
                id: 2,
                title: "Unity",
                icon: "hub",
                output: 70,
                status: "partial"
            },
            {
                id: 3,
                title: "Shaders",
                icon: "lock",
                status: "insufficient"
            },
            {
                id: 4,
                title: "UI/UX",
                icon: "speed",
                output: 50,
                status: "active"
            }
        ]
    },
    signal: {
        headerTitle: "Signal Array",
        headerSubtitle: "TERMINAL_LINK // ESTABLISHED",
        form: {
            idPlaceholder: "ENTER ALIAS",
            emailPlaceholder: "COMMS@NODE.NET",
            messagePlaceholder: "AWAITING INPUT SEQUENCE...",
            formEndpoint: "https://formspree.io/f/xeevwvkb"
        }
    }
};
