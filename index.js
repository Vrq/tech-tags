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

const techTags = [".NET Core", ".NET Framework", ".NET MVC", "3D", "Abacus", "Ada", "Adobe CS", "AEM", "Airflow", "AJAX", "API", "Appium", "ASP.NET", "AWS", "Active Directory", "ActiveMQ", "Airlock", "Akka", "Android",
  "Angular", "Ansible", "Apache HTTP Server", "Apollo", "Asterisk", "Avaloq", "Azure", "BPMN", "BSD ", "BSI CRM", "Backbone", "Backend Development", "Bamboo", "Bamboo", "Bash", "Beanstalk", "BitTalk", "Blockchain", "Bluetooth",
  "Bootstrap", "C#", "C++", "CakePHP", "Camunda", "CI/CD", "Citrix", "Cloud", "CMS", "CQRS", "CSS", "Cassandra", "Celery", "Cisco", "Clojure", "Cloud Foundry", "Composer", "Computer Vision", "Confluence", "Cordova",
  "Cucumber", "CUDA", "Cypress", "D3", "DDD", "DDN", "Dagger", "Dapper", "Dart", "Data Vault", "Data Warehouse", "DevExpress", "DevOps", "Django", "Docker", "Drupal", "E2E", "EC2", "ELK", "ES6", "ESB", "ETL", "Eclipse", "Eclipse Scout",
  "ElasticSearch", "Electron", "Elixir", "Embedded", "Embedded WebServer", "Ember", "ERP", "EPCIS", "Erlang", "ExpressJS", "ESLint", "Ethernet", "F#", "FPGA", "Fastlane", "Figma", "Firebase", "Flask", "Flink",
  "Flutter", "Frontend Development", "Fullstack Development", "Game Development", "Gatsby", "GCP", "Genesys", "GIS", "GNU", "Git", "GitLab", "Golang", "Gradle", "Grafana", "GraphQL", "Groovy", "GUI Programming", "Gulp", "HSM", "HTTP", "Haskell", "Heroku",
  "Hibernate", "HL7", "IAM", "IBM", "IBM Db2", "IBM Spectrum", "IaaS", "IdentityIQ", "IDoc", "Indesign", "InfiniBand", "Infor LN", "InVision", "Ionic", "IT Support", "JBoss", "JHipster", "JIRA", "JPA", "JSON", "JSP", "JUnit", "JWT", "Jasmine", "Java", "Java EE",
  "JavaFX", "JavaScript", "Jenkins", "Jest", "Kafka", "Kanban", "Karma", "Kotlin", "Kubernetes", "LDAP", "LESS", "Laravel",
  "Leaflet", "Linux", "MS-SQL", "Machine Learning", "Magento", "MariaDB", "Marvel", "Material UI", "Matlab", "Maven", "Mesos", "Meteor", "Microsoft BizTalk Server", "Microsoft Dynamics CRM",
  "Mobile", "MongoDB", "MySQL", "NextJS", "Nexus", "NFC", "NFS", "Nginx", "NHibernate", "NodeJS", "NoSQL", "NuxtJS", "ODI", "OSS", "Objective-C", "Office365", "Open-E JovianDSS", "OpenGL", "OpenShift",
  "Oracle", "PHP", "PL SQL", "PWA", "PaaS", "Perl", "Phoenix", "Pimcore", "Play Framework", "Polymer", "PostgreSQL", "PowerShell", "Prometheus", "Product Manager", "Project Manager", "Puppet",
  "Python", "QA Testing", "Quobyte", "Qt", "Quarkus", "RDF", "RDMA", "REST", "RBAC", "RHEL", "ROS", "RPA", "RSpec", "RabbitMQ", "Rails", "React", "React Native", "Redgate", "Redis",
  "Redux", "RS-485", "Ruby", "Rust", "RxJs", "SAML", "SAP", "SASS", "SCSS", "SOAP", "SQL", "SQLite", "SailsJS", "Salesforce", "Scala", "Security", "Sensor Fusion", "SMB",
  "Selenium", "Sentry", "SharePoint", "Shopware", "Sketch", "Solr", "Sonar", "Spark", "Splunk", "Spring", "Spring Boot", "SSAS", "SSIS", "strapi", "Svelte", "Swagger", "Swift", "Swing", "Symfony",
  "System Engineer", "TCP/IP", "TDD", "TSQL", "TYPO3", "Teamcity", "TensorFlow", "Terraform", "Three.js", "Tomcat", "TypeScript", "UML", "Ubuntu",
  "UiPath", "Unix", "Unity", "Unreal", "UX UI Design", "VBA", "VMware", "VR", "Vaadin", "Vagrant", "Veeam", "Video Streaming", "Visual Studio", "Vue", "WAF", "WPF", "Web3", "WebGL", "Webpack", "WebServices",
  "Websphere", "Web Development", "Windows", "Windows Forms", "WordPress", "XML", "XP", "XPath", "XState", "Xamarin", "Yarn", "Zend", "Zeplin", "Zookpeeper", "gRPC", "iOS", "jQuery",
  "microservices", "numpy", "opencv", "pandas", "pytest"]

const perkTags = ["4 weeks vacation", "35-hour work week", "40-hour work week", "42-hour work week", "45-hour work week", "5 weeks vacation", "6 weeks vacation",
  "Accident insurance", "AC cooler", "Annual company retreat", "Beer", "Bonus pay", "Career paths and annual reviews", "Choose your hardware", "Coffee, tea", "Collective wage agreement", "Company workshops and knowledge sharing",
  "Conferences", "Cool office", "Discounts for company products", "Equity or company stock", "Extra retirement contribution", "Flexible work time", "Free lunch", "Fresh fruits", "Fully home office / remote work", "Gym membership",
  "Home office / Remote 1 day per week", "Individual educational training budget", "International team", "Maternity/Paternity leave", "Mobile phone subscription", "Part-time possible",
  "Ping-pong table", "Pizza Day", "Public transport GA Travelcard", "Public transport Half-Fare", "Relocation support", "Sabbatical possibility", "Standing desk", "Startup culture",
  "Sweets in the kitchen", "Table football", "Team social events", "Quiet office", "Vacation Bonus", "Well connected office"]

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
  theme,
  chipTheme,
  extractTechTagsFrom,
  extractPerksFrom,
  extractTechTagsFromStringArray
}