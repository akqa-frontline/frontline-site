import React from 'react';

export default function ArticlePageLayout(frontMatter: any) {
  const ComponentWithAdditionalProps: React.FunctionComponent = ({
    children,
  }) => {
    // const slug = frontMatter.__resourcePath
    //   .replace('blog/', '')
    //   .replace('.mdx', '');

    return (
      <div>
        <h1>{frontMatter.title}</h1>
        {children}
      </div>
    );
  };

  return ComponentWithAdditionalProps;
}
