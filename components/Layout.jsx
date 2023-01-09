import Head from "next/head";
import Link from "next/link";


const Layout = ({ title, description = '', children}) => {
	return (
		<>
			
			<Head>
				<title>{title} | MONK HUB</title>
				<link rel="icon" href="/img/logo.png" type="image/png" />
				<meta
					name='description'
					content={description || 'Гайды на хмелевара'}
				/>
				<meta
					property='og:description'
					content={description || 'Гайды на хмелевара'}
				/>
			</Head>
			
			<div className="container">
				<div className="containerMain">
					<img  src='/img/logo.png' alt='logo' />
					<div className="main_ul">
						<div>
							<img src='/img/overview.png' alt='overview' />
							<Link href='/'>
								Overview
							</Link>
						</div>
						<div>
							<img src='/img/guide.png' alt='guide' />
							<Link href='/guide/brm/intro'>
								Brewmaster
							</Link>
						</div>
						<div>
							<img src='/img/mastodon.png' alt='mastodon' />
							<Link href='https://toot.warcraft.one/about'>
								Mastodon
							</Link>
						</div>
						<div>
							<img src='/img/discord.png' alt='discord' />
							<Link href='https://discord.gg/cCsfEzc'>
								Discord
							</Link>
						</div>
					</div>
					<div className="off_ul">
						<img className="avatar"
						     src='/img/avatar.png'
						     alt='avatar' />
						<p>Nims</p>
						<div className="author_info">
							<div>
								<img src='/img/donate.png' alt='donate' />
								<Link href='https://boosty.to/nims'>
									Boosty
								</Link>
							</div>
							<div>
								<img src='/img/donate.png' alt='donate' />
								<Link href='https://www.donationalerts.com/r/nimsi'>
									DonationAlerts
								</Link>
							</div>
							<div>
								<img src='/img/discord.png' alt='discord' />
								<Link href='https://discord.com'>
								Nims#1892
							</Link>
							</div>
							<div>
								<img src='/img/mastodon.png' alt='mastodon' />
								<Link href='https://toot.warcraft.one/@nims'>
									@nims
								</Link>
							</div>
							<div>
								<img src='/img/about.png' alt='about' />
								<Link href='/'>
									About
								</Link>
							</div>
						</div>
						<p>&copy; WARCRAFT.ONE</p>
					</div>
				</div>
				
				<div className="containerWindow">
					
					<div className="cWcontent">
						{children}
					</div>
					
				</div>
			</div>
		
		</>
	)
}

export default Layout