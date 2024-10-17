import { IconProps } from "../utils/types";

const Upload: React.FC<IconProps> = ({ size = 24, className = "" }) => {
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
                <path d="M32 4c1.1 0 2 .9 2 2v34l9.7-9.7c.8-.8 2-.8 2.8 0s.8 2 0 2.8l-14 14c-.8.8-2 .8-2.8 0l-14-14c-.8-.8-.8-2 0-2.8s2-.8 2.8 0L30 40V6c0-1.1.9-2 2-2zm-22 46h44c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2zm2 2v4h40v-4H12z" />
            </g>
        </svg>
    );
};

export default Upload;
