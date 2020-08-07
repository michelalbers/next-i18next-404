import React from "react";
import { NextPage } from "next";
import i18n from "../i18n";

const IndexPage: NextPage<{ t: any }> = (props) => {
  return <div>{props.t("welcome")}!</div>;
};

export default i18n.withTranslation("common")(IndexPage);
