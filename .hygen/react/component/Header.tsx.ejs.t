import { FC, PropsWithChildren } from "react";

import styles from "./Header.module.scss";

import { IHeaderProps } from "./types";

export const Header: FC<PropsWithChildren<IHeaderProps>> = ({ title, children }): JSX.Element => (
    <div className={styles.container} >
        <h1>{title || "Header title"}</h1>
        <div>{children}</div>
    </div>
);
