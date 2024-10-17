import { IconProps } from "../utils/types";

const Post: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    const svgSize = `${size}px`;

    return (
        <svg
            fill="currentColor"
            className={className}
            height={svgSize}
            width={svgSize}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M128 0c-35.3 0-64 28.7-64 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H128zm256 48h32c8.8 0 16 7.2 16 16v32h-64V48h16zm-288 0h32v48h-64V64c0-8.8 7.2-16 16-16zm-16 448c-8.8 0-16-7.2-16-16V192h48v384H128zm256 0H192V192h192v256zm-64-208h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"/>
            </g>
        </svg>
    );
};

export default Post;