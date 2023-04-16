import { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface IPageContainer {
  title: string;
  description: string;
  children: ReactNode;
}

const PageContainer = ({ title, description, children }: IPageContainer) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

export default PageContainer;
