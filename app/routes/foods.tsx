import { NavLink, useLocation } from "@remix-run/react";
import { searchFoods } from "../datas/foods";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Foods() {
  const [foodNames, setFoodNames] = useState<string[]>([]);
  const [active, setActive] = useState<string>("all");
  const { t } = useTranslation();
  const location = useLocation();

  const handleClick = (category: string) => {
    setFoodNames(searchFoods(category));
    setActive(category);
  };
  useEffect(() => {
    setFoodNames(searchFoods("all"));
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col">
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
            className={`w-24 h-10 rounded-md bg-button bg-cover bg-no-repeat text-center content-center font-medium hover:brightness-75 brightness-100 ${
              active == e && "saturate-200"
            }`}
          >
            {t(`ui.${e}`)}
          </p>
        ))}
      </div>
      <div className="flex ml-5 flex-wrap content-start overflow-auto max-h-130">
        {foodNames &&
          foodNames.map((key) => (
            <span
              key={key}
              className="flex w-17 h-17 items-center justify-center bg-slot bg-no-repeat bg-clip-border hover:brightness-75 brightness-100"
            >
              <NavLink to={`/food/${key}` + location.search}>
                <img
                  src={`/images/foods/${key}.png`}
                  className="w-16 h-16 mr-2"
                  alt={t("foods." + key)}
                />
              </NavLink>
            </span>
          ))}
      </div>
    </div>
  );
}
