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

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}