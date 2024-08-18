import { useEffect, useState } from "react";
import Product from "./Product";
import { ImSearch } from "react-icons/im";
import Categories from "./Categories";
import DropdownMenu from "./DropdownMenu";


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
        fetch("https://job-task-server-roan.vercel.app/products")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setProducts(data);
        })
    } , [])

    useEffect(() => {
        fetch("https://job-task-server-roan.vercel.app/productsCount")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            
            setCount(data.count);
        })
    } , [])

    useEffect(() => {
            fetch(`https://job-task-server-roan.vercel.app/productsPerPage?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                console.log("dataaa : " , data)
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



    
    

    
    // const [category , setCategory] = useState({brand : '' , category : '' , price});
    const [brand , setBrand] = useState("");
    const handleBrandCategories = (data) => {
        console.log("data" , data)
        // setBrand(prevFilters => ({
        //     // ...prevFilters,
        //     ...prevFilters,
        //     brand: data
        //   }));

        setBrand(data)

        fetch(`https://job-task-server-roan.vercel.app/categoryBrand?brand=${data}`)
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

        fetch(`https://job-task-server-roan.vercel.app/category?category=${data}`)
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
        
        fetch(`https://job-task-server-roan.vercel.app/price?minPrice=${min}&maxPrice=${max}`)
            .then(res => res.json())
            .then(data => {
                console.log("products category :  " , data);
                setRecords(data);
            })
    }


    // low to high

    const handleLowToHigh = () => {
        
        fetch(`https://job-task-server-roan.vercel.app/productsPerPage?page=${currentPage}&size=${itemsPerPage}`)
            .then((res => res.json()))
            .then((data) => {
                const result = data.sort((a , b) => a.price - b.price)
                setRecords(result)
            })
    }

    // high to low
    
    const handleHighToLow = () => {
            
        
        fetch(`https://job-task-server-roan.vercel.app/productsPerPage?page=${currentPage}&size=${itemsPerPage}`)
            .then((res => res.json()))
            .then((data) => {
                console.log(data);

                const result = data.sort((a , b) => b.price - a.price)
                setRecords(result)
            })
    }
    // handle date
    const handleDate = () => {
        fetch(`https://job-task-server-roan.vercel.app/productsPerPage?page=${currentPage}&size=${itemsPerPage}`)
        .then((res => res.json()))
        .then((data) => {
            console.log("server data" , data);

            
            const result =   data.sort((a , b) => new Date(b.date) - new Date(a.date));
             setRecords(result);
        })
    }
    return (
        <div>
            <div className="">
            <marquee className="text-xl font-bold text-blue-500">পানি লাগবে পানি । (মুগ্ধ ভাই) । আল্লাহ আমার মুগ্ধ ভাইয়ের মতো যারা শহিদ হয়েছেন সবাইকে জান্নাত দান করুন।</marquee>
            </div>
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
            <DropdownMenu  handleLowToHigh={handleLowToHigh} handleHighToLow={handleHighToLow} handleDate={handleDate}></DropdownMenu>


            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:mx-[70px] mx-3 mt-2">

                {/* category*/}

                <div className="lg:col-span-1">
                <Categories handleCategories={handleCategories} handleBrandCategories={handleBrandCategories} brand={brand} handlePrice={handlePrice} ></Categories>
                </div>
                 <div  className="grid grid-cols-1 lg:grid-cols-4  gap-4  lg:col-span-4">
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
                        
                        <option value="16">16</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
            </select>
            </div>
        </div>
    );
};

export default Products;