export const customFetch = (products) => {
    return new Promise ((resolve, reject) => {
        resolve(products)
    }, 2000)
}