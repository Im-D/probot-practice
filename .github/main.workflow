workflow "Check for TODOs in Pull Requests" {
  on = "pull_request"
  resolves = "pr-supporter"
}

action "pr-supporter" {
  uses = "Im-D/pr-supporter@master"
  secrets = ["GITHUB_TOKEN"]
}
