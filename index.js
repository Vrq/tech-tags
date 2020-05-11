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

const techTags = [".NET MVC", "3D", "AEM", "AJAX", "API", "ASP.NET", "AWS", "Active Directory", "ActiveMQ", "Airlock", "Akka", "Android",
  "Angular", "Ansible", "Apollo", "Asterisk", "Avaloq", "Azure", "BPMN", "BSD", "Backbone", "Bamboo", "Bamboo", "Bash", "Beanstalk", "BitTalk", "Blockchain",
  "Bootstrap", "C#", "C++", "CI/CD", "CMS", "CQRS", "CSS", "Cassandra", "Celery", "Cisco", "Clojure", "Cloud Foundry", "Composer", "Cordova",
  "Cucumber", "Cypress", "D3", "DDD", "Dapper", "Dart", "DevOps", "Django", "Docker", "Drupal", "E2E", "EC2", "ELK", "ES6", "ESB", "ETL", "Eclipse",
  "ElasticSearch", "Electron", "Elixir", "Embedded", "Ember", "Erlang", "ExpressJS", "FPGA", "Fastlane", "Figma", "Firebase", "Flask", "Flink",
  "Flutter", "GCP", "GIS", "GNU", "Git", "Golang", "Gradle", "Grafana", "GraphQL", "Groovy", "Gulp", "HSM", "HTTP", "Haskell", "Heroku",
  "Hibernate", "IAM", "IBM", "IaaS", "Indesign", "Ionic", "JBoss", "JIRA", "JPA", "JSON", "JSP", "JUnit", "JWT", "Jasmine", "Java", "Java EE",
  "JavaFX", "JavaScript", "Jenkins", "Jest", "Kafka", "Kanban", "Karma", "Kotlin", "Kubernetes", "LDAP", "LESS", "Laravel",
  "Leaflet", "Linux", "MS-SQL", "Machine Learning", "Magento", "MariaDB", "Marvel", "Material UI", "Matlab", "Maven", "Mesos", "Meteor",
  "Mobile", "MongoDB", "MySQL", "NextJS", "Nexus", "Nginx", "NodeJS", "NoSQL", "NuxtJS", "ODI", "OSS", "Objective-C", "Office365", "OpenShift",
  "Oracle", "PHP", "PL SQL", "PWA", "PaaS", "Perl", "Phoenix", "Pimcore", "Play Framework", "Polymer", "PostgreSQL", "Prometheus", "Puppet",
  "Python", "Qt", "Quarkus", "RDF", "REST", "RHEL", "RPA", "RSpec", "RabbitMQ", "Rails", "React", "React Native", "Redgate", "Redis",
  "Redux", "Remote Work", "Ruby", "Rust", "RxJs", "SAML", "SAP", "SASS", "SCSS", "SOAP", "SQL", "SQLite", "SailsJS", "Salesforce", "Scala", "Scrum", "Security",
  "Selenium", "Sentry", "SharePoint", "Sketch", "Solr", "Sonar", "Spark", "Spring", "Spring Boot", "Swagger", "Swift", "Swing", "Symfony",
  "System Engineer", "TDD", "TSQL", "TYPO3", "Teamcity", "TensorFlow", "Terraform", "Tomcat", "TypeScript", "UML", "Ubuntu",
  "UiPath", "Unix", "UX UI Design", "VBA", "VMware", "VR", "Vaadin", "Vagrant", "Visual Studio", "Vue", "WAF", "WPF", "Web3", "WebGL", "Webpack",
  "Websphere", "Windows", "WordPress", "XML", "XP", "XPath", "Xamarin", "Yarn", "Zend", "Zeplin", "Zookpeeper", "gRPC", "iOS", "jQuery",
  "microservices", "numpy", "opencv", "pandas", "pytest"]

const specialExtractTag = (searchFor, tagToAdd, foundTechTags, textsToTest) => {
  const reg = new RegExp('[\\W_]+(' + searchFor.toLowerCase() + ')[\\W_]+', 'g')//matchTechTagSurroundedByNonLetters
  if (textsToTest.some(text => reg.test(text))) {
    foundTechTags.add(tagToAdd)
  }
}

const extractTechTagsFrom = (jobForm, techTags) => {
  let foundTechTags = new Set()
  const lowCaseJobDescription = jobForm.description ? jobForm.description.toLowerCase() : ""
  const lowCaseRequirements = jobForm.requirementsMustTextArea ? jobForm.requirementsMustTextArea.toLowerCase() : ""
  const lowCaseNiceToHave = jobForm.requirementsNiceTextArea ? jobForm.requirementsNiceTextArea.toLowerCase() : ""
  const lowCaseResponsibilities = jobForm.responsibilitiesTextArea ? jobForm.responsibilitiesTextArea.toLowerCase() : ""
  const stringsToTest = [lowCaseJobDescription, lowCaseRequirements, lowCaseNiceToHave, lowCaseResponsibilities]
  techTags.forEach(techTag => {
    const lowCaseTechTag = techTag.toLowerCase()
    if (techTag !== 'C++') {
      const reg = new RegExp('[\\W_]+(' + lowCaseTechTag + ')[\\W_]+', 'g')//matchTechTagSurroundedByNonLetters
      if (stringsToTest.some(text => reg.test(text))) {
        foundTechTags.add(techTag)
      }
    }
    jobForm.technologies && jobForm.technologies.forEach(tech => { if (tech.toLowerCase() === lowCaseTechTag) foundTechTags.add(techTag) })
    if (jobForm.techCategory && jobForm.techCategory.toLowerCase() === lowCaseTechTag) foundTechTags.add(techTag)
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
  specialExtractTag("Remote", "Remote Work", foundTechTags, stringsToTest)
  specialExtractTag("WFH", "Remote Work", foundTechTags, stringsToTest)
  specialExtractTag(".NET", "ASP.NET", foundTechTags, stringsToTest)
  specialExtractTag("Node", "NodeJS", foundTechTags, stringsToTest)
  specialExtractTag("Node.js", "NodeJS", foundTechTags, stringsToTest)
  specialExtractTag("VueJS", "Vue", foundTechTags, stringsToTest)
  specialExtractTag("Vue.js", "Vue", foundTechTags, stringsToTest)
  specialExtractTag("Sails", "SailsJS", foundTechTags, stringsToTest)
  specialExtractTag("Express.js", "ExpressJS", foundTechTags, stringsToTest)
  if (jobForm.techCategory === "Dev-Ops") foundTechTags.add("DevOps")
  if (jobForm.techCategory === "UI-UX-Designer") foundTechTags.add("UX UI Design")

  return [...foundTechTags]
}

module.exports = {
  techTags,
  theme,
  chipTheme,
  extractTechTagsFrom
}