workflow "Check for TODOs in Pull Requests" {
  resolves = "PR-TEST"
  on = "pull_request"
}

action "PR-TEST" {
  uses = "Im-D/pr-supporter@master"
  secrets = ["GITHUB_TOKEN"]
}
