import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  let { t } = useTranslation();
  return [
    { title: t("ui.title") },
    { name: "description", content: "Welcome to DST Cooking Simulator" },
  ];
};

export default function Index() {
  let { t } = useTranslation();
  return (
    <div className="flex justify-center w-full flex-col">
      <h1 className="text-3xl">{t("ui.title")}</h1>
      <p className="mt-8">WIP</p>
      <p></p>
      <p></p>
    </div>
  );
}
