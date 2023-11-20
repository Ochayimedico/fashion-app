const Categories = () => {
  const categories = [
    "Deals",
    "Fashion Basics",
    "Best Sellers",
    "Books",
    "Livestreams",
    "Music",
    "Video",
    "Home",
    "New Releases",
    "PC",
    "Health & Households",
    "Gift Cards",
  ];
  return (
    <ul className="bg-[#0F172A] m-0 p-0 flex flex-row items-center pb-[0.75rem] overflow-x-auto">
      {categories.map((category, id) => (
        <li className=" text-center text-white mx-[0.5rem] min-w-max " key={id}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
