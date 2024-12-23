import React from "react";

const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="text-xl font-semibold">Explore</h1>
      <ul className="text-md leading-8 text-zinc-800/90 dark:text-zinc-100/90">
        <li>Projects</li>
        <li>Articles</li>
        <li>Snippets</li>
      </ul>
    </div>
  );
};

export default FooterMenu;
