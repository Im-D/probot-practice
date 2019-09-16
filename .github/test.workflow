workflow "Check for TODOs in Pull Requests" {
  on = "pull_request"
  resolves = "TODO"
}

workflow "Check for TODOs on Push" {
  on = "push"
  resolves = "TODO"
}

action "TODO" {
  uses = "Im-D/pr-supporter@master"
  secrets = ["GITHUB_TOKEN"]
}
