import { FC } from "react";
import { Spin } from "antd";
import classNames from "classnames";

import "./Preloader.scss";

interface PreloaderProps {
  size?: "small" | "large";
  fullScreen?: boolean;
  center?: boolean;
}

const Preloader: FC<PreloaderProps> = ({
  size,
  fullScreen,
  center,
}): JSX.Element => {
  return (
    <div
      className={classNames({
        center: center,
        "full-screen center": fullScreen,
      })}
    >
      <Spin size={size} />
    </div>
  );
};

export default Preloader;
