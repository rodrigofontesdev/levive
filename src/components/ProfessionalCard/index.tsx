import Image, { StaticImageData } from 'next/image'

type ProfessionalCardProps = {
  avatar: StaticImageData
  title: string
  jobRole: string
  description: string
}

export function ProfessionalCard({ avatar, title, jobRole, description }: ProfessionalCardProps) {
  return (
    <div className="flex flex-col py-12 px-6 border-b border-b-black/5 hover:bg-light-brown cursor-pointer group transition-colors duration-300 ease-in">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-0">
        <div className="w-24 h-24">
          <Image
            src={avatar}
            quality={100}
            alt={`${title}. Foto de perfil`}
          />
        </div>

        <div className="flex flex-col lg:flex-row grow justify-between lg:items-center gap-3 lg:gap-6 sm:pl-6">
          <h3 className="text-4xl md:text-5xl -tracking-wider grow">{title}</h3>
          <p className="text-2xl md:text-3xl lg:text-right">{jobRole}</p>
        </div>
      </div>

      <div className="sm:pl-24 basis-0 group-hover:basis-auto overflow-y-hidden">
        <p className="pt-6 sm:pl-6">{description}</p>
      </div>
    </div>
  )
}
