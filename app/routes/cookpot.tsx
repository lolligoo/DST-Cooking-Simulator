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
  const p = url.searchParams.get("pot");
  const r = url.searchParams.get("recipes");
  return json({ l, p, r });
};

export default function Cooking() {
  const { l, p, r } = useLoaderData<typeof loader>();
  const [ingredients, setIngredients] = useState<{ [key: string]: string }>({});
  const [recipes, setRecipes] = useState<string[]>(r ? r.split(",") : []);
  const [foods, setFoods] = useState<string[]>([]);
  const [pot, setPot] = useState<string>(p ? p : "cookpot");
  const [active, setActive] = useState<string>("all");
  const [isFull, setIsFull] = useState<boolean>(false);
  const navigate = useNavigate();
  let { t } = useTranslation();
  const location = useLocation();

  const handleClick = (category: string) => {
    setIngredients(searchIngredients(category));
    setActive(category);
  };
  const addIngredient = (k: string) => {
    if (recipes.length >= 4) {
      setIsFull(true);
      return;
    }
    setRecipes([...recipes, k]);
  };
  const removeIngredient = (index: number) => {
    setFoods([]);
    setIsFull(false);
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
        <div className="flex justify-start relative">
          <div className="flex">
            {["1", "2", "3", "4"].map((e) => (
              <img
                key={e}
                alt={e}
                src={`/images/ui/${pot}_slot.png`}
                className="w-17 h-17 mr-3 hover:brightness-75 brightness-100 active:brightness-100"
              />
            ))}
          </div>
          <div className="flex top-0 left-0 absolute">
            {recipes &&
              recipes.map((r, index) => (
                <img
                  key={r + index}
                  src={`/images/ingredients/${r}.png`}
                  className="w-16 h-16 mr-[19px] hover:brightness-75 brightness-100 active:brightness-100"
                  alt={r}
                  onClick={() => removeIngredient(index)}
                />
              ))}
          </div>
        </div>
        <div className="flex mt-3 md:mt-0">
          <img
            alt={t(`ui.${pot}`)}
            src={`/images/ui/${pot}.png`}
            onClick={() =>
              pot == "cookpot" ? setPot("portablecookpot") : setPot("cookpot")
            }
            className="w-17 h-17 mr-3 hover:brightness-75 brightness-100"
          />
          {foods &&
            foods.map((r, index) => (
              <div
                key={r + index}
                className="flex w-17 h-17 bg-slot bg-no-repeat bg-clip-border"
              >
                <NavLink key={r} to={`/food/${r}` + location.search}>
                  <img
                    src={`/images/foods/${r}.png`}
                    className="w-16 h-16 mr-4 hover:brightness-75 brightness-100 active:brightness-100"
                    alt={r}
                  />
                </NavLink>
              </div>
            ))}
        </div>
      </div>
      <div className="flex">
        <div className="flex overflow-y-auto max-h-96 sm:max-h-none w-fit mt-4">
          <span className="flex justify-start flex-col h-fit">
            {[
              "all",
              "fruit",
              "veggie",
              "meat",
              "fish",
              "monster",
              "sweetener",
              "seed",
              "frozen",
              "magic",
              "egg",
              "decoration",
              "fat",
              "dairy",
              "inedible",
            ].map((e) => (
              <p
                key={e}
                className={`w-24 h-10 rounded-md bg-button bg-cover bg-no-repeat text-center content-center font-medium hover:brightness-75 brightness-100" ${
                  active == e && "saturate-200"
                }`}
                onClick={() => handleClick(e)}
              >
                {t(`ui.${e}`)}
              </p>
            ))}
          </span>
        </div>
        <div className="flex mt-4 flex-wrap overflow-auto max-h-96 sm:max-h-130 w-4/6 content-start ml-2">
          {ingredients &&
            Object.keys(ingredients).map((key, i) => (
              <span
                key={key}
                className="flex w-17 h-17 items-center justify-center bg-slot bg-no-repeat bg-clip-border"
              >
                <img
                  src={`/images/ingredients/${key}.png`}
                  className="flex w-16 h-16 mr-2 hover:brightness-75 brightness-100"
                  alt={t("ingredients." + key)}
                  onClick={() => addIngredient(key)}
                />
              </span>
            ))}
        </div>
      </div>
      {isFull && (
        <div className="fixed w-dvw flex justify-center items-center top-1/2 left-0">
          <p className="w-60 font-medium text-lg backdrop-blur">
            {t(`ui.full`)}
          </p>
        </div>
      )}
    </div>
  );
}
