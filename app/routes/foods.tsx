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
    <div className="flex ">
      <div className="flex flex-col border-r">
        <p
          onClick={() => {
            handleClick("all");
          }}
          className="w-24 h-9 border rounded-md mb-2"
        >
          {t("ui.all")}
        </p>
        <p
          onClick={() => {
            handleClick("veggie");
          }}
          className="h-9 border rounded-md mb-2"
        >
          {t("ui.veggie")}
        </p>
        <p
          onClick={() => {
            handleClick("meat");
          }}
          className="h-9 border rounded-md mb-2"
        >
          {t("ui.meat")}
        </p>
        <p
          onClick={() => {
            handleClick("goodies");
          }}
          className="h-9 border rounded-md mb-2"
        >
          {t("ui.goodies")}
        </p>
        <p
          onClick={() => {
            handleClick("roughage");
          }}
          className="h-9 border rounded-md mb-2"
        >
          {t("ui.roughage")}
        </p>
        <p
          onClick={() => {
            handleClick("item");
          }}
          className="h-9 border rounded-md mb-2"
        >
          {t("ui.item")}
        </p>
        <p
          onClick={() => {
            handleClick("elemental");
          }}
          className="h-9 border rounded-md mb-2"
        >
          {t("ui.elemental")}
        </p>
      </div>
      <div className="flex ml-5 flex-wrap content-start max-h-132 overflow-y-auto">
        {foodNames &&
          foodNames.map((key) => (
            <NavLink key={key} to={`/food/${key}` + location.search}>
              <img
                key={key}
                //src={ingredients[key]}
                className="w-16 h-16 border ml-2 mb-2"
                alt={t("foods." + key)}
              />
            </NavLink>
          ))}
      </div>
    </div>
  );
}
