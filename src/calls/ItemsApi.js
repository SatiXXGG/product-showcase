
export async function getItems(setItems) {
    return fetch("https://dummyjson.com/products").then(result => result.json()).then((finalResult) => { 
        setItems(finalResult.products)
    })
}