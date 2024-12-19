import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="https://media.licdn.com/dms/image/v2/D5603AQFVx_DHj2fIqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718308936440?e=1740009600&v=beta&t=TB4eVhdrJAIeMG5uPQlQAulQVddOD0Dbpvmq0jTaUoI" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
