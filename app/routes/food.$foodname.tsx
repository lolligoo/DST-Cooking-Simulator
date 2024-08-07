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
      <p className="mt-5 text-2xl font-blod">{t("foods." + foodname)}</p>
      <div className="flex mt-5 items-center ">
        <span className="flex flex-col items-center">
          <img
            src={food.pot ? `/images/${food.pot}.png` : "/images/cookpot.png"}
            className="w-16 h-16 rounded-md"
            alt="cookpot"
          />
          <p>{food.pot ? t("ui." + food.pot) : t("ui.cookpot")}</p>
        </span>
      </div>
      <div className="flex mt-5 justify-between w-80">
        <span>
          <img
            src="/images/health.png"
            className="w-16 h-16 rounded-full"
            alt="health"
          />
          <p>{food.health}</p>
        </span>
        <span>
          <img
            src="/images/hunger.png"
            className="w-16 h-16 rounded-full"
            alt="hunger"
          />
          <p>{food.hunger}</p>
        </span>
        <span>
          <img
            src="/images/sanity.png"
            className="w-16 h-16 rounded-full"
            alt="sanity"
          />
          <p>{food.sanity}</p>
        </span>
        {food.perishtime && (
          <span>
            <img
              src="/images/perishtime.png"
              className="w-16 h-16 rounded-full"
              alt="perishtime"
            />
            <p>{food.perishtime}</p>
          </span>
        )}
      </div>
      <div className="flex mt-5 justify-between w-40 items-center">
        <span>
          <img
            src="/images/cooktime.png"
            className="w-16 h-16 rounded-full"
            alt="cooktime"
          />
          <p>{food.cooktime}</p>
        </span>
        {food.foodtype && (
          <span className="flex flex-col items-center">
            <img
              src="/images/foodtype.png"
              className="w-16 h-16 rounded-full"
              alt="foodtype"
            />
            <p>{t("ui." + food.foodtype)}</p>
          </span>
        )}
      </div>
    </div>
  );
}
