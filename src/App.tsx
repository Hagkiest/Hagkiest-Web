import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Code2,
  Cpu,
  Leaf,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Wind,
  Home,
  Mail,
  Compass,
  Lightbulb,
  Rocket,
  MapPinned,
} from 'lucide-react'
import wallpaper from '@/assets/wallpaper.webp'
import beianIcon from '@/assets/beian.png'

const GITHUB = 'https://github.com/Hagkiest'
const HISPIRIT = 'https://world.xiaomawang.com/w/person/project/all/3369552'
const EMAIL = 'link@hagkiest.top'

function GithubIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

function SectionTitle({ en, zh, desc }: { en: string; zh: string; desc?: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 flex items-center gap-3 text-xs font-medium tracking-[0.35em] text-sky uppercase">
        <span className="h-px w-8 bg-sky/60" />
        {en}
      </p>
      <h2 className="font-serif text-3xl font-bold tracking-wide text-ink md:text-5xl">{zh}</h2>
      {desc && <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">{desc}</p>}
    </Reveal>
  )
}

const NAV = [
  { href: '#about', label: '关于' },
  { href: '#journey', label: '历程' },
  { href: '#works', label: '作品' },
  { href: '#contact', label: '联系' },
]

const TIMELINE = [
  {
    year: '2019',
    title: '与 Scratch 相遇',
    body: '第一次接触 Scratch 图形化编程，加入网易卡搭社区，用积木拼出了第一个属于自己的小作品。',
    icon: Blocks,
    tag: '网易卡搭',
  },
  {
    year: '2020',
    title: '走进 Python 的世界',
    body: '开始学习 Python，进入小码王社区，并创办了社区团队 Hiouk —— 也就是今天的 Hispirit。',
    icon: Terminal,
    tag: '小码王 · Hiouk',
  },
  {
    year: '此后',
    title: 'C++ 与 Vibe Coding',
    body: '继续深入 C++，同时拥抱 Vibe Coding，让 AI 成为创作伙伴，把想法更快地变成现实。',
    icon: Cpu,
    tag: 'C++ · AI',
  },
  {
    year: '现在',
    title: '从 Demo 到产品',
    body: '已开发出许多 demo 与产品，覆盖社区治理、乡村数字化等方向，并持续开源在 GitHub 与 Gitee。',
    icon: Sparkles,
    tag: '持续创造中',
  },
]

const WORKS = [
  {
    name: '清风审核系统',
    en: 'XMWReview',
    desc: '为小码王社区打造的内容审核系统，让社区环境如清风般干净、有序。',
    href: 'https://github.com/Hagkiest/XMWReview',
    icon: ShieldCheck,
    tone: 'from-sky-soft to-white',
    accent: 'text-sky',
    tags: ['社区治理', '内容审核'],
  },
  {
    name: '农村村务管理系统',
    en: 'VillageSmart',
    desc: '面向乡村的村务数字化管理平台，让村务公开、事务处理更高效透明。',
    href: 'https://github.com/Hagkiest/VillageSmart',
    icon: Home,
    tone: 'from-leaf-soft to-white',
    accent: 'text-leaf',
    tags: ['乡村振兴', '数字政务'],
  },
  {
    name: 'Hispirit',
    en: '原 Hiouk',
    desc: '2020 年在小码王社区创办的创作团队，聚集一群热爱编程与创造的伙伴。',
    href: HISPIRIT,
    icon: Users,
    tone: 'from-[#fdf3dc] to-white',
    accent: 'text-[#c98a1b]',
    tags: ['社区团队', '创始人'],
  },
]

const SKILLS = [
  { name: 'Scratch', since: '2019', icon: Blocks },
  { name: 'Python', since: '2020', icon: Terminal },
  { name: 'C++', since: '进阶', icon: Code2 },
  { name: 'Vibe Coding', since: 'AI 协作', icon: Wind },
]

const COMMUNITY_FOOTPRINTS = [
  {
    name: '网易卡搭社区',
    year: '2019 · 起点',
    desc: '从 Scratch 图形化编程开始，在这里认识了代码，也认识了用创造表达自己的乐趣。',
    tone: 'bg-[#e3f3dc]',
    icon: Blocks,
  },
  {
    name: '小码王社区',
    year: '2020 · 探索',
    desc: '以 Python 为起点继续深入编程，在不断实践中积累项目经验与社区连接。',
    tone: 'bg-sky-soft',
    icon: Terminal,
  },
  {
    name: 'Hispirit',
    year: '2020 · 共创',
    desc: '创办 Hiouk（今 Hispirit），和志同道合的伙伴一起，把热爱变成更多可能。',
    tone: 'bg-[#fdf3dc]',
    icon: Users,
  },
]

const CREATIVE_VALUES = [
  {
    title: '从问题出发',
    desc: '关注真实场景，把“能不能更方便一点”的念头变成具体的解决方案。',
    icon: Compass,
    color: 'text-sky',
  },
  {
    title: '快速做出 Demo',
    desc: '先让想法跑起来，再在每一次迭代里把细节打磨得更好。',
    icon: Rocket,
    color: 'text-leaf',
  },
  {
    title: '保持好奇与共创',
    desc: '持续学习新技术，也乐于在社区中交流、分享和一起创造。',
    icon: Lightbulb,
    color: 'text-[#c98a1b]',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const years = new Date().getFullYear() - 2019

  return (
    <div className="relative overflow-x-clip">
      <title>Hagkiest · 个人主页</title>

      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/70 shadow-[0_1px_0_rgba(18,50,74,0.06)] backdrop-blur-xl' : ''
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className={`flex items-center gap-2 text-lg font-semibold tracking-wide transition-colors ${
              scrolled ? 'text-ink' : 'text-white drop-shadow'
            }`}
          >
            <Leaf className="size-5" strokeWidth={2} />
            Hagkiest
          </a>
          <div className="flex items-center gap-1 sm:gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`hidden rounded-full px-4 py-2 text-sm transition-colors sm:block ${
                  scrolled
                    ? 'text-ink/70 hover:bg-ink/5 hover:text-ink'
                    : 'text-white/90 drop-shadow hover:bg-white/15 hover:text-white'
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`ml-1 grid size-10 place-items-center rounded-full transition-colors ${
                scrolled ? 'bg-ink text-white hover:bg-sky' : 'bg-white/20 text-white backdrop-blur hover:bg-white/35'
              }`}
            >
              <GithubIcon className="size-5" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={wallpaper}
          alt="少年在青草山坡上迎风飞翔，远处是蓝天白云与连绵群山"
          className="hero-drift absolute inset-0 size-full object-cover object-[30%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2d4d]/35 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-mist via-mist/85 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
          <p
            className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-xs tracking-[0.25em] text-ink/70 backdrop-blur"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="size-1.5 rounded-full bg-leaf" />
            DEVELOPER · CREATOR · FOUNDER
          </p>
          <h1
            className="rise font-display text-[clamp(4rem,14vw,10.5rem)] leading-[0.88] font-black tracking-[-0.065em] text-ink"
            style={{ animationDelay: '0.25s' }}
          >
            Hagkiest
          </h1>
          <div
            className="rise mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: '0.45s' }}
          >
            <p className="max-w-lg font-serif text-lg leading-relaxed text-ink/75 md:text-xl">
              从一块 Scratch 积木出发，
              <br />
              在代码的山野间，乘风奔跑。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#works"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-sky"
              >
                看看作品
                <ArrowDown className="size-4 transition group-hover:translate-y-0.5" />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Mail className="size-4" />
                邮箱
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:gap-20">
          <div>
            <SectionTitle en="About" zh="你好，我是 Hagkiest" />
            <Reveal delay={100}>
              <div className="space-y-5 text-[17px] leading-[1.95] text-ink/75">
                <p>
                  2019 年，我第一次接触 <b className="font-semibold text-ink">Scratch</b>{' '}
                  编程，加入了网易卡搭社区；2020 年，开始学习{' '}
                  <b className="font-semibold text-ink">Python</b>，进入小码王社区，并创办了{' '}
                  <a
                    href={HISPIRIT}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-sky underline decoration-sky/30 underline-offset-4 hover:decoration-sky"
                  >
                    Hiouk（今 Hispirit）
                  </a>
                  。
                </p>
                <p>
                  后来，我又走进了 <b className="font-semibold text-ink">C++</b> 与{' '}
                  <b className="font-semibold text-ink">Vibe Coding</b>{' '}
                  的世界。一路走来，做出了许多 demo 和产品 —— 我喜欢把脑海里的点子，变成真正能用、能帮到别人的东西。
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="grid grid-cols-2 gap-4 self-end">
            {[
              { k: `${years}+`, v: '年编程旅程', c: 'bg-sky-soft' },
              { k: '4', v: '门语言与方式', c: 'bg-leaf-soft' },
              { k: '3', v: '个社区足迹', c: 'bg-white' },
              { k: '1', v: '个创办的团队', c: 'bg-[#fdf3dc]' },
            ].map((s) => (
              <div
                key={s.v}
                className={`${s.c} rounded-3xl p-6 ring-1 ring-ink/5 transition hover:-translate-y-1 md:p-8`}
              >
                <div className="font-serif text-4xl font-black text-ink md:text-5xl">{s.k}</div>
                <div className="mt-2 text-sm text-ink/60">{s.v}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-16 flex flex-wrap gap-3">
          {SKILLS.map(({ name, since, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-full bg-white py-2 pr-5 pl-2 shadow-sm ring-1 ring-ink/5"
            >
              <span className="grid size-9 place-items-center rounded-full bg-mist text-sky">
                <Icon className="size-4" />
              </span>
              <span className="font-medium text-ink">{name}</span>
              <span className="text-xs text-ink/45">{since}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Journey */}
      <section id="journey" className="relative scroll-mt-20 bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle en="Journey" zh="成长轨迹" desc="每一步都不大，但每一步都在向前。" />
          <ol className="relative grid gap-6 md:grid-cols-4">
            <div className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-sky/40 via-leaf/40 to-sky/10 md:block" />
            {TIMELINE.map(({ year, title, body, icon: Icon, tag }, i) => (
              <Reveal key={year} delay={i * 120} className="relative">
                <li className="list-none">
                  <div className="relative mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-sky to-leaf text-white shadow-lg shadow-sky/25">
                    <Icon className="size-6" />
                  </div>
                  <div className="font-serif text-3xl font-black text-ink/90">{year}</div>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{body}</p>
                  <span className="mt-4 inline-block rounded-full bg-mist px-3 py-1 text-xs text-ink/60">
                    {tag}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Community footprints */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.4fr] md:gap-20">
          <div>
            <SectionTitle
              en="Communities"
              zh="我走过的社区"
              desc="社区是我编程路上重要的坐标。每一次交流、尝试与合作，都让热爱有了回响。"
            />
            <Reveal delay={100}>
              <a
                href={HISPIRIT}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border-b border-sky pb-1 text-sm font-medium text-sky transition hover:text-ink"
              >
                访问 Hispirit 的小码王主页
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
          <div className="space-y-4">
            {COMMUNITY_FOOTPRINTS.map(({ name, year, desc, tone, icon: Icon }, i) => (
              <Reveal key={name} delay={i * 110}>
                <article className="group grid gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:p-6">
                  <span className={`grid size-12 place-items-center rounded-2xl ${tone} text-ink`}>
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ink">{name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{desc}</p>
                  </div>
                  <span className="w-fit rounded-full bg-mist px-3 py-1 text-xs whitespace-nowrap text-ink/55">{year}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Creative principles */}
      <section className="relative overflow-hidden bg-[#eaf5f9] py-24 md:py-32">
        <div className="absolute -top-24 -right-20 size-72 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-leaf/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionTitle
            en="How I Create"
            zh="把想法，做成有用的东西"
            desc="技术只是工具，真正让我兴奋的是发现问题、动手尝试，并看见一个想法慢慢成为现实。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {CREATIVE_VALUES.map(({ title, desc, icon: Icon, color }, i) => (
              <Reveal key={title} delay={i * 120}>
                <article className="h-full rounded-[28px] bg-white/80 p-8 ring-1 ring-white backdrop-blur-sm">
                  <span className={`grid size-12 place-items-center rounded-2xl bg-mist ${color}`}>
                    <Icon className="size-6" />
                  </span>
                  <p className="mt-8 text-xs font-medium tracking-[0.2em] text-ink/35">0{i + 1}</p>
                  <h3 className="mt-2 font-serif text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink/60">
              <MapPinned className="size-5 text-sky" />
              <span>持续探索：社区工具、数字化应用、创意 Demo 与 AI 协作开发</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:py-32">
        <SectionTitle en="Works" zh="作品与项目" desc="一些正在生长的想法。更多创意产品，欢迎到 GitHub 或 Gitee 探索。" />
        <div className="grid gap-6 md:grid-cols-3">
          {WORKS.map(({ name, en, desc, href, icon: Icon, tone, accent, tags }, i) => (
            <Reveal key={name} delay={i * 120}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`group flex h-full flex-col rounded-[28px] bg-gradient-to-b ${tone} p-8 ring-1 ring-ink/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10`}
              >
                <div className="flex items-start justify-between">
                  <span className={`grid size-12 place-items-center rounded-2xl bg-white shadow-sm ${accent}`}>
                    <Icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-ink/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                </div>
                <h3 className="mt-10 font-serif text-2xl font-bold text-ink">{name}</h3>
                <p className="mt-1 text-sm tracking-wide text-ink/45">{en}</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/65">{desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/80 px-3 py-1 text-xs text-ink/60 ring-1 ring-ink/5">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-6">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[28px] bg-ink p-8 text-white transition hover:shadow-2xl hover:shadow-ink/25 md:flex-row md:items-center md:p-10"
          >
            <img
              src={wallpaper}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover object-right opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
            <div className="relative">
              <p className="text-xs tracking-[0.3em] text-white/60 uppercase">More on GitHub & Gitee</p>
              <h3 className="mt-3 font-serif text-2xl font-bold md:text-3xl">还有更多创意产品，等你发现</h3>
            </div>
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition group-hover:bg-sky-soft">
              <GithubIcon className="size-4" />
              github.com/Hagkiest
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden">
        <img
          src={wallpaper}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover object-[80%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mist via-white/30 to-[#0b2d4d]/40" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center md:py-44">
          <Reveal>
            <p className="text-xs tracking-[0.35em] text-ink/60 uppercase">Say hello</p>
            <h2 className="mt-4 font-serif text-4xl font-black text-ink md:text-6xl">一起，乘风而行</h2>
            <p className="mx-auto mt-5 max-w-md text-ink/70">
              有想法、有合作、或只是想聊聊编程？欢迎发邮件给我，或在 GitHub 找到我。
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-medium text-white shadow-xl shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-sky"
              >
                <Mail className="size-5" />
                {EMAIL}
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white/85 px-7 py-4 font-medium text-ink shadow-xl shadow-ink/15 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <GithubIcon className="size-5" />
                关注 @Hagkiest
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} <span className="text-white/85">Hagkiest</span> · 在代码的山野间乘风奔跑
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-4" />
              {EMAIL}
            </a>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=34012402000517"
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <img src={beianIcon} alt="公安备案图标" className="size-4 object-contain" />
              皖公网安备34012402000517号
            </a>
            <a
              href="https://beian.miit.gov.cn/"
              rel="noreferrer"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              皖ICP备2026007802号
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
