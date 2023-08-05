/**
 * Throw an error if the supplied data is falsy, else return it
 *
 * @param {any}   data
 * @param {Error} err
 *
 * @return {void}
 */
export default function (data, err) {
    if (!data) {
        throw err;
    }

    return data;
}
