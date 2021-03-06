const chipTheme = {
  chip: {
    background: "#1065bb",
    padding: '0.4em 0.6em',
    fontSize: '1rem',
    color: 'white',
    // marginRight: '0.5rem',
    fontFamily: 'Nunito'
  },
  chipRemove: {
    ':hover': {
      color: 'lightblue',
    },
    marginLeft: '0.5rem'
  }
}
const theme = {
  chipsContainer: {
    display: "flex",
    position: "relative",
    border: "1px solid #ccc",
    backgroundColor: '#fff',
    font: "13.33333px Arial",
    minHeight: 24,
    alignItems: "center",
    flexWrap: "wrap",
    padding: "2.5px",
    borderRadius: 5,
    ':focus': {
      border: "1px solid #aaa",
    }
  },
  container: {
    flex: 1,
  },
  containerOpen: {

  },
  input: {
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    padding: 5,
    margin: 2.5
  },
  suggestionsContainer: {

  },
  suggestionsList: {
    position: 'absolute',
    border: '1px solid #ccc',
    zIndex: 10,
    left: 0,
    top: '100%',
    width: '100%',
    backgroundColor: '#fff',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxHeight: '300px',
    overflowY: 'scroll'
  },
  suggestion: {
    padding: '0.5em 1em',
    fontSize: '1rem'
  },
  suggestionHighlighted: {
    background: 'rgba(16, 101, 187, 0.75)',
    color: 'white'
  }
}

const techTags = [".NET Core", ".NET Framework", ".NET MVC", "3D", "Ab Initio", "Abacus", "Ada", "Adobe CS", "AEM", "Airflow", "Amazon DocumentDB", "ABAP", "AJAX", "API", "Appium", "ASP.NET", "AWS", "Active Directory", "ActiveMQ", "Airlock", "Akka", "Android",
  "Angular", "Ansible", "Apache Camel", "Apache CXF", "Apache HTTP Server", "Apollo", "Architect", "Aruba", "Asterisk", "Atlassian", "Avaloq", "AUTOSAR", "Azure", "Big Data", "BigQuery", "BPMN", "BSD ", "BSI CRM", "Backbone", "Backend", "Bamboo", "Bash", "Beanstalk", "BitTalk", "BitBucket", "Blazor", "Blockchain", "Bluetooth",
  "Bootstrap", "Business Intelligence", "C", "C#", "C++", "CakePHP", "Camunda", "CAN", "CI/CD", "Citrix", "Cloud", "CMS", "Cosmos DB", "Craft CMS", "CQRS", "CSS", "Cassandra", "Celery", "Ceph", "Cisco", "Clojure", "Cloud Foundry", "Composer", "Computer Vision", "Confluence", "Cordova",
  "CRM", "Cucumber", "CUDA", "Cypress", "D3", "DDD", "DDN", "Dagger", "DApps", "Dapper", "Dart", "Data-Science", "Data Vault", "Data Warehouse", "Delphi", "DevExpress", "DevOps", "Django", "Docker", "Drupal", "E2E", "EC2", "ELK", "ES6", "ESB", "ETL", "Eclipse", "Eclipse Scout",
  "ElasticSearch", "Electron", "Elixir", "Elm", "Embedded", "Embedded WebServer", "Ember", "ERP", "EPCIS", "Erlang", "ExpressJS", "ESLint", "Ethereum", "Ethernet", "F#", "FPGA", "Fastlane", "Figma", "Firebase", "Firewall", "Fivetran", "FortiGate", "Flask", "Flexray", "Flink",
  "Flutter", "Frontend", "Fullstack", "GameDev", "Gatsby", "GCP", "Genesys", "GIS", "GNU", "Git", "GitHub", "GitLab", "Golang", "Gradle", "Grafana", "GraphQL", "Graph Database", "Groovy", "Grunt", "GUI Programming", "Gulp", "H2", "Handlebars", "HSM", "HTTP", "HTML5", "Haskell", "Helm", "Heroku",
  "Hibernate", "HL7", "IAM", "IBM", "IBM Db2", "IBM Mainframe", "IBM Spectrum", "IBM WebSphere", "ICT", "IaaS", "IdentityIQ", "IDoc", "Indesign", "InfiniBand", "Infor LN", "Informatica", "IntelliJ", "InVision", "Ionic", "IoT", "IT Support", "JBoss", "JHipster", "JIRA", "JPA", "JSON", "JSP", "JUnit", "Jupyter", "JWT", "Jasmine", "Java", "Java EE",
  "JavaFX", "JavaScript", "Jenkins", "Jest", "K2", "Kafka", "Kanban", "Karma", "Keras", "Kotlin", "Kubernetes", "LDAP", "LESS", "Laravel", "Leaflet", "Linux", "Liquibase", "Load Balancing", "Looker", "LWC",
  "MS-SQL", "Machine Learning", "Magento", "MariaDB", "Marketing", "Marvel", "Material UI", "Matlab", "Maven", "MediaWiki", "Mesos", "Meteor", "Microsoft BizTalk Server", "Microsoft Dynamics 365 CRM", "Mustache",
  "Mobile", "MongoDB", "MS Teams", "MQTT", "MVC", "MVVM", "MySQL", "NAT", "Neo4J", "Network", "NextJS", "Nexus", "NFC", "NFS", "Nginx", "NHibernate", "NodeJS", "NoSQL", "NuxtJS", "ODI", "OSS", "OWASP", "Objective-C", "Odoo", "Office 365", "Open-E JovianDSS", "OpenGL", "OpenShift", "OpenStack",
  "Oracle", "PHP", "PL SQL", "PWA", "PaaS", "Pardot", "Perl", "Phoenix", "Pimcore", "Play Framework", "Polymer", "PostgreSQL", "Postman", "Power BI", "PowerShell", "Prometheus", "Product Manager", "Product Owner", "Project Manager", "Puppet", "PyTorch",
  "Python", "QA Testing", "Quobyte", "Qt", "Quarkus", "RDF", "RDMA", "REST", "ReSharper", "RBAC", "RHEL", "ROS", "RPA", "RSpec", "RabbitMQ", "Rails", "React", "React Native", "ReactiveX", "Redgate", "Redis",
  "Redux", "Robot Framework", "RS-485", "Ruby", "Rust", "RxJs", "RxSwift", "SAML", "SAP", "SAP Analytics Designer", "SAP Commerce", "SAP Fiori", "SAP Lumira", "SAP Web Intelligence", "SAS", "SASS", "SCSS", "SOAP", "SQL", "SQLite", "SailsJS", "Salesforce", "Scala", "Security", "Sensor Fusion", "SMB",
  "Selenium", "Sentry", "Serverless", "ServiceNow", "SharePoint", "Shopware", "Shopify", "Siebel", "SignalR", "Sitecore", "Sketch", "Slack", "Solr", "Sonar", "Spark", "Splunk", "Spring", "Spring Boot", "Spryker", "SSAS", "SSIS", "strapi", "Svelte", "Swagger", "Swift", "Swing", "Symfony",
  "System Engineer", "SystemVerilog", "Tableau", "Talend", "TCP/IP", "TDD", "TSQL", "TYPO3", "Teamcity", "TensorFlow", "Terraform", "Three.js", "Tomcat", "Tosca", "TypeScript", "Twig", "UML", "Ubuntu", "UIKit",
  "UiPath", "Uniface", "Unix", "Unity", "Unreal", "UVM", "UX UI Design", "VBA", "VPN", "VMware", "VR", "Vaadin", "Vagrant", "Veeam", "Verilog", "VHDL", "Video Streaming", "Visual Paradigm", "Visual Studio", "VS Code", "Vue", "WAF", "WPF", "Web3", "WebGL", "Webpack", "WebServices",
  "Websphere", "Web", "Windows", "Windows Forms", "Wix", "WordPress", "Xcode", "XML", "XP", "XPath", "XState", "Xamarin", "Yarn", "Zend", "Zeplin", "Zookpeeper", "dbt", "gRPC", "iOS", "jQuery",
  "microservices", "numpy", "opencv", "pandas", "pytest", "styled-components"]

const perkTags = ["4 weeks vacation", "35-hour work week", "40-hour work week", "42-hour work week", "45-hour work week", "5 weeks vacation", "6 weeks vacation",
  "Accident insurance", "AC cooler", "Annual company retreat", "Beer", "Bonus pay", "Career paths and annual reviews", "Childcare support", "Choose your hardware", "Coffee, tea", "Collective wage agreement", "Company parking", "Company workshops and knowledge sharing",
  "Conferences", "Cool office", "Discounts for company products", "Equity or company stock", "Extra retirement contribution", "Flexible work time", "Free lunch", "Fresh fruits", "Fully home office / remote work", "Gym membership",
  "Home office / Remote 1 day per week", "Individual educational training budget", "International team", "Maternity/Paternity leave", "Mobile phone subscription", "Part-time possible",
  "Ping-pong table", "Pizza Day", "Public transport GA Travelcard", "Public transport Half-Fare", "Relocation support", "Sabbatical possibility", "Standing desk", "Startup culture",
  "Sweets in the kitchen", "Table football", "Team social events", "Quiet office", "Vacation Bonus", "Well connected office"]

const siteSpecificPerkTagsTranslated = {
  SDJ: {
    en: {
      gatravel: "Public transport GA Travelcard",
      halffare: "Public transport Half-Fare",
    },
    de: {
      gatravel: "Öffentliche Verkehrsmittel GA",
      halffare: "Öffentliche Verkehrsmittel Halbtax",
    },
    fr: {
      gatravel: "Transport public l'abonnement général",
      halffare: "Transport public l’abonnement demi-tarif",
    }
  },
  GDJ: null,
  RDJ: {
    en: {
      bookster: "Bookster subscription"
    },
    ro: {
      bookster: "Abonament Bookster"
    }
  },
  UKJ: null
}

const perkTagsTranslated = {
  en: {
    weeksvacation4: "4 weeks vacation",
    weeksvacation5: "5 weeks vacation",
    weeksvacation6: "6 weeks vacation",
    accinsurance: "Accident insurance",
    wweek35: "35-hour work week",
    wweek40: "40-hour work week",
    wweek42: "42-hour work week",
    wweek45: "45-hour work week",
    accooler: "AC cooler",
    retreat: "Annual company retreat",
    beer: "Beer",
    bonuspay: "Bonus pay",
    careerpath: "Career paths and annual reviews",
    childcare: "Childcare support",
    hardware: "Choose your hardware",
    coffee: "Coffee, tea",
    wageagree: "Collective wage agreement",
    companycar: "Company car",
    coparking: "Company parking",
    coworkshops: "Company workshops and knowledge sharing",
    conferences: "Conferences",
    cooloffice: "Cool office",
    discounts: "Discounts for company or external products",
    equity: "Equity or company stock",
    extraretirement: "Extra retirement contribution",
    flexiblework: "Flexible work time",
    freelunch: "Free lunch",
    freshfruits: "Fresh fruits",
    gym: "Gym membership",
    remotefull: "Fully home office / remote work",
    holidaybonus: "Holiday bonus",
    remote1day: "Home office / Remote 1 day per week",
    remote2day: "Home office / Remote 2 days per week",
    individualbudget: "Individual educational training budget",
    intteam: "International team",
    maternity: "Maternity/Paternity leave",
    phonesub: "Mobile phone subscription",
    parttime: "Part-time possible",
    pingpong: "Ping-pong table",
    pizza: "Pizza Day",
    privatehealth: "Private healthcare insurance",
    publictransport: "Public transport tickets",
    relaxroom: "Relax / Chillout room",
    relocation: "Relocation support",
    parentsroom: "Parent-child room",
    sabbatical: "Sabbatical possibility",
    standingdesk: "Standing desk",
    startupculture: "Startup culture",
    sweets: "Snacks & drinks",
    tablefoot: "Table football",
    teamevents: "Team social events",
    quietoffice: "Quiet office",
    vacationbonus: "Vacation Bonus",
    wellconnected: "Well connected office",
    workscouncil: "Works council",
  },
  de: {
    weeksvacation4: "4 Wochen Urlaub",
    weeksvacation5: "5 Wochen Urlaub",
    weeksvacation6: "6 Wochen Urlaub",
    accinsurance: "Unfallversicherung",
    wweek35: "35-Stunden Arbeitswoche",
    wweek40: "40-Stunden Arbeitswoche",
    wweek42: "42-Stunden Arbeitswoche",
    wweek45: "45-Stunden Arbeitswoche",
    accooler: "AC-Kühler",
    retreat: "Jährlicher Firmenretreat",
    beer: "Bier",
    bonuspay: "Bonuszahlung",
    careerpath: "Karriereweg und Jahresrückblick",
    childcare: "Kinderbetreuung",
    hardware: "Hardware-Wahl",
    coffee: "Kaffee, Tee",
    wageagree: "Tarifvertrag",
    companycar: "Firmenwagen",
    coparking: "Firmenparkplatz",
    coworkshops: "Workshops und Wissensaustausch",
    conferences: "Konferenzen",
    cooloffice: "Cooles Büro",
    discounts: "Rabatte für Firmenprodukte oder andere Produkte",
    equity: "Unternehmensaktien",
    extraretirement: "Betriebliche Altersvorsorge",
    flexiblework: "Flexible Arbeitszeit",
    freelunch: "Gratis Mittagessen",
    freshfruits: "Frische Früchte",
    gym: "Fitness-Studio-Abonnement",
    remotefull: "Vollständig Home Office / Remote-Arbeit",
    holidaybonus: "Urlaubsbonus",
    remote1day: "Home Office / Remote 1 Tag pro Woche",
    remote2day: "Home Office / Remote 2 Tage pro Woche",
    individualbudget: "Individuelles Bildungsbudget",
    intteam: "Internationales Team",
    maternity: "Mutterschafts- / Vaterschaftsurlaub",
    phonesub: "Handy-Abonnement",
    parttime: "Teilzeit möglich",
    pingpong: "Tischtennis",
    pizza: "Pizzatag",
    privatehealth: "Private Krankenversicherung",
    publictransport: "Jobticket",
    relaxroom: "Chillout-Raum",
    parentsroom: "Eltern-Kind-Raum",
    relocation: "Umzugsunterstützung",
    sabbatical: "Sabbatical Möglichkeit",
    standingdesk: "Stehschreibtisch",
    startupculture: "Startup-Kultur",
    sweets: "Snacks & Getränke",
    tablefoot: "Tischfussball",
    teamevents: "Teamevents",
    quietoffice: "Ruhiges Büro",
    vacationbonus: "Urlaubsbonus",
    wellconnected: "Gut vernetztes Büro",
    workscouncil: "Betriebsrat",
  },
  fr: {
    weeksvacation4: "4 semaines de vacances",
    weeksvacation5: "5 semaines de vacances",
    weeksvacation6: "6 semaines de vacances",
    accinsurance: "Assurance d'accident",
    wweek35: "Semaine de travail de 35 heures",
    wweek40: "Semaine de travail de 40 heures",
    wweek42: "Semaine de travail de 42 heures",
    wweek45: "Semaine de travail de 45 heures",
    accooler: "Refroidisseur AC",
    retreat: "Retraite annuelle d'entreprise",
    beer: "Bière",
    bonuspay: "Paiement de bonus",
    careerpath: "Parcours professionnel et bilan annuel",
    childcare: "Aide à la garde d'enfants",
    hardware: "Choix du matériel",
    coffee: "Café, thé",
    wageagree: "Convention collective salariale",
    companycar: "Voiture de société",
    coparking: "Parking d'entreprise",
    coworkshops: "Ateliers et partage des connaissances",
    conferences: "Conférences",
    cooloffice: "Bureau cool",
    discounts: "Réductions sur les produits de l'entreprise",
    equity: "Actions de l'entreprise",
    extraretirement: "Cotisation retraite supplémentaire",
    flexiblework: "Temps de travail flexible",
    freelunch: "Repas gratuit",
    freshfruits: "Fruits frais",
    gym: "Abonnement fitness",
    remotefull: "Bureau entièrement à domicile / travail à distance",
    holidaybonus: "Bonus vacances",
    remote1day: "Bureau à domicile / à distance 1 jour par semaine",
    remote2day: "Bureau à domicile / à distance 2 jours par semaine",
    individualbudget: "Budget individuel de formation pédagogique",
    intteam: "Equipe internationale",
    maternity: "Congé de maternité / paternité",
    phonesub: "Abonnement téléphone mobile",
    parttime: "Temps partiel possible",
    pingpong: "Ping pong",
    pizza: "Journée de la pizza",
    privatehealth: "L'assurance santé privée",
    publictransport: "Billets de transports en commun",
    relaxroom: "Salle de détente",
    relocation: "Aide à la réinstallation",
    parentsroom: "Chambre parent-enfant",
    sabbatical: "Possibilité sabbatique",
    standingdesk: "Bureau debout",
    startupculture: "Culture de démarrage",
    sweets: "Snacks et boissons",
    tablefoot: "Babyfoot",
    teamevents: "Evénements d'équipe",
    quietoffice: "Bureau calme",
    vacationbonus: "Bonus de vacances",
    wellconnected: "Bureau bien connecté",
    workscouncil: "Comité d'entreprise",
  },
  nl: {
    weeksvacation4: "4 weken vakantie",
    weeksvacation5: "5 weken vakantie",
    weeksvacation6: "6 weken vakantie",
    accinsurance: "Ongevallenverzekering",
    wweek35: "35-urige werkweek",
    wweek40: "40-urige werkweek",
    wweek42: "42-urige werkweek",
    wweek45: "45-urige werkweek",
    accooler: "AC-koeler",
    retreat: "Jaarlijks bedrijfsuitje",
    beer: "Bier",
    bonuspay: "Bonusbetaling",
    careerpath: "Loopbaantrajecten en jaaroverzichten",
    childcare: "Kinderopvang ondersteuning",
    hardware: "Kies je hardware",
    coffee: "Koffie, thee",
    wageagree: "Collectieve loonovereenkomst",
    companycar: "Bedrijfswagen",
    coparking: "Bedrijfsparkeren",
    coworkshops: "Bedrijfsworkshops en kennisdeling",
    conferences: "Conferenties",
    cooloffice: "Cool kantoor",
    discounts: "Kortingen voor bedrijfs- of externe producten",
    equity: "Aandelen of bedrijfsaandelen",
    extraretirement: "Extra pensioenbijdrage",
    flexiblework: "Flexibele werktijd",
    freelunch: "Gratis lunch",
    freshfruits: "Vers fruit",
    gym: "Gym lidmaatschap",
    remotefull: "Volledig thuiskantoor / werken op afstand",
    holidaybonus: "Vakantiebonus",
    remote1day: "Thuiskantoor / Op afstand 1 dag per week",
    remote2day: "Thuiskantoor / 2 dagen per week op afstand",
    individualbudget: "Individueel opleidingsbudget",
    intteam: "Internationaal team",
    maternity: "Zwangerschaps-/vaderschapsverlof",
    phonesub: "Mobiele telefoon abonnement",
    parttime: "Parttime mogelijk",
    pingpong: "Ping-pong tafel",
    pizza: "Pizzadag",
    privatehealth: "Particuliere zorgverzekering",
    publictransport: "Bedrijfs OV-chipkaart",
    relaxroom: "Ontspan / Chillout-ruimte",
    relocation: "Ondersteuning bij verhuizing",
    parentsroom: "Ouder-kind kamer",
    sabbatical: "Sabbatical mogelijkheid",
    standingdesk: "Sta bureau",
    startupculture: "Startup cultuur",
    sweets: "Hapjes & drankjes",
    tablefoot: "Tafelvoetbal",
    teamevents: "Sociale teamevenementen",
    quietoffice: "Rustig kantoor",
    vacationbonus: "Vakantiebonus",
    wellconnected: "Goed bereikbare kantoorlocatie",
    workscouncil: "Ondernemingsraadslid",
  },
  ro: {
    weeksvacation4: "4 saptamani de vacanta",
    weeksvacation5: "5 saptamani de vacanta",
    weeksvacation6: "6 saptamani de vacanta",
    accinsurance: "Asigurarea pentru accidente",
    wweek35: "35 de ore saptamana de lucru",
    wweek40: "40 de ore saptamana de lucru",
    wweek42: "42 de ore saptamana de lucru",
    wweek45: "45 de ore saptamana de lucru",
    accooler: "Aer conditionat",
    retreat: "Evenimente de teambuilding",
    beer: "Bere",
    bonuspay: "Bonus de performanta",
    careerpath: "Valuare anuala si dezvoltare cariera",
    childcare: "Sprijin pentru ingrijirea copiilor",
    hardware: "Alegerea hardware-ului (ex tip laptop)",
    coffee: "Cafea, ceai",
    wageagree: "Contract de munca colectiv",
    companycar: "Masina de firma",
    coparking: "Parcare pentru auto personal",
    coworkshops: "Workshop-uri si schimb de cunostinte",
    conferences: "Conferinte",
    cooloffice: "Birou grozav",
    discounts: "Reduceri pentru produsele companiei",
    equity: "Pachet de actiuni",
    extraretirement: "Contributie suplimentara pensie",
    flexiblework: "Program de munca flexibil",
    freelunch: "Pranz gratuit",
    freshfruits: "Fructe proaspete",
    gym: "Abonament fitness",
    remotefull: "Birou la domiciliu / munca de la distanta",
    holidaybonus: "Prima de sarbatori",
    remote1day: "Home office / Remote 1 zi pe saptamana",
    remote2day: "Birou la domiciliu / munca de la distanta 2 zile pe saptamana",
    individualbudget: "Buget individual de formare educationala",
    intteam: "Echipa internationala",
    maternity: "Concediu de maternitate / paternitate",
    phonesub: "Abonament telefon mobil",
    parttime: "Posibil cu jumatate de norma",
    pingpong: "Tenis de masa",
    pizza: "Ziua Pizza",
    privatehealth: "Abonament medical",
    publictransport: "Subventie transport public",
    relaxroom: "Zona de relaxare",
    relocation: "Sprijin pentru relocare",
    parentsroom: "Camera parinte-copil",
    sabbatical: "Posibilitate pauza sabatica",
    standingdesk: "Birou dinamic, la alegere",
    startupculture: "Cultura de startup",
    sweets: "Gustari si bauturi",
    tablefoot: "Fussball",
    teamevents: "Evenimente de echipa",
    quietoffice: "Birou linistit",
    vacationbonus: "Bonus de vacanta",
    wellconnected: "Birou bine conectat",
    workscouncil: "Consiliul de lucru",
  },
}

const getPerkTagsWithSiteSpecificTags = (siteName) => {
  const thisSiteTags = siteSpecificPerkTagsTranslated[siteName]
  if (thisSiteTags) {
    return {
      en: { ...perkTagsTranslated.en, ...thisSiteTags.en },
      de: { ...perkTagsTranslated.de, ...thisSiteTags.de },
      fr: { ...perkTagsTranslated.fr, ...thisSiteTags.fr },
      ro: { ...perkTagsTranslated.ro, ...thisSiteTags.ro },
    }
  }
  return perkTagsTranslated
}

const specialExtractTag = (searchFor, tagToAdd, foundTechTags, textsToTest) => {
  const reg = new RegExp('[\\W_]+(' + searchFor.toLowerCase() + ')[\\W_]+', 'g')//matchTechTagSurroundedByNonLetters
  if (textsToTest.some(text => reg.test(text))) {
    foundTechTags.add(tagToAdd)
  }
}

const extractTechTagsFrom = (jobForm, techTags) => {
  const lowCaseJobDescription = jobForm.description ? jobForm.description.toLowerCase() : ""
  const lowCaseRequirements = jobForm.requirementsMustTextArea ? jobForm.requirementsMustTextArea.toLowerCase() : ""
  const lowCaseNiceToHave = jobForm.requirementsNiceTextArea ? jobForm.requirementsNiceTextArea.toLowerCase() : ""
  const lowCaseResponsibilities = jobForm.responsibilitiesTextArea ? jobForm.responsibilitiesTextArea.toLowerCase() : ""
  const stringsToTest = [lowCaseJobDescription, lowCaseRequirements, lowCaseNiceToHave, lowCaseResponsibilities]

  const foundTechTags = extractTechTagsFromStringArray(stringsToTest, techTags)
  techTags.forEach(techTag => {
    const lowCaseTechTag = techTag.toLowerCase()
    jobForm.technologies && jobForm.technologies.forEach(tech => { if (tech.toLowerCase() === lowCaseTechTag) foundTechTags.add(techTag) })
    if (jobForm.techCategory && jobForm.techCategory.toLowerCase() === lowCaseTechTag) foundTechTags.add(techTag)
  })
  if (jobForm.techCategory === "Dev-Ops") foundTechTags.add("DevOps")
  if (jobForm.techCategory === "UI-UX-Designer") foundTechTags.add("UX UI Design")
  const name = jobForm.name && jobForm.name.toLowerCase() || ""
  if (name.includes('fullstack') || name.includes('full-stack') || name.includes('full stack')) foundTechTags.add("Fullstack")
  if (name.includes('frontend') || name.includes('front-end') || name.includes('front end')) foundTechTags.add("Frontend")
  if (name.includes('backend') || name.includes('back-end') || name.includes('back end')) foundTechTags.add("Backend")
  if (name.includes('game')) foundTechTags.add("GameDev")
  if (name.includes('web')) foundTechTags.add("Web")
  foundTechTags.delete("CAN")
  return [...foundTechTags]
}

const extractTechTagsFromStringArray = (stringsToTest, techTags) => {
  let foundTechTags = new Set()

  techTags.forEach(techTag => {
    const lowCaseTechTag = techTag.toLowerCase()
    if (techTag !== 'C++') {
      const reg = new RegExp('[\\W_]+(' + lowCaseTechTag + ')[\\W_]+', 'g')//matchTechTagSurroundedByNonLetters
      if (stringsToTest.some(text => reg.test(text))) {
        foundTechTags.add(techTag)
      }
    }
  })
  specialExtractTag("Test Driven", "TDD", foundTechTags, stringsToTest)
  specialExtractTag("Domain Driven", "DDD", foundTechTags, stringsToTest)
  specialExtractTag("365", "Office 365", foundTechTags, stringsToTest)
  specialExtractTag("O365", "Office 365", foundTechTags, stringsToTest)
  specialExtractTag("Go", "Golang", foundTechTags, stringsToTest)
  specialExtractTag("UX", "UX UI Design", foundTechTags, stringsToTest)
  specialExtractTag("UI", "UX UI Design", foundTechTags, stringsToTest)
  specialExtractTag("JEE", "Java EE", foundTechTags, stringsToTest)
  specialExtractTag("J2EE", "Java EE", foundTechTags, stringsToTest)
  specialExtractTag(".NET", "ASP.NET", foundTechTags, stringsToTest)
  specialExtractTag("Node", "NodeJS", foundTechTags, stringsToTest)
  specialExtractTag("Node.js", "NodeJS", foundTechTags, stringsToTest)
  specialExtractTag("VueJS", "Vue", foundTechTags, stringsToTest)
  specialExtractTag("Vue.js", "Vue", foundTechTags, stringsToTest)
  specialExtractTag("Sails", "SailsJS", foundTechTags, stringsToTest)
  specialExtractTag("Express.js", "ExpressJS", foundTechTags, stringsToTest)
  specialExtractTag("GCP", "Cloud", foundTechTags, stringsToTest)
  specialExtractTag("AWS", "Cloud", foundTechTags, stringsToTest)
  specialExtractTag("Azure", "Cloud", foundTechTags, stringsToTest)
  specialExtractTag("Unity", "GameDev", foundTechTags, stringsToTest)
  specialExtractTag("Unreal", "GameDev", foundTechTags, stringsToTest)

  return foundTechTags
}

const extractPerksFrom = (jobForm, perkTags, companyData) => {
  let foundPerkTags = new Set(companyData.perks)
  const lowCaseJobDescription = jobForm.description ? jobForm.description.toLowerCase() : ""
  const stringsToTest = [lowCaseJobDescription].concat(companyData.perks)

  perkTags.forEach(perkTag => {
    const lowCasePerkTag = perkTag.toLowerCase()
    const reg = new RegExp('[\\W_]+(' + lowCasePerkTag + ')[\\W_]+', 'g')//matchTechTagSurroundedByNonLetters
    if (stringsToTest.some(text => reg.test(text))) {
      foundPerkTags.add(perkTag)
    }
  })
  specialExtractTag("events", "Team events", foundPerkTags, stringsToTest)
  specialExtractTag("retreat", "Annual company retreat", foundPerkTags, stringsToTest)
  specialExtractTag("fruits", "Fresh fruits", foundPerkTags, stringsToTest)
  specialExtractTag("sweets", "Sweets in the kitchen", foundPerkTags, stringsToTest)
  specialExtractTag("flexible work", "Flexible work time", foundPerkTags, stringsToTest)
  specialExtractTag("training", "Individual training budget", foundPerkTags, stringsToTest)
  specialExtractTag("startup", "Startup culture", foundPerkTags, stringsToTest)
  specialExtractTag("start-up", "Startup culture", foundPerkTags, stringsToTest)
  specialExtractTag("ping-pong", "Ping-pong table", foundPerkTags, stringsToTest)
  specialExtractTag("coffee", "Coffee, tea", foundPerkTags, stringsToTest)
  specialExtractTag("tea", "Coffee, tea", foundPerkTags, stringsToTest)

  return [...foundPerkTags]

}

module.exports = {
  techTags,
  perkTags,
  perkTagsTranslated,
  siteSpecificPerkTagsTranslated,
  getPerkTagsWithSiteSpecificTags,
  theme,
  chipTheme,
  extractTechTagsFrom,
  extractPerksFrom,
  extractTechTagsFromStringArray
}