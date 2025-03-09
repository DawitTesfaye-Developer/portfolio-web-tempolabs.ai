import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";

export type ProjectCategory =
  | "All"
  | "UI/UX"
  | "Frontend"
  | "Fullstack"
  | "Website Design"
  | "App Development";

interface CategoryFilterProps {
  categories?: ProjectCategory[];
  activeCategory?: ProjectCategory;
  onCategoryChange?: (category: ProjectCategory) => void;
  layout?: "tabs" | "dropdown";
}

const CategoryFilter = ({
  categories = [
    "All",
    "UI/UX",
    "Frontend",
    "Fullstack",
    "Website Design",
    "App Development",
  ],
  activeCategory = "All",
  onCategoryChange = () => {},
  layout = "tabs",
}: CategoryFilterProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>(activeCategory);

  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
    onCategoryChange(category);
    setIsDropdownOpen(false);
  };

  // Tabs layout (default for desktop)
  if (layout === "tabs") {
    return (
      <div className="bg-white w-full py-4 mb-8">
        <Tabs
          defaultValue={selectedCategory}
          onValueChange={(value) =>
            handleCategoryChange(value as ProjectCategory)
          }
          className="w-full max-w-[1200px] mx-auto"
        >
          <TabsList className="w-full flex justify-center bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={`flex-1 max-w-[200px] ${selectedCategory === category ? "font-medium" : ""}`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    );
  }

  // Dropdown layout (for mobile)
  return (
    <div className="bg-white w-full py-4 mb-8 relative">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-between"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>Filter by: {selectedCategory}</span>
          <Filter size={16} />
        </Button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-full max-w-[1200px] bg-white border border-gray-200 rounded-md shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedCategory === category ? "bg-gray-50 font-medium" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
