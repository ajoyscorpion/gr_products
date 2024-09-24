import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getProductsCategories } from '../Services/api'
import Pagination from '../Components/Pagination'
import ProductList from '../Components/productList'
import SearchBar from '../Components/SearchBar'
import Filter from '../Components/Filter'
import Sort from '../Components/Sort'

function Home() {

    const [productList,setProductList] = useState([])
    const [page, setPage] = useState(1);
    const [searchItem,setSearchItem] = useState('')
    const [filter,setFilter] = useState('')
    const [sort,setSort] = useState("name_asc")

    console.log(searchItem);
    console.log(filter);
    console.log(sort);

    useEffect(() => {
        
        fetchProductList();
        //console.log();
        // eslint-disable-next-line
    },[page,searchItem,filter,sort])

    console.log(productList);
    
    console.log(page);

    const fetchProductList = async () => {
        try {
            const response = await getProductsCategories(page,searchItem,filter)
            console.log(response);
            console.log(response.data.products);

            let fetchedProducts = response.data.products

            fetchedProducts = handleSort(fetchedProducts)
            setProductList(fetchedProducts)
        } catch (error) {
            console.log(error);
        }
    }

    const handlePage = (selectedPage) => {
        setPage(selectedPage)
        fetchProductList()
    }

    const handleSort = (products) => {
        let sortedProductList = [...products]

        if (sort === 'name_asc') {
            sortedProductList.sort((a,b)=>a.product_name.localeCompare(b.product_name))
        } else if (sort === 'name_desc') {
            sortedProductList.sort((a, b) => b.product_name.localeCompare(a.product_name));
        } else if ( sort === 'nutrition_asc') {
            sortedProductList.sort((a, b) => (a.nutrition_grade_fr || 'Z').localeCompare(b.nutrition_grade_fr || 'Z'));
        } else if ( sort === 'nutrition_desc') {
            sortedProductList.sort((a, b) => (b.nutrition_grade_fr || 'Z').localeCompare(a.nutrition_grade_fr || 'Z'));
        }

        return sortedProductList
    }

  return (
    <>
        <h3>Food Product Explorer</h3>
        {/* search tab */}
        <SearchBar Search={setSearchItem}/>

        {/* Filter tab */}
        <Filter setFilter={setFilter}/>

        {/* Sort */}
        <Sort setSort={setSort}/>

        {/* Product List */}
        <ProductList products={productList}/>

        {/* Pagination */}
        <Pagination fetchPage={handlePage}/>
    </>
  )
}

export default Home