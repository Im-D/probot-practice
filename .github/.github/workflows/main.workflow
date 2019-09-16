workflow "New workflow" {
  on = "pull_request"
  resolves = ["Im-D/pr-supporter"]
}

action "Im-D/pr-supporter" {
  uses = "Im-D/pr-supporter@master"
  secrets = ["GITHUB_TOKEN"]
}
