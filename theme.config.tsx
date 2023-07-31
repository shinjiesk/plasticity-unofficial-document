import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Plasticity Unofficial Manual</span>,
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
          <div>
            <a href="/en">English</a>
            <span> | </span>
            <a href="/ja">日本語</a>
          </div>
          <div>{new Date().getFullYear()}©Shinji esk.</div>
          <div>
            <a
              href="https://github.com/shinjiesk/plasticity-unofficial-document"
              rel="nofollow"
            >
              GitHub
            </a>
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
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  gitTimestamp: ({ timestamp }) => (
    <span>Last updated on {timestamp.toLocaleDateString()}</span>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/" && asPath !== "/ja" && asPath !== "/en") {
      return {
        titleTemplate: "%s - Plasticity Unofficial Manual",
      };
    }
  },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const url =
      "https://plasticitydoc.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta
          property="og:site_name"
          content="Plasticity Unofficial Manual"
        ></meta>
        <meta property="og:url" content={url} />
        {/*         <meta
          property="og:title"
          content={frontMatter.title || "Plasticity Unofficial Manual"}
        /> */}
        {/*         <meta
          property="og:description"
          content={frontMatter.description || ""}
        /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@snj_esk" />
        <meta name="twitter:creator" content="@snj_esk" />
        {/*         <meta
          property="og:image"
          content="https://plasticitydoc.vercel.app/ogp.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://plasticitydoc.vercel.app/ogp.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
        <meta
          name="google-site-verification"
          content="fy4jGFnw_V7JcWL26cXsODdJXStgXdBWJj1XXSOuRKU"
        />
      </>
    );
  },
};

export default config;
