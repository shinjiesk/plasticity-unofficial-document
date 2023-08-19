import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: (
        <>
            <div style={{ fontWeight: 800 }}>Plasticity</div>&nbsp;Manual
        </>
    ),

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
                    <div>
                        © Copyright {new Date().getFullYear()}. All rights
                        reserved.
                    </div>
                </div>
            </>
        ),
    },
    darkMode: true,
    sidebar: {
        toggleButton: true,
        defaultMenuCollapseLevel: 1,
        autoCollapse: true,
        titleComponent({ title, type }) {
            if (type === "separator") {
                return <div style={{}}>{title}</div>;
            }
            return <>{title}</>;
        },
    },
    docsRepositoryBase:
        "https://github.com/shinjiesk/plasticity-unofficial-document",
    project: {
        link: "https://github.com/shinjiesk/plasticity-unofficial-document",
    },
    editLink: {
        text: <></>,
    },
    gitTimestamp: ({ timestamp }) => (
        <span>Last updated on {timestamp.toLocaleDateString()}</span>
    ),
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/" && asPath !== "/ja" && asPath !== "/en") {
            return {
                titleTemplate: "%s - Plasticity Manual",
            };
        }
    },

    head: () => {
        const { asPath, defaultLocale, locale } = useRouter();
        const { frontMatter } = useConfig();

        const url =
            "https://doc.plasticity.xyz" +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

        return (
            <>
                <meta
                    property="og:site_name"
                    content="Plasticity Manual"
                ></meta>
                <meta property="og:url" content={url} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@getPlasticity" />
                <meta
                    name="google-site-verification"
                    content="fy4jGFnw_V7JcWL26cXsODdJXStgXdBWJj1XXSOuRKU"
                />
            </>
        );
    },
    banner: {
        key: "1.2.6-release",
        text: (
            <a
                href="https://github.com/nkallen/plasticity/releases/tag/v1.2.6"
                target="_blank"
            >
                🎉 Plasticity 1.2.6 is released. Downroad →
            </a>
        ),
    },
};

export default config;
