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

export default function Food() {
  const location = useLocation();
  const { foodname, food } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full items-center justify-center max-h-130">
      <h1 className="mt-3 text-2xl font-blod">{t("foods." + foodname)}</h1>
      <span className="flex w-80 h-80 bg-l bg-no-repeat bg-clip-border bg-center items-center justify-center">
        <img src={`/images/cookbook_${foodname}.png`} className="w-60 h-60" />
      </span>
      <div className="flex items-center ">
        <span className="flex flex-col items-center">
          <NavLink
            to={`/cooking${location.search}&pot=${
              food.pot
            }&recipes=${food.recipes.concat()}`}
          >
            <img
              src={`/images/${food.pot}.png`}
              className="w-16 h-16 rounded-md"
              alt={food.pot}
            />
          </NavLink>
        </span>
      </div>
      <div className="flex mt-5 justify-between w-80">
        <p className="w-16 h-16 rounded-full bg-health bg-cover content-center font-m text-lg text-slate-50">
          {food.health}
        </p>
        <p className="w-16 h-16 rounded-full bg-hunger bg-cover content-center font-m text-lg text-slate-50">
          {food.hunger}
        </p>
        <p className="w-16 h-16 rounded-full bg-sanity bg-cover content-center font-m text-lg text-slate-50">
          {food.sanity}
        </p>
        <p className="w-16 h-16 rounded-full bg-perishtime bg-cover content-center font-m text-lg text-slate-50">
          {food.perishtime ? food.perishtime + t("ui.days") : t("ui.forever")}
        </p>
      </div>
      <div className="flex mt-5 justify-between w-40 items-center">
        <p className="w-16 h-16 rounded-full bg-cooktime bg-cover content-center font-m text-lg text-slate-50">
          {food.cooktime * 20 + t("ui.s")}
        </p>
        <p className="w-16 h-16 rounded-full bg-foodtype bg-cover content-center font-m text-lg text-slate-50">
          {t("ui." + food.foodtype)}
        </p>
      </div>
    </div>
  );
}
