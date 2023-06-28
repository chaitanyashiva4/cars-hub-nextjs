"use client";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import CustomButton from "./CustomButton";


const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit)
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyle="bg-primary-blue rounded-full text-white"
          handelClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;