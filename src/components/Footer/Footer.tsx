import { FC, PropsWithChildren } from "react";

import styles from "./Footer.module.scss";

import { IFooterProps } from "./types";

export const Footer: FC<PropsWithChildren<IFooterProps>> = ({ title, children }): JSX.Element => (
    <div className={styles.container} >
        <h1>{title || "Footer title"}</h1>
        <div>{children}</div>
    </div>
);
