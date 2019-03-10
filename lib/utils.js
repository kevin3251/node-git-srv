const R = require('ramda')
const fs = require('fs-extra')
const {
    Repository,

} = require('nodegit')

const _createRepo = R.curry((rootDir, owner, repoName) => {
    
})



const gitSrv = ({ rootDir = __dirname } = {}) => {
    const stat = fs.statSync(rootDir)
    

    return {
            
    }
}

module.exports = gitSrv