import { FC } from "react";

import styles from "./Footer.module.scss";

import { IFooterProps } from "./types";

export const Footer: FC<IFooterProps> = ({ title }): JSX.Element => (
    <div className={styles.container} >
        <h1>{title || "Footer title"}</h1>
    </div>
);
