import Link from "next/link";
import styles from "./BrewMenu.module.scss";

const Menu = () => {
	return (
		<div className={styles.menu}>
			<div>
				<Link href="/">
					<h3>Введение</h3>
				</Link>
			</div>
			<div>
				<Link href="/">
					<h3>таланты</h3>
				</Link>
			</div>
			<div>
				<Link href="/">
					<h3>Экипировка</h3>
				</Link>
			</div>
			<div>
				<Link href="/">
					<h3>Игровой процесс</h3>
				</Link>
			</div>
			<div>
				<Link href="/">
					<h3>UI и Макросы</h3>
				</Link>
			</div>
		</div>
	);
};

export default Menu;
