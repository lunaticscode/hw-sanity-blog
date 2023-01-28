import { FC } from "react";
import { FallbackProps } from "react-error-boundary";

const AppError: FC<FallbackProps> = (props) => {
  const { error } = props;
  console.log({ error });
  return <>Occured Error</>;
};
export default AppError;
