// Writing tests with JEST

function addFive(val) {
  return val + 5
}

module.exports = addFive // export the function so that it can be used in other files in this project

// Before writing test: check if Node and npm are installed, node --version or node -v
// Then npm init -y (installation of package.json)
// npm install --save-dev jest (installation jest)
/**
 * in package.json replace this part:
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  with 
    "scripts": {
    "test": "jest"
  },

  then -> npm run test
 */
