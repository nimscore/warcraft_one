import styles from "./TabCore.module.scss";

const Tab = ({ children }) => {
	return <div className={styles.tab}>{children}</div>;
};

export default Tab;
