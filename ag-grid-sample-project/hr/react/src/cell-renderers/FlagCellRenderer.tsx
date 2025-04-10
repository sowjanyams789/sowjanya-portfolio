import type { CustomCellRendererProps } from "ag-grid-react";
import { type FunctionComponent } from "react";

import styles from "./FlagCellRenderer.module.css";

export const FlagCellRenderer: FunctionComponent<CustomCellRendererProps> = ({
  value,
  data: { flag },
}) => (
  <div className={styles.flagCell}>
    <div className={styles.employeeData}>
      <span>{value}</span>
    </div>
    <img
      className={styles.flagImage}
      src={`/example/hr/${flag}.svg`}
      alt={value.toLowerCase()}
    />
  </div>
);
