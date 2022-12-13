---
to: "<%= !children ? `src/components/${component_name}/${component_name}.tsx` : null %>"
---

import { FC } from "react";

import styles from "./<%= component_name %>.module.scss";

import { I<%= component_name %>Props } from "./types";

export const <%= component_name %>: FC<I<%= component_name %>Props> = ({ title }): JSX.Element => (
    <div className={styles.container} >
        <h1>{title || "<%= component_name %> title"}</h1>
    </div>
);
