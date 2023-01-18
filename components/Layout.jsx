import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const Layout = ({ title, description = "", children }) => {
	return (
		<>
			<Head>
				<title>{title} | MONK HUB</title>
				<link rel="icon" href="/img/logo.png" type="image/png" />

				<meta
					name="description"
					content={description || "Гайды на хмелевара"}
				/>
				<meta
					property="og:description"
					content={description || "Гайды на хмелевара"}
				/>
			</Head>

			<div className="container">
				<div className="containerMain">
					<Link className="logo" href="/">
						<picture>
							<img src="/img/logo4.png" alt="logo" />
						</picture>
					</Link>
					<div className="main_ul">
						<div>
							<picture>
								<img src="/img/overview.png" alt="overview" />
							</picture>
							<Link href="/">Overview</Link>
						</div>
						<div>
							<picture>
								<img src="/img/guide.png" alt="guide" />
							</picture>
							<Link href="/guide/brm/intro">Brewmaster</Link>
						</div>
						<div>
							<picture>
								<img src="/img/mastodon.png" alt="mastodon" />
							</picture>
							<Link href="https://toot.warcraft.one/about">Mastodon</Link>
						</div>
						<div>
							<picture>
								<img src="/img/discord.png" alt="discord" />
							</picture>
							<Link href="https://discord.gg/cCsfEzc">Discord</Link>
						</div>
					</div>
					<div className="off_ul">
						<picture>
							<img className="avatar" src="/img/avatar.png" alt="avatar" />
						</picture>
						<p>Nims</p>
						<div className="author_info">
							<div>
								<picture>
									<img src="/img/donate.png" alt="donate" />
								</picture>
								<Link href="https://boosty.to/nims">Boosty</Link>
							</div>
							<div>
								<picture>
									<img src="/img/donate.png" alt="donate" />
								</picture>
								<Link href="https://www.donationalerts.com/r/nimsi">
									DonationAlerts
								</Link>
							</div>
							<div>
								<picture>
									<img src="/img/discord.png" alt="discord" />
								</picture>
								<Link href="https://discord.com">Nims#1892</Link>
							</div>
							<div>
								<picture>
									<img src="/img/mastodon.png" alt="mastodon" />
								</picture>
								<Link href="https://toot.warcraft.one/@nims">@nims</Link>
							</div>
							<div>
								<picture>
									<img src="/img/about.png" alt="about" />
								</picture>
								<Link href="/">About</Link>
							</div>
						</div>
						<p>&copy; WARCRAFT.ONE</p>
					</div>
				</div>

				<div className="containerWindow">{children}</div>
			</div>
			<Script src="https://wow.zamimg.com/widgets/power.js"></Script>
		</>
	);
};

export default Layout;
