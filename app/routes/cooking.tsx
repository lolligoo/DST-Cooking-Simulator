import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useNavigate,
  useLoaderData,
  useLocation,
  NavLink,
} from "@remix-run/react";
import { searchIngredients } from "../datas/ingredients";
import { useEffect, useState } from "react";
import { getFoods } from "~/datas/foods";
import { useTranslation } from "react-i18next";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const l = url.searchParams.get("lng");
  const p = url.searchParams.get("cookpot");
  const r = url.searchParams.get("recipes");
  return json({ l, p, r });
};

export default function Cooking() {
  const { l, p, r } = useLoaderData<typeof loader>();
  const [ingredients, setIngredients] = useState<{ [key: string]: string }>({});
  const [recipes, setRecipes] = useState<string[]>(r ? r.split(",") : []);
  const [foods, setFoods] = useState<string[]>([]);
  const [pot, setPot] = useState<string>(p ? p : "cookpot");
  const navigate = useNavigate();
  let { t } = useTranslation();
  const location = useLocation();

  const handleClick = (category: string) => {
    setIngredients(searchIngredients(category));
  };
  const addIngredient = (k: string) => {
    if (recipes.length >= 4) {
      return;
    }
    setRecipes([...recipes, k]);
  };
  const removeIngredient = (index: number) => {
    setFoods([]);
    setRecipes(recipes.filter((e, i) => i !== index));
  };
  // i
  useEffect(() => {
    navigate("?lng=" + l + "&pot=" + pot + "&recipes=" + recipes.concat());
    setIngredients(searchIngredients("all"));
  }, []);
  // f
  useEffect(() => {
    navigate("?lng=" + l + "&pot=" + pot + "&recipes=" + recipes.concat());
    setFoods(getFoods(pot, recipes));
  }, [pot, recipes]);
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex mb-3">
          {/* <img
            alt={t("ui.cookpot")}
            src="/images/cookpot.png"
            onClick={() => setPot("cookpot")}
            className="w-16 h-16 border mr-3"
          /> */}
          <img
            alt={t("ui.portablecookpot")}
            src={`/images/${pot}.png`}
            onClick={() =>
              pot == "cookpot" ? setPot("portablecookpot") : setPot("cookpot")
            }
            className="w-16 h-16 border mr-10"
          />
        </div>
        <div className="flex justify-start relative">
          <div className="flex">
            <img
              alt="1"
              src={
                pot == "cookpot"
                  ? "/images/cookpot_slot.png"
                  : "/images/portablecookpot_slot.png"
              }
              className="w-16 h-16 border mr-3"
            />
            <img
              alt="2"
              src={
                pot == "cookpot"
                  ? "/images/cookpot_slot.png"
                  : "/images/portablecookpot_slot.png"
              }
              className="w-16 h-16 border mr-3"
            />
            <img
              alt="3"
              src={
                pot == "cookpot"
                  ? "/images/cookpot_slot.png"
                  : "/images/portablecookpot_slot.png"
              }
              className="w-16 h-16 border mr-3"
            />
            <img
              alt="4"
              src={
                pot == "cookpot"
                  ? "/images/cookpot_slot.png"
                  : "/images/portablecookpot_slot.png"
              }
              className="w-16 h-16 border mr-3"
            />
          </div>
          <div className="flex top-0 left-0 absolute">
            {recipes &&
              recipes.map((r, index) => (
                <img
                  key={r + index}
                  src={`/images/${r}.png`}
                  className="w-16 h-16 border mr-3"
                  alt={r}
                  onClick={() => removeIngredient(index)}
                />
              ))}
          </div>
        </div>
        <div className="flex mt-5 md:mt-0 ml-0 md:ml-7">
          {foods &&
            foods.map((r, index) => (
              <NavLink key={r} to={`/food/${r}` + location.search}>
                <img
                  key={r + index}
                  src={`/images/${r}.png`}
                  className="w-16 h-16 border mr-2"
                  alt={r}
                />
              </NavLink>
            ))}
        </div>
      </div>
      <div className="flex flex-row border-t border-blue-300 mt-5">
        <div className="flex flex-col justify-start border-r border-blue-300 mt-5 ">
          <p
            className="w-24 h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("all")}
          >
            {t("ui.all")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("fruit")}
          >
            {t("ui.fruit")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("monster")}
          >
            {t("ui.monster")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("sweetener")}
          >
            {t("ui.sweetener")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("veggie")}
          >
            {t("ui.veggie")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("meat")}
          >
            {t("ui.meat")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("fish")}
          >
            {t("ui.fish")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("frozen")}
          >
            {t("ui.frozen")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("magic")}
          >
            {t("ui.magic")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("egg")}
          >
            {t("ui.egg")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("decoration")}
          >
            {t("ui.decoration")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("fat")}
          >
            {t("ui.fat")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("dairy")}
          >
            {t("ui.dairy")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("inedible")}
          >
            {t("ui.inedible")}
          </p>
          <p
            className="h-9 border rounded-md mb-2 text-center content-center"
            onClick={() => handleClick("seed")}
          >
            {t("ui.seed")}
          </p>
        </div>
        <div className="flex ml-5 mt-5 flex-wrap content-start overflow-auto max-h-132">
          {ingredients &&
            Object.keys(ingredients).map((key) => (
              <img
                key={key}
                src={`/images/${key}.png`}
                className="w-16 h-16 border ml-2 mb-2"
                alt={t("ingredients." + key)}
                onClick={() => addIngredient(key)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
