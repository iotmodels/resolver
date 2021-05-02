export/**
 * @description Validates DTMI with RegEx from https://github.com/Azure/digital-twin-model-identifier#validation-regular-expressions
 * @param {string} dtmi
 */
const isDtmi = dtmi => RegExp('^dtmi:[A-Za-z](?:[A-Za-z0-9_]*[A-Za-z0-9])?(?::[A-Za-z](?:[A-Za-z0-9_]*[A-Za-z0-9])?)*;[1-9][0-9]{0,8}$').test(dtmi)

export/**
 * @description Converts DTMI to /dtmi/com/example/device-1.json path.
 * @param {string} dtmi
 * @returns {string}
 */
const dtmiToPath = dtmi => isDtmi(dtmi) ? `/${dtmi.toLowerCase().replace(/:/g, '/').replace(';', '-')}.json` : null

export const resolve = async (dtmi, expand, repo) => {
    if (repo==undefined) {
        repo = 'https://devicemodels.azure.com'
    }
    let url = `${repo}${dtmiToPath(dtmi)}`

    // if (expand===true) {
    //     url = url.replace('.json', '.expanded.json')
    // }
    const doc = await (await window.fetch(url)).json()

    // if (doc['@id']!==dtmi){
    //     throw new Error('Incorrect DTMI found: ' + doc['@id'])
    // }
    return doc
}