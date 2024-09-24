import axios from "axios"

const BASE_URL = "https://world.openfoodfacts.org"

export const getProductsCategories = async (page=1,searchItem='',filter='') => {

    let url = ''
    // let params={
    //     page_size:20,
    //     page:page
    // }
    if (searchItem && filter) {
        url = `/cgi/search.pl?search_terms=${searchItem}&tagtype_0=categories&tag_contains_0=contains&tag_0=${filter}&json=true`;
    } else if (searchItem) {
        url = `/cgi/search.pl?search_terms=${searchItem}&json=true`
        // params = {
        //     search_terms:searchItem,
        //     json:true
        // }
    } else if (filter) {
        url = `/category/${filter}.json`
    } else {
        url = `/search.json`
    }

    try {
        const response = await axios.get(`${BASE_URL}${url}`,{
            params:{
                page_size:20,
                page:page,
            }
        })
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }  
}

// Get Product Details
export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v0/product/${id}.json`)
        console.log(response);
        return response
    } catch (error) {
        console.error();
    }
}

export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories.json`)
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}





// try {
//     const response = await axios.get(`${BASE_URL}/search.json`,{
//         params:{
//             page_size:20,
//             page:page,
//         }
//     })
//     console.log(response);
//     return response
// } catch (error) {
//     console.error(error);
// }  