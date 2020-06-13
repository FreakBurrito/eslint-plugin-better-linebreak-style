
//Extracted in an attempt to allow IOC patterns in case testing approach changes. I imagine mocking `process`
//would be exceptionally difficult, so I hope that allowing it to be mocked will prove usefull.
 const getPlatform = ()=> {
    return process.platform === 'win32' ? 'windows' : 'unix';
}

module.exports = {
    getPlatform
}
