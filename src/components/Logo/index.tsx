import { Box } from "@chakra-ui/react";

type logoProps = {
  color: string;
};

export const Logo: React.FC<logoProps> = (props: logoProps) => {
  const { color } = props;

  return (
    <Box className="logo-container">
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo" clipPath="url(#clip0_7_8)">
          <path
            id="Vector 1"
            d="M44.8742 9.98202L12.7148 9.34491L12.6355 9.86459C12.4543 11.0536 13.4031 12.1439 14.6404 12.1684L39.5325 12.6615L39.8492 12.6615C41.2479 12.6615 41.8305 14.4333 40.6784 15.1832C40.5544 15.2638 40.445 15.3636 40.3541 15.4787L25.5246 34.2648C24.7859 35.2007 25.0747 36.5738 26.1389 37.1847L26.6425 37.4739L46.4701 13.2052C47.5116 11.9305 46.5633 10.0155 44.8742 9.98202Z"
            fill={color}
            stroke={color}
            strokeWidth="0.1"
          />
          <path
            id="Vector 2"
            d="M6.28811 43.0488L38.4551 43.3412L38.5285 42.819C38.6958 41.6288 37.7349 40.5499 36.4976 40.5386L11.6004 40.3123C10.1513 40.4972 9.35725 38.6822 10.4781 37.7854C10.5656 37.7155 10.6451 37.6348 10.7131 37.5467L25.3557 18.5594C26.0834 17.6159 25.779 16.2471 24.7084 15.6479L24.1998 15.3633L4.6555 39.8446C3.62911 41.1303 4.59884 43.0335 6.28811 43.0488Z"
            fill={color}
            stroke={color}
            strokeWidth="0.1"
          />
          <rect
            id="Rectangle 1"
            x="17.0381"
            y="25.7221"
            width="16.5481"
            height="2.83067"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_7_8">
            <rect width="52" height="52" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};
