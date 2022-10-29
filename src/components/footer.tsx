import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>Deploy your own on Vercel</span>
        <ExtLink href="https://vercel.com/new/git/external?repository-url=https://github.com/YanDao0313/notion-blog&project-name=notion-blog&repository-name=notion-blog">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
        <span>
          or{' '}
          <ExtLink href="https://github.com/YanDao0313/notion-blog">
            view source
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
