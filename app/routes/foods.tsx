import { NavLink, useLocation } from "@remix-run/react";
import { searchFoods } from "../datas/foods";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Foods() {
  const [foodNames, setFoodNames] = useState<string[]>([]);
  const { t } = useTranslation();
  const location = useLocation();

  const handleClick = (category: string) => {
    setFoodNames(searchFoods(category));
  };
  useEffect(() => {
    setFoodNames(searchFoods("all"));
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col border-r">
        {[
          "all",
          "veggie",
          "meat",
          "goodies",
          "roughage",
          "item",
          "elemental",
          "other",
        ].map((e) => (
          <p
            key={e}
            onClick={() => {
              handleClick(e);
            }}
            className="w-24 h-9 rounded-md mb-2 bg-button bg-cover bg-no-repeat text-center content-center font-medium"
          >
            {t(`ui.${e}`)}
          </p>
        ))}
      </div>
      <div className="flex ml-5 flex-wrap content-start max-h-132 overflow-y-auto">
        {foodNames &&
          foodNames.map((key) => (
            <span
              key={key}
              className="flex w-17 h-17 items-center justify-center ml-2 mb-2 bg-slot bg-no-repeat bg-center"
            >
              <NavLink to={`/food/${key}` + location.search}>
                <img
                  src={`/images/${key}.png`}
                  className="w-16 h-16"
                  alt={t("foods." + key)}
                />
              </NavLink>
            </span>
          ))}
      </div>
    </div>
  );
}
