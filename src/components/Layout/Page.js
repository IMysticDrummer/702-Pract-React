import { Fragment } from "react";

const Page = ({ subTitle, children }) => {
  return (
    <Fragment>
      <h2>{subTitle}</h2>
      <section>{children}</section>
    </Fragment>
  );
};

export default Page;
