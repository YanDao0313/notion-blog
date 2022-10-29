import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>Yandao's Blog Posts</h1>
        <h2>
          轻量、快速的 Notion 博客系统，由 Next.js'{' '}
          <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink>
           驱动
        </h2>

        <Features />

        <div className="explanation">
          <p>
            (｡･∀･)ﾉﾞ氦！我是颜导~你现在看到的是我的新个人博客！
          </p>
          <p>
            我是一名初三学生，爱好科技、数码与开发~ 当然，你也猜得到了，博客更新不可能很频繁QwQ
          </p>
          <p>  
            以下为此项目原仓库就有的说明文字，如果你也想拥有一个这样的博客，不妨看看~
          </p>

          <p>
            This site is a statically generated{' '}
            <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
            <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
            is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>
            . It leverages some upcoming features in Next.js like{' '}
            <ExtLink href="https://github.com/vercel/next.js/issues/9524">
              SSG support
            </ExtLink>{' '}
            and{' '}
            <ExtLink href="https://github.com/vercel/next.js/issues/8626">
              built-in CSS support
            </ExtLink>{' '}
            which allow us to achieve all of the benefits listed above including
            blazing fast speeds, great local editing experience, and always
            being available!
          </p>

          <p>
            Get started by creating a new page in Notion and clicking the deploy
            button below. After you supply your token and the blog index id (the
            page's id in Notion) we will automatically create the table for you!
            See{' '}
            <ExtLink href="https://github.com/ijjk/notion-blog#getting-blog-index-and-token">
              here in the readme
            </ExtLink>{' '}
            for finding the new page's id. To get your token from Notion, login
            and look for a cookie under www.notion.so with the name `token_v2`.
            After finding your token and your blog's page id you should be good
            to go!
          </p>
        </div>
      </div>
    </>
  )
}
