const Ellipsis = ({
  size,
  colour,
  dataTestId,
}: {
  size?: string;
  colour?: string;
  dataTestId?: string;
}) => (
  <svg
    width={size}
    height={size}
    fill={colour}
    data-testid={dataTestId}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>ionicons-v5-f</title>
    <circle cx="256" cy="256" r="48" />
    <circle cx="416" cy="256" r="48" />
    <circle cx="96" cy="256" r="48" />
  </svg>
);

export default Ellipsis;
