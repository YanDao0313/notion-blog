import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import bilibili from '../components/svgs/bilibili'
import Youtube from '../components/svgs/youtube'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/YanDao0313',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/YanDao0313',
  },
  {
    Comp: bilibili,
    alt: 'bilibili icon',
    link: 'https://www.linkedin.com/in/jj-kasper-0b5392166/',
  },
  {
    Comp: Youtube,
    alt: 'Youtube icon',
    link: 'mailto:jj@jjsweb.site?subject=Notion Blog',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:blog@daoblog.top?subject=Notion Blog',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          Yandao - Normal Middle School Student @{' '}
          <ExtLink href="https://www.gov.cn">PRC</ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
