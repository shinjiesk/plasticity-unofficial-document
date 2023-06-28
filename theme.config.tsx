import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Plasticity Unofficial Document</span>,
  project: {
    link: "https://github.com/shinjiesk/plasticity-unofficial-document",
  },
  docsRepositoryBase:
    "https://github.com/shinjiesk/plasticity-unofficial-document",

  footer: {
    text: (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>{new Date().getFullYear()}©Shinji esk</div>
          <div>
            <a href="/en">English</a>
            <span> | </span>
            <a href="/ja">日本語</a>
          </div>
        </div>
      </>
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

  /*  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://plasticitydoc.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta name="description">{frontMatter.description}</meta>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "Plasticity Unofficial Document"}
        />
        <meta property="og:description" content={frontMatter.description} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@snj_esk"></meta>{" "}
        <meta
          property="og:site_name"
          content="Plasticity Unofficial Document"
        ></meta>
      </>
    );
  }, */
};

export default config;
