const categoryNames = [
  "DESK",
  "PDESK",
  "BC",
  "BR",
  "BSC",
  "FILING",
  "HUTCH",
  "KIT",
  "LBC",
  "LST-2D",
  "LST-2HD",
  "LST-2QD",
  "LST-LD",
  "LST-LHD",
  "LST-LQD",
  "LST-RD",
  "LST-RHD",
  "LST-RQD",
  "LST-OP",
  "PED-MP",
  "PED-OP",
  "PED-SP",
  "PST",
  "RTN",
  "SCR",
  "SSC",
  "VLEG",
  "WARD",
  "WS",
];

const categories = categoryNames.map((categoryName, index) => {
  const subcategories = [];
  for (let subIndex = 1; subIndex <= 5; subIndex++) {
    const subcategoryName = `${categoryName}-${subIndex}`;
    subcategories.push({
      id: `${subcategoryName}`,
      name: `${subcategoryName}`,
      modelPath: `../../../assets/3D Assets/models/glb/${subcategoryName}.glb`,
    });
  }
  return {
    id: `AS${index + 101}`,
    name: categoryName,
    subcategories,
  };
});

export default categories;
