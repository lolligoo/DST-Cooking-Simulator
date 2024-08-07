import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
  const { foodname, food } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full items-center ">
      <span className="flex w-80 h-80 bg-l bg-no-repeat bg-center items-center justify-center">
        <img src={`/images/cookbook_${foodname}.png`} className="w-60 h-60" />
      </span>
      <p className="mt-3 text-2xl font-blod">{t("foods." + foodname)}</p>
      <div className="flex mt-5 items-center ">
        <span className="flex flex-col items-center">
          <img
            src={food.pot ? `/images/${food.pot}.png` : "/images/cookpot.png"}
            className="w-16 h-16 rounded-md"
            alt={food.pot ? food.pot : "cookpot"}
          />
          {/* <p>{food.pot ? t("ui." + food.pot) : t("ui.cookpot")}</p> */}
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
          {food.perishtime + t("ui.days")}
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
