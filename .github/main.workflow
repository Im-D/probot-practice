workflow "Check for TODOs in Pull Requests" {
  on = "pull_request"
  resolves = "PR-TEST"
}

action "PR-TEST" {
  uses = "Im-D/pr-supporter@master"
  secrets = ["GITHUB_TOKEN"]
}
