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
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
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

export const meta: MetaFunction = () => {
  let { t } = useTranslation();
  return [
    { title: t("ui.title") },
    { name: "description", content: "Welcome to DST Cooking Simulator" },
  ];
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
      <body className="flex justify-center max-h-dvh h-dvh max-w-dvw w-dvw bg-full bg-clip-border bg-bottom bg-no-repeat bg-cover">
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
    <div className="font-sans p-4 flex flex-col items-center w-full xl:w-3/5 fixed">
      <div className="w-full flex justify-between items-cente border-b-2 border-b-amber-200 border-dotted">
        <h1 className="font-medium content-center text-center">
          <NavLink to={"/?lng=" + locale}>{t("ui.title")}</NavLink>
        </h1>
        <div className="flex">
          <h1 className="w-20 h-9 bg-button bg-cover bg-no-repeat content-center text-center font-medium hover:brightness-75 brightness-100">
            <NavLink to={"cooking?lng=" + locale}>{t("ui.cooking")}</NavLink>
          </h1>
          <h1 className="w-20 h-9 bg-button bg-cover bg-no-repeat content-center text-center font-medium hover:brightness-75 brightness-100">
            <NavLink to={"foods?lng=" + locale}>{t("ui.foods")}</NavLink>
          </h1>
        </div>
      </div>
      <div className="flex w-full mt-6 text-center content-center">
        <Outlet />
      </div>
      <div className="w-20 flex flex-col fixed bottom-1 left-1 justify-center items-center">
        {show && (
          <span className="flex flex-col ">
            <p
              className="w-20 h-8 mb-2 bg-button bg-cover bg-no-repeat text-center content-center font-medium"
              onClick={() => {
                setShow(false);
                navigate("?lng=en");
              }}
            >
              English
            </p>
            <p
              className="w-20 h-8 mb-2 bg-button bg-cover bg-no-repeat text-center content-center font-medium"
              onClick={() => {
                setShow(false);
                navigate("?lng=zhhans");
              }}
            >
              简体中文
            </p>
          </span>
        )}
        <p
          onClick={() => {
            setShow(!show);
          }}
          className="w-14 h-14 rounded-full bg-book text-center content-center bg-cover"
        ></p>
      </div>
    </div>
  );
}
