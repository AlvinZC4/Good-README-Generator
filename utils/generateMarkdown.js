// function to generate markdown for README
function generateMarkdown(data, image) {
  return `# ${data.title}

  ${data.description}

  ${image}

  ***

  ## Table of Contents:

  1. [How to Install ${data.title}](#Installation)
  2. [Using ${data.title}](#How%20To%20Use%20This%20Application)
  3. [Testing ${data.title}](#Test%20Code)
  4. [Contribution Guidlines](#Contribution%20Guidelines)
  5. [Ask Us Questions](#Ask%20Questions)
  6. [Licenses](#License)

  ***

  ## Installation

  ${data.install}

  ## How to Use This Application

  ${data.usage}

  ## Test Code

  ${data.tests}

  ## Contribution Guidelines

  ${data.contribute}

  ## Ask Questions

  Visit my GitHub Page: [My GitHub Profile Page](https://github.com/${data.github})
 -OR-
 Drop me an e-mail at: ${data.questions}

  ## License

  This applicaton is covered under the ${data.license}

`;
}

module.exports = generateMarkdown;
