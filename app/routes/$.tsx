import { NavLink } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export function loader() {
  return new Response("Not Found", {
    status: 404,
  });
}

export default function NotFoundPage() {
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
