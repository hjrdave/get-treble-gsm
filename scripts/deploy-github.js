//deploy script
const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/hjrdave/get-treble-gsm.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
