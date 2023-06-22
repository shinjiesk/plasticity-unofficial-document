import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Plasticity Unofficial Document</span>,
  project: {
    link: "https://github.com/shinjiesk/plasticity-unofficial-document",
  },
  docsRepositoryBase:
    "https://github.com/shinjiesk/plasticity-unofficial-document",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()}
        {"  "}©{"  "}Shinji esk
      </span>
    ),
  },
  darkMode: true,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  gitTimestamp: ({ timestamp }) => (
    <span>Last updated on {timestamp.toLocaleDateString()}</span>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/" && asPath !== "/ja" && asPath !== "/en") {
      return {
        titleTemplate: "%s – Plasticity Unofficial Document",
      };
    }
  },
  head: (
    <>
      <meta
        property="og:site_name"
        content="Plasticity Unofficial Document"
      ></meta>
      <meta
        property="og:description"
        content="Unofficial document of Plasticity 3D"
      />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@snj_esk"></meta>
    </>
  ),
};

export default config;
