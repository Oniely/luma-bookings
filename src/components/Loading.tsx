import { Loader } from "lucide-react";

const Loading = ({
	size = 18,
	color = "#1e1e1e",
}: {
	size?: number;
	color?: string;
}) => {
	return (
		<Loader
			size={size}
			color={color}
			className="animate-spin mx-auto"
			style={{ animationDuration: "2.5s" }}
		/>
	);
};

export default Loading;
