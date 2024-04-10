import "./ribbon.css";

export default function Ribbon({
  text,
  bgColor = "blue",
  textColor = "white",
}: {
  text: string;
  bgColor?: "blue" | "orange" | "green" | "red";
  textColor?: "white" | "black";
}) {
  return (
    <div className="ribbon">
      <span
        className={`ribbon-text ${textColor === "white" ? `text-white` : textColor === "black" ? `text-black` : ``} ${bgColor === "blue" ? `bg-blue-500` : bgColor === "orange" ? `bg-orange-400` : bgColor === "green" ? `bg-green-600` : bgColor === "red" ? `bg-red-600` : ``}`}
      >
        {text}
      </span>
    </div>
  );
}
