// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ***

  ### Table of Contents:

  1. [How to Install ${data.title}](#Installation)
  2. [Using ${data.title}](#How%20To%20Use%20${data.title})
  3. [Testing ${data.title}](#Test%20Code)
  4. [Contributors](#Contributors)
  5. [Ask Us Questions](#Ask%20Questions)
  6. [Licenses](#License)

  ***

  # Installation

  ${install}

  # How to Use ${data.title}

  ${usage}

  # Test Code

  ${data.tests}

  # Contributors

  ${data.contribute}

  # Ask Questions

  ${data.questions}

  # License

  ${data.license}

`;
}

module.exports = generateMarkdown;
