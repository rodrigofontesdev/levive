import Image, { StaticImageData } from 'next/image'

type ProfessionalCardProps = {
  avatar: StaticImageData
  title: string
  jobRole: string
  description: string
}

export function ProfessionalCard({ avatar, title, jobRole, description }: ProfessionalCardProps) {
  return (
    <div className="flex flex-col py-12 px-6 border-b border-b-black/5 hover:bg-black/5 cursor-pointer group transition-colors duration-200 ease-in">
      <div className="flex items-center">
        <Image
          src={avatar}
          width={100}
          height={100}
          alt={title}
        />

        <div className="flex grow justify-between items-center gap-6 pl-6">
          <h3 className="text-5xl -tracking-wider grow">{title}</h3>
          <p className="text-3xl text-right">{jobRole}</p>
        </div>
      </div>

      <div className="pl-[100px] basis-0 group-hover:basis-auto overflow-y-hidden">
        <p className="text-lg font-light pt-6 pl-6">{description}</p>
      </div>
    </div>
  )
}
