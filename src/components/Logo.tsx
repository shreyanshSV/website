type LogoProps = {
  size?: number;
  fill?: string;
};

export default function Logo({ size = 32, fill = '#F2F2EE' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      overflow="visible"
      viewBox="0 0 256 256"
    >
      <path
        d="M128 0 L148 108 L256 128 L148 148 L128 256 L108 148 L0 128 L108 108 Z"
        fill={fill}
      />
      <circle cx="128" cy="128" r="18" fill="#7342E2" />
    </svg>
  );
}
