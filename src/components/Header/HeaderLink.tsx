import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import { getAppBaseUrl, getHomeUrl } from "lib/legacy";

import "./Header.css";
import { isHomeSite, shouldShowRedirectModal } from "lib/legacy";

type Props = {
  isHome?: boolean;
  isHomeLink?: boolean;
  className?: string;
  exact?: boolean;
  to: string;
  shouldShowRedirectModal?: boolean;
  showRedirectModal: (to: string) => void;
  redirectPopupTimestamp: number;
  children?: ReactNode;
};

export function HeaderLink({
  isHomeLink,
  className,
  exact,
  to,
  children,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  const isOnHomePage = window.location.pathname === "/";
  const isHome = isHomeSite();

  // Always use NavLink for internal navigation
  return (
    <NavLink activeClassName="active" className={cx(className)} exact={exact} to={to}>
      {children}
    </NavLink>
  );
}
