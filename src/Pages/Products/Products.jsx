import { useEffect, useState } from "react";
import Product from "./Product";
import { ImSearch } from "react-icons/im";
import Categories from "./Categories";
import { IoIosArrowDown } from "react-icons/io";


const Products = () => {
    const [products , setProducts] = useState([]);
    const [productsPerPage ,setProductsPerPage] = useState([]);

    // search
    const [records , setRecords] = useState([])


    // pagination
    const [itemsPerPage , setItemsPerPage] = useState(16);
    const [currentPage  , setCurrentPage ] = useState(0);

    const [count , setCount] = useState(0);
    

    // number of pages
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    
    


    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setProducts(data);
        })
    } , [])

    useEffect(() => {
        fetch("http://localhost:5000/productsCount")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            
            setCount(data.count);
        })
    } , [])

    useEffect(() => {
            fetch(`http://localhost:5000/productsPerPage?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setProductsPerPage(data);
                setRecords(data)
            })
    } , [currentPage , itemsPerPage])



    const handleItemsPerPage = (e) => {
        const value = parseInt(e.target.value);
        setItemsPerPage(value);
        setCurrentPage(0)


    }
    const handlePrev = () => {
                if(currentPage > 0){
                    setCurrentPage(currentPage - 1)
                }
    }
    const handleNext = () => {
                if(currentPage < pages?.length -1){
                    setCurrentPage(currentPage + 1)
                }
    }

    // search functionality
    const handleFilter = (e) => {
            setRecords(productsPerPage?.filter(product => product?.product_name.toLowerCase().includes(e.target.value.toLowerCase())))
    }



    // categories
    // const [brand , setBrand] = useState({brand : undefined , category : undefined , price : undefined});
    // console.log("brand" , brand);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/categoryBrand?brand=${brand?.brand}&category=${brand?.category}&price=${brand?.price}&category=${brand?.category}&price=${brand?.price}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("products :  " , data);
    //         setRecords(data)
    //     })
    // } , [brand])
    
    

    
    // const [category , setCategory] = useState({brand : '' , category : '' , price});
    const [brand , setBrand] = useState("");
    const handleBrandCategories = (data) => {
        // setBrand(prevFilters => ({
        //     // ...prevFilters,
        //     ...prevFilters,
        //     brand: data
        //   }));

        setBrand(data)

        fetch(`http://localhost:5000/categoryBrand?brand=${data}`)
            .then(res => res.json())
            .then(data => {
                console.log("products brand :  " , data);
                setRecords(data)
            })
        }

    const handleCategories = (data) => {
        // console.log("data" , data)
        // setBrand(prevFilters => ({
        //     ...prevFilters,
        //     category : data
        // }))
        setBrand(data)

        fetch(`http://localhost:5000/category?category=${data}`)
            .then(res => res.json())
            .then(data => {
                console.log("products category :  " , data);
                setRecords(data)
            })
    }


    const handlePrice = (min , max) => {
        // console.log("data" , data)
        // setBrand(prevFilters => (
        //         {
        //             ...prevFilters,
        //             price : data
        //         }
        // ))
        setBrand(`${min} - ${max}`)
        
        fetch(`http://localhost:5000/price?minPrice=${min}&maxPrice=${max}`)
            .then(res => res.json())
            .then(data => {
                console.log("products category :  " , data);
                setRecords(data);
            })
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mb-2  pb-2 underline">Our Products</h1>
            <div className="flex justify-center mb-3">
            <div className="flex items-center">
            <input type="text"onChange={handleFilter} className="border border-blue-600 font-bold rounded-lg rounded-r-none p-2 text-center"placeholder="Serach by product_name"/>
            <div className="h-[42px] w-[35px]">
            <ImSearch className="h-full w-full bg-blue-600 p-[6px] text-xl  text-white rounded-r-lg" />
            </div>
            </div>
            </div>

            {/* dropdown menu */}
            <div className=" mx-[70px] flex justify-end">
            <div className="dropdown dropdown-end" >
  <div tabIndex={0} role="button" className="btn m-1 bg-white hover:bg-white w-[229px] border rounded-none">Sort Products By  <IoIosArrowDown className="text-2xl font-semibold"/></div>
  <ul tabIndex={0} className="dropdown-content menu bg-white border rounded-none z-[1] w-[229px] p-2 shadow">
    <li><a> Low to High</a></li>
    <li><a> High to Low</a></li>
    <li><a>Newest first</a></li>
  </ul>
</div>
            </div>
            <div className="grid lg:grid-cols-5 gap-3 mx-[70px] mt-2">

                {/* category*/}

                <div className="col-span-1">
                <Categories handleCategories={handleCategories} handleBrandCategories={handleBrandCategories} brand={brand} handlePrice={handlePrice}></Categories>
                </div>
                 <div  className="grid grid-cols-1 lg:grid-cols-4 gap-4 col-span-4">
                {
                    records?.map(product => <Product product={product}></Product>)
                }
                </div>

            </div>


            {/* pagination */}
            <div className="flex justify-center gap-3 mt-10">
            <button className="btn"onClick={handlePrev}>Prev</button>
                <div className="flex gap-2">
                        {
                            pages?.map(page => <button className={`btn ${currentPage === page ? 'btn bg-blue-800 text-white hover:text-black' : "undefined"}`} onClick={() => setCurrentPage(page)}>{page}</button>)
                        }
                </div>
            <button className="btn"onClick={handleNext}>Next</button>

            {/* select optioin */}
            <select name="" id="" value={itemsPerPage} onChange={handleItemsPerPage} className='border-2 px-2 rounded-lg'>
                        <option value="10">10</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
            </select>
            </div>
        </div>
    );
};

export default Products;