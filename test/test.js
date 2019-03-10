const {
    Repository,

} = require('nodegit')


Repository.init('./123', 1).then(repo => {
    if (typeof repo === 'object') {
        console.log('success')
    } else {
        console.error('fail')
    }
}).catch(err => {
    console.error(err)
})

