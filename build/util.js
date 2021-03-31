/**
 * @file util
 * @author raulxiao
 */

import path from 'path'

export function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

export function assetsPath (_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
}

export function resolveScssResource (filename) {
    return path.resolve(__dirname, '../src/assets/scss/' + filename)
}
