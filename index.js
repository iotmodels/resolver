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

const checkIdCasing = (doc, id) => {
    let root;
    if (Array.isArray(doc)) {
        root = doc[0]
    } else {
        root = doc
    }
    if (root['@id'] !== id) {
        throw new Error(`[resolver err] Wrong ID resolved: \n expected: ${id} \n resolved: ${root['@id']}`)
    } 
}

export const resolve = async (dtmi, expand, repo) => {
    if (repo==undefined) {
        repo = 'https://devicemodels.azure.com'
    }
    let url = `${repo}${dtmiToPath(dtmi)}`

    if (expand===true) {
        url = url.replace('.json', '.expanded.json')
    }
    let doc
    try {
        const req = await window.fetch(url)
        if (req.status===404) {
            throw new Error('404 ' + url)
        }
        console.log(req.status)
        doc = await req.json()
    } catch (err) {
        throw err
    }
    checkIdCasing(doc, dtmi)
    return doc
}