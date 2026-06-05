import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const bio = getMetafieldValue(member.metadata?.bio)
  const photo = member.metadata?.photo
  const linkedin = getMetafieldValue(member.metadata?.linkedin)

  return (
    <div className="group rounded-2xl bg-white border border-sand-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-72 overflow-hidden bg-sand-100">
        {photo?.imgix_url ? (
          <img
            src={`${photo.imgix_url}?w=600&h=576&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={288}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-emerald-600 text-5xl font-serif">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-ink">{name}</h3>
        <p className="text-sm text-emerald-600 font-semibold mb-3">{jobTitle}</p>
        {bio && <p className="text-sm text-ink/70 leading-relaxed line-clamp-4">{bio}</p>}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            LinkedIn
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}