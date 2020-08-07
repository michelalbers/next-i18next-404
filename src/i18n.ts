import NextI18Next from "next-i18next";
import getConfig from "next/config";
import path from "path";

const { localeSubpaths } = getConfig().publicRuntimeConfig;

export default new NextI18Next({
  defaultLanguage: "de",
  otherLanguages: ["en"],
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
});
