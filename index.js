/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    app.log('open')
    const issueComment = context.issue({ body: 'issue open TEST' })
    return context.github.issues.createComment(issueComment)
  })  

  app.on('issues.edited', async context => {
    app.log('edited');
    const issueComment = context.issue({ body: 'issue edited TEST' })
    return context.github.issues.createComment(issueComment)
  })

  app.on('pull_request.opened', async context => {
    const filesChanged = await context.github.pullRequests.getFiles(context.issue())
    console.log("filesChanged", filesChanged)
    const results = filesChanged.data.filter(file => file.filename.includes('.md'))
    console.log("results", `${context.payload.pull_request.head.repo.html_url}/blob/${context.payload.pull_request.head.ref}`)
    if (results && results.length > 0) {
      // make URLs
      let urls = ''
      await results.forEach(async (result) => {
        urls += `[${result.filename}](${context.payload.pull_request.head.repo.html_url}/blob/${context.payload.pull_request.head.ref}/${result.filename})`
      })
      await context.github.pullRequests.update(context.issue({body: `${context.payload.pull_request.body}\n${urls}`}))
    }
  })

  // app.on('pull_request.edited', async context => {
  // })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}