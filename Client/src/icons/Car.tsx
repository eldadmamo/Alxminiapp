import { IconProps } from "../utils/types";

const Car: React.FC<IconProps> = ({ size = 24, className = "" }) => {
    const svgSize = `${size}px`;

    return (
        <svg
            fill="currentColor"
            className={className}
            height={svgSize}
            width={svgSize}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M2 22c0-2.2 1.8-4 4-4h2.4L12 4h40l3.6 14H62c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4H2c-2.2 0-4-1.8-4-4v-4zM6 22h52l-2.4-10H8.4L6 22zm10 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm40 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/>
            </g>
        </svg>
    );
};

export default Car;