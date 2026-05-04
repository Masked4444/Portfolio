export const portfolioData = {
    global: {
        operatorName: "Moaz Nasser",
        title: "Game Developer",
        brandName: "Moaz Nasser",
        copyrightYear: "2026",
        copyrightText: "MOAZ_PORTOFOLIO_SYSTEMS"
    },
    navLinks: [
        { id: "hub", label: "HOME", icon: "home" },
        { id: "arsenal", label: "PROJECTS", icon: "precision_manufacturing" },
        { id: "alchemy", label: "SKILLS", icon: "science" },
        { id: "chronicles", label: "ABOUT", icon: "menu_book" },
        { id: "valve", label: "CONTACT", icon: "settings_input_component" }
    ],
    hub: {
        operatorId: "OPERATOR_01",
        status: "Core Stabilized",
        centralImage: `${import.meta.env.BASE_URL}arcane-circle.png`,
        navigation: [
            {
                id: "arsenal",
                title: "PROJECTS",
                subtitle: "GAMES_I_MADE",
                icon: "precision_manufacturing",
                description: "Access stabilized project records and schematics.",
                route: "/arsenal"
            },
            {
                id: "chronicles",
                title: "ABOUT",
                subtitle: "BIOGRAPHICAL_DATA_STREAM",
                icon: "menu_book",
                description: "Review operator origins and directive parameters.",
                route: "/chronicles"
            },
            {
                id: "valve",
                title: "CONTACT",
                subtitle: "COMMUNICATION_LINK",
                icon: "settings_input_component",
                description: "Establish terminal link for encrypted transmission.",
                route: "/valve"
            }
        ]
    },
    archive: {
        headerTitle: "PROJECTS",
        headerSubtitle: "CAREER_HISTORY",
        projects: [
            {
                id: 1,
                title: "War Ships",
                description: "Pirates Game.",
                image: "https://img.itch.zone/aW1nLzI0NjQ4MzQ2LnBuZw==/347x500/jXddXb.png",
                date: "2025",
                stack: "Unity // C#",
                icon: "skull",
                widthClass: "w-[30%]",
                link: "https://moaz-nasser.itch.io/war"
            },
            {
                id: 2,
                title: "Kitchen Chaos",
                description: "Cooking Game",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2275820/capsule_616x353.jpg?t=1725190944",
                status: "DEPLOYED",
                stack: "Unity // C#",
                icon: "lock_open",
                widthClass: "w-[100%]",
                link: "https://moaz-nasser.itch.io/kitchen-chaos"
            },
            {
                id: 3,
                title: "Upcoming...",
                description: "New project in development.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzu8a_eO0C8CEQVE4V3cxuNyAV2IUtNEJhlVpH5wmgWaWCFucyzIA2bLSAg-1BiQN7wNn6dAdzdg4iMtSdVjmrwNGfdbUFUFhtvuK_tbXi0Fij6KKqz9RLKeqaOwbDoafzHc011R92NjkyAF7zvC5cq4C5aIaUhkS9C8sgkPYzQqC8PxEAZRQ-ZOL2eFWpJoazgVzow6_sqqWr2OikVvUC_JC2t8LWHQBkjddsMp_B6Wm1D-FYSLx6rzmK3HFxhNlT08JWezMUbh91",
                icon: "lock",
                widthClass: "w-[0%]",
                link: "#"
            }
        ]
    },
    chronos: {
        headerTitle: "ABOUT ME",
        headerSubtitle: "MY_STORY",
        portraitImage: "https://media.licdn.com/dms/image/v2/D4D03AQEi3KiflWXt_A/profile-displayphoto-scale_200_200/B4DZ3OUT62JsAY-/0/1777283024528?e=1778716800&v=beta&t=Qor6HqGcL7WSaekiRy0Lz0-TjUCBrOyuYnuVb2KOR9k",
        portraitLensImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPHHCTkRgAj8NiiZKc2FYXYwx32pCFZfIwiTflPav7A1akwPIho-GOlzHEsEeXuyOLCZNqSvgRb55cp_aJjAfEGDQU68A78f0Kiv0mvHJeyzy29duCUHlx0zpxxAJDVTecpkNso3TlcZZaolJ26IGu6zz97zPWHizqJwaJVh7F8FdNsNVft5naBU2-uDQWW2YBm3MhgNGDM5BViu7tI3WbBL03dy6yqthRdIlralDk4qrVANGtmfJ17nz8LYtoJnW6d3sA3c61KxZ",
        metrics: [
            { label: "Unity", value: 70, colorClass: "bg-gradient-to-r from-on-tertiary-container to-primary-container", shadowClass: "shadow-[0_0_10px_rgba(0,229,255,0.8)]" },
            { label: "C#", value: 44, colorClass: "bg-gradient-to-r from-secondary-container to-secondary", shadowClass: "" }
        ],
        biography: {
            title: "Origin & Directives",
            paragraphs: [
                "I am a Game Developer focused on building interactive games using <span class=\"text-primary-container font-code-data px-1 border border-primary-container/30 bg-primary-container/10\">Unity</span> & <span class=\"text-primary-container font-code-data px-1 border border-primary-container/30 bg-primary-container/10\">C#</span>. I enjoy working on game mechanics and turning simple ideas into playable experiences.",
                "I'm also a PR member at <span class=\"text-primary-container font-code-data px-1 border border-primary-container/30 bg-primary-container/10\">FCAI-CU Game Development Club</span>. I try to be active and help my colleagues with any help they need.",
                "Right now, I'm focusing on leveling up my Unity skills, building more complete projects, and getting deeper into game development.",
                "<span class=\"text-primary-container font-code-data px-1 border border-primary-container/30 bg-primary-container/10\">MY GOAL</span> is to keep improving & building games that people enjoy playing."
            ],
            logId: "MOAZ_NASSER",
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
        headerTitle: "CONTACT ME",
        headerSubtitle: "LEAVE_A_MESSAGE",
        form: {
            idPlaceholder: "ENTER YOUR NAME",
            emailPlaceholder: "[EMAIL_ADDRESS]",
            messagePlaceholder: "AWAITING INPUT...",
            formEndpoint: "https://formspree.io/f/xeevwvkb"
        }
    }
};
