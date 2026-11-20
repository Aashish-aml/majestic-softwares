import {
  siCypress, siDocker, siExpress, siFirebase, siGit, siGithubactions, siGoogleanalytics,
  siJavascript, siMongodb, siMysql, siNextdotjs, siNodedotjs, siPhp, siPython,
  siReact, siSymfony, siTerraform, siWordpress,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import { Check, GitCompareArrows } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type TechnologyItem = {
  name: string
  logo?: SimpleIcon
  marker?: string
  icon?: LucideIcon
}

type TechnologyGroup = { title: string; items: TechnologyItem[] }

const technologyGroups: TechnologyGroup[] = [
  {
    title: 'Backend development',
    items: [
      { name: 'PHP', logo: siPhp }, { name: 'Symfony', logo: siSymfony },
      { name: 'Node.js', logo: siNodedotjs }, { name: 'Express.js', logo: siExpress },
      { name: 'Python', logo: siPython }, { name: 'WordPress', logo: siWordpress },
    ],
  },
  {
    title: 'Frontend development',
    items: [
      { name: 'React.js', logo: siReact }, { name: 'Next.js', logo: siNextdotjs },
      { name: 'JavaScript', logo: siJavascript },
    ],
  },
  {
    title: 'Databases & storage',
    items: [
      { name: 'MySQL', logo: siMysql }, { name: 'AWS Aurora', marker: 'aws' },
      { name: 'DynamoDB', marker: 'aws' }, { name: 'MongoDB', logo: siMongodb },
      { name: 'Firebase', logo: siFirebase },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS EC2', marker: 'aws' }, { name: 'AWS ECS', marker: 'aws' },
      { name: 'AWS S3', marker: 'aws' }, { name: 'AWS CloudSearch', marker: 'aws' },
      { name: 'AWS CloudWatch', marker: 'aws' }, { name: 'AWS SNS', marker: 'aws' },
      { name: 'AWS SQS', marker: 'aws' }, { name: 'Terraform', logo: siTerraform },
      { name: 'Docker', logo: siDocker }, { name: 'Git', logo: siGit },
      { name: 'CI/CD', logo: siGithubactions },
    ],
  },
  {
    title: 'Quality & analytics',
    items: [
      { name: 'Manual testing', icon: Check }, { name: 'Automation testing', logo: siCypress },
      { name: 'A/B testing', icon: GitCompareArrows }, { name: 'Google Analytics', logo: siGoogleanalytics },
    ],
  },
]

function TechnologyMark({ item }: { item: TechnologyItem }) {
  if (item.logo) {
    return (
      <svg className="technology-mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d={item.logo.path} fill="currentColor" />
      </svg>
    )
  }

  if (item.marker === 'aws') {
    return <span className="technology-mark technology-mark--aws" aria-hidden="true">aws<span /></span>
  }

  const Icon = item.icon
  return Icon ? <Icon className="technology-mark technology-mark--lucide" size={20} aria-hidden="true" /> : null
}

export function TechnologySection() {
  return (
    <section className="technology-section section-pad" id="technology" aria-labelledby="technology-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow"><span className="eyebrow__line" /> Tools, chosen with purpose</p>
            <h2 id="technology-title">The right stack.<br /><span>For the real world.</span></h2>
          </div>
          <p className="section-heading__aside">
            Deep experience across the tools and platforms that power dependable, high-traffic digital products.
          </p>
        </div>

        <div className="technology-board">
          {technologyGroups.map(({ title, items }, index) => (
            <section className="technology-group" key={title} aria-labelledby={`technology-group-${index}`}>
              <div className="technology-group__heading">
                <span className="technology-group__number">0{index + 1}</span>
                <h3 id={`technology-group-${index}`}>{title}</h3>
                <span className="technology-group__count">{String(items.length).padStart(2, '0')} technologies</span>
              </div>
              <ul className="technology-list">
                {items.map((item) => (
                  <li className="technology-chip" key={item.name}>
                    <span className={`technology-chip__logo${item.logo ? ` technology-chip__logo--${item.logo.slug}` : ''}${item.marker ? ' technology-chip__logo--brand' : ''}`}>
                      <TechnologyMark item={item} />
                    </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="technology-note">Technology should serve the product—not the other way around.</p>
      </div>
    </section>
  )
}
