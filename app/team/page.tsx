import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Team | URBTEK Group',
  description: 'Meet the leadership behind URBTEK Group.',
}

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">Leadership</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4">Our Team</h1>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/80 leading-relaxed">
            Strategic minds and engineering excellence — the people who turn complexity
            into accountable delivery.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        {members.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink/60">No team members available.</p>
        )}
      </section>
    </>
  )
}