import { NavLink, useLocation } from "@remix-run/react";
import { useTranslation } from "react-i18next";



export default function Index() {
  let { t } = useTranslation();
  const location = useLocation();
  return (
    <div className="flex justify-center w-full flex-col items-center mt-10">
      <h1 className="text-3xl">{t("ui.title")}</h1>
      <p className="mt-8">WIP</p>
      <div className="flex flex-col">
        <h1 className="w-28 h-12 bg-button bg-cover bg-no-repeat content-center text-center font-medium mt-10 text-xl hover:brightness-75 brightness-100">
          <NavLink to={"cookpot?lng=" + location.search}>{t("ui.cookpot")}</NavLink>
        </h1>
        <h1 className="w-28 h-12 bg-button bg-cover bg-no-repeat content-center text-center font-medium mt-10 text-xl hover:brightness-75 brightness-100">
          <NavLink to={"foods?lng=" + location.search}>{t("ui.foods")}</NavLink>
        </h1>
      </div>
    </div>
  );
}
