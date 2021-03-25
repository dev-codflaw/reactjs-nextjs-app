import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'CODFLAW',
  keywords: 'web development, programming, linux, python, django, data-science, cyber-security',
  description: 'Tech Blog, articles about new technical trends, python, linux, opensource technologies.',
}

export default Meta