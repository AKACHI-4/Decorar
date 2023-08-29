import React from "react";
// import AccessoryContext from "../../Context/AccessoryContext";

function SubcategoryList({ subcategories }) {
  // const { setSelectedAccessory } = useContext(AccessoryContext);

  const handleSelectAccessory = (subcategory) => {
    // setSelectedAccessory(subcategory);
  };

  return (
    <div className="ml-4 grid grid-cols-3 gap-2 my-1 text-gray-600 text-md font-semibold">
      {subcategories.map((subcategory) => (
        <div
          key={subcategory.id}
          onClick={() => handleSelectAccessory(subcategory)}
          style={{ cursor: "pointer" }}
        >
          <h4 className="text-md fond-semibold">{subcategory.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default SubcategoryList;
