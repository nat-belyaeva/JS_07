function  print() {
    console.log('Hi')
}

function  print(name) {
    console.log('Hi' + name)
}
function  print(name, age) {
    console.log('Hi' + name + age)
}
//calling
print('Nat', 39)

//run test cases on remote machine
//browserName, browserVersion, remoteExecution
function displayBrowserInfo(browserName, browserVersion, remoteExecution) {
    if(typeof browserVersion === 'number' && typeof remoteExecution === 'boolean'){
        console.log(`Browser: ${browserName}, version: ${browserVersion}, remoteExe:${remoteExecution}`)
    } else if(typeof browserVersion === 'number'){
        console.log(`Browser: ${browserName}, version: ${browserVersion}`)
    } else {
        console.log(`Browser: ${browserName}`)
    }
}
displayBrowserInfo('chrome', 115, true)
displayBrowserInfo('chrome', 115)
displayBrowserInfo('chrome')