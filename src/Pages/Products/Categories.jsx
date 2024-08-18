import { useState } from "react";


const Categories = ({handleCategories,handleBrandCategories  ,handlePrice, brand }) => {
    console.log("brand  : " , brand);

        

    // const [category , setCategory] = useState({brand : '' , category : '' , price});

    return (
        <div>
            
            <div className="collapse collapse-plus bg-base-200 rounded-none">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-base lg:text-xl font-medium">Brand Name</div>
  <div className="collapse-content space-y-2">
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Levi's"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Levi's")}>Levi's</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Nike"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Nike")}>Nike</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Adidas"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Adidas")}>Adidas</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "H&M"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("H&M")}>H&M</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Zara"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Zara")}>Zara</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Puma"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Puma")}>Puma</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Reebok"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Reebok")}>Reebok</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Forever 21"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Forever 21")}>Forever 21</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Uniqlo"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Uniqlo")}>Uniqlo</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Gap"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Gap")}>Gap</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Ralph Lauren"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("Ralph Lauren")}>Ralph Lauren</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "North Face"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleBrandCategories("North Face")}>North Face</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 rounded-none">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-base lg:text-xl font-medium">Category Name</div>
  <div className="collapse-content space-y-2">
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Jeans"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Jeans")}>Jeans</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "T-Shirt"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("T-Shirt")}>T-Shirt</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Sweatshirt"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Sweatshirt")}>Sweatshirt</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Shirt"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Shirt")}>Shirt</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Jacket"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Jacket")}>Jacket</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Shorts"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Shorts")}>Shorts</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Tracksuit"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Tracksuit")}>Tracksuit</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Dress"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Dress")}>Dress</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Sweater"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Sweater")}>Sweater</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Pants"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Pants")}>Pants</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Skirt"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Skirt")}>Skirt</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Shoes"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Shoes")}>Shoes</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Blazer"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Blazer")}>Blazer</p>
    
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Leggings"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Leggings")}>Leggings</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Hoodie"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Hoodie")}>Hoodie</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Sportswear"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Sportswear")}>Sportswear</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Top"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Top")}>Top</p>
    <p className={`text-base font-semibold hover:cursor-pointer ${brand === "Blouse"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handleCategories("Blouse")}>Blouse</p>
    
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 rounded-none">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-base lg:text-xl font-medium">Price Range</div>
  <div className="collapse-content space-y-2">
  <p className={`text-base font-semibold hover:cursor-pointer ${brand === "10 - 30"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handlePrice(10 , 30)}>$10 - $30</p>
  <p className={ `text-base font-semibold hover:cursor-pointer ${brand === "30 - 60"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handlePrice(30 , 60)}>$30 - $60</p>
  <p className={`text-base font-semibold hover:cursor-pointer ${brand === "70 - 90"  && "bg-blue-600 text-white  py-1 pl-2"}`}onClick={() => handlePrice(70 , 90)}>$70 - $90</p>
  </div>
</div>
        </div>
    );
};

export default Categories;