import {
  Links,
  Meta,
  Outlet,
  NavLink,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import "./tailwind.css";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";
import i18next from "./i18next.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useState } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}
export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

export function Layout({ children }: { children: React.ReactNode }) {
  // Get the locale from the loader
  let { locale } = useLoaderData<typeof loader>();
  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);
  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="flex justify-center h-full ">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const navigate = useNavigate();
  let { locale } = useLoaderData<typeof loader>();
  const [show, setShow] = useState<boolean>(false);
  let { t } = useTranslation();
  return (
    <div className="font-sans p-4 flex flex-col items-center w-full xl:w-3/5 max-h-screen">
      <div className="top-0 w-full h-fit rounded-rm border-b border-red-400 flex justify-between">
        <h1 className="text-xl mt-0">
          <NavLink to={"/?lng=" + locale}>{t("ui.title")}</NavLink>
        </h1>
        <div className="flex ">
          <h1 className="mt-0 h-6">
            <NavLink to={"cooking?lng=" + locale}>{t("ui.cooking")}</NavLink>
          </h1>
          <h1 className="mt-0 ml-3 h-6">
            <NavLink to={"foods?lng=" + locale}>{t("ui.foods")}</NavLink>
          </h1>
        </div>
      </div>
      <div className="flex w-full ml-0 mt-5 text-center content-center">
        <Outlet />
      </div>
      <div className=" flex flex-col fixed bottom-8 right-8 justify-end items-center">
        {show && (
          <div className="bg-white flex flex-col justify-center ">
            <p
              className="w-18 h-8 rounded-full border mb-2 text-center content-center"
              onClick={() => {
                setShow(false);
                navigate("?lng=en");
              }}
            >
              English
            </p>
            <p
              className="w-18 h-8 rounded-full border mb-2 text-center content-center"
              onClick={() => {
                setShow(false);
                navigate("?lng=zhhans");
              }}
            >
              简体中文
            </p>
          </div>
        )}
        <p
          onMouseEnter={() => {
            setShow(!show);
          }}
          className="w-12 h-12 rounded-full border border-purple-950 text-center content-center"
        ></p>
      </div>
    </div>
  );
}
