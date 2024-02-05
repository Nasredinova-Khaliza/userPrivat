import scss from "../footer/Footer.module.scss";

const Footer = () => {
	return (
		<div className={scss.Footer}>
			<div className={scss.text}>
				<div>
					<b>Contact</b>
				</div>
				<div>
					<b>FAQs</b>
				</div>
				<div>
					<b>Privacy</b>
				</div>
				<div>
					<b>Terms</b>
				</div>
				<div>
					<b>GetPoints</b>
				</div>
			</div>
			<div>
				<h4>2024 Nasredinova Khaliza</h4>
			</div>
		</div>
	);
};

export default Footer;
