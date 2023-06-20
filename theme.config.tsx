import React from "react";
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
  },
  gitTimestamp: ({ timestamp }) => (
    <span>Last updated on {timestamp.toLocaleDateString()}</span>
  ),
};

export default config;
