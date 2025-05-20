import Router from "next/router";

export const handleNavigateTo = (url: string) => {
  Router.push(url);
};
