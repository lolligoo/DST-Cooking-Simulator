import { json } from "@remix-run/node";
import { NavLink, useLoaderData, useLocation } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import foods from "~/datas/foods";
import { useTranslation } from "react-i18next";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const foodname = params.foodname;
  if (!foodname) {
    throw new Response("Not Found", { status: 404 });
  }
  const food = foods[foodname];
  if (!food) {
    throw new Response("Not Found", { status: 404 });
  }
  if (food) return json({ foodname, food });
};

export function ErrorBoundary() {
  const { t } = useTranslation();
  return (
    <div className="w-dvw flex flex-col items-center">
      <h1>{t("ui.not")}</h1>
      <p className="bg-button w-20 bg-cover h-8 mt-5 content-center text-center font-medium hover:brightness-75 brightness-100">
        <NavLink to={"/"}>{t("ui.go")}</NavLink>
      </p>
    </div>
  );
}

export default function Food() {
  const location = useLocation();
  const { foodname, food } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full items-center justify-center -mt-3">
      <h1 className="text-xl font-extrabold bg-banner bg-cover bg-top w-80 h-16 content-center text-center">{t("foods." + foodname)}</h1>
      <span className="flex w-56 h-56 bg-l bg-no-repeat bg-center items-center justify-center bg-cover mt-2">
        <img src={`/images/foods/cookbook_${foodname}.png`} className="w-48 h-48" />
      </span>
      <div className="flex items-center mt-3">
        <span className="flex flex-col items-center hover:brightness-75 brightness-100">
          <NavLink
            to={`/cookpot${location.search}&pot=${
              food.pot
            }&recipes=${food.recipes.concat()}`}
          >
            <img
              src={`/images/ui/${food.pot}.png`}
              className="w-16 h-16 rounded-md"
              alt={food.pot}
            />
          </NavLink>
        </span>
      </div>
      <div className="flex mt-3 justify-between w-80">
        <span className="flex flex-col items-center">
          <p className="w-16 h-16 rounded-full bg-health bg-cover content-center"></p>
          <p className="w-16 font-medium text-base content-center text-center">
            {food.health}
          </p>
        </span>
        <span className="flex flex-col items-center">
          <p className="w-16 h-16 rounded-full bg-hunger bg-cover content-center"></p>
          <p className="w-16 font-medium text-base content-center text-center">
            {food.hunger}
          </p>
        </span>
        <span className="flex flex-col items-center">
          <p className="w-16 h-16 rounded-full bg-sanity bg-cover content-center"></p>
          <p className="w-16 font-medium text-base content-center text-center">
            {food.sanity}
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <p className="w-16 h-16 rounded-full bg-perishtime bg-cover content-center"></p>
          <p
            className={`w-16 font-medium ${
              foodname == "powcake" ? "text-xs" : "text-base"
            } content-center text-center`}
          >
            {food.perishtime ? food.perishtime + t("ui.days") : t("ui.forever")}
          </p>
        </span>
      </div>
      <div className="flex mt-3 justify-between w-40 items-center">
        <span className="flex flex-col items-center ">
          <p className="w-16 h-16 rounded-full bg-cooktime bg-cover content-center"></p>
          <p className="w-16 font-medium text-base content-center text-center">
            {food.cooktime * 20 + t("ui.s")}
          </p>
        </span>
        <span className="flex flex-col items-center ">
          <p className="w-16 h-16 rounded-full bg-foodtype bg-cover content-center"></p>
          <p className="w-16 font-medium text-base content-center text-center">
            {t("ui." + food.foodtype)}
          </p>
        </span>
      </div>
    </div>
  );
}
