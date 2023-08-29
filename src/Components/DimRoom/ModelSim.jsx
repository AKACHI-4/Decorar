import React, { useState } from "react";
import categories from "../../../assets/categories";
import SubcategoryList from "./SubcategoryList";

function ModelSim() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();

    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  console.log(selectedCategory);

  return (
    <div className="text-black flex">
      <div className="w-full">
        <div className="overflow-y-auto max-h-screen">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`px-4 py-3 cursor-pointer ${
                selectedCategory === category
                  ? "bg-blue-200 border-b-2 border-t-2 border-dashed border-gray-900"
                  : ""
              } 
              `}
            >
              <h3
                className="text-lg font-mono font-semibold"
                onClick={(e) => handleCategoryClick(e, category)}
              >
                {category.name}
              </h3>
              {selectedCategory === category && (
                <SubcategoryList
                  subcategories={selectedCategory.subcategories}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModelSim;
