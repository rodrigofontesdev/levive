import { use } from 'react'
import Image from 'next/image'

import postOneImage from '@/assets/post-1.jpg'
import postTwoImage from '@/assets/post-2.jpg'
import { Post } from '@/components/Post'

type SingleCategoryProps = Promise<{ slug: string }>

export default function SinglePost(props: { params: SingleCategoryProps }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slug } = use(props.params)

  return (
    <div className="pt-20 pb-32">
      <div className="h-[480px] relative overflow-hidden mb-10">
        <Image
          src={postOneImage}
          alt="Post image"
          fill
          className="object-cover object-center group-hover:hover:scale-110 transition-all duration-300 overflow-hidden"
        />
      </div>

      <div className="mb-32">
        <h2 className="text-5xl leading-tight -tracking-wider mt-10 mb-4">Introduction</h2>

        <p className="text-lg leading-normal mb-4">
          Heat styling tools like flat irons, curling wands, and blow dryers have become essential
          tools in our quest for perfect hair. However, excessive heat exposure can lead to damage,
          causing dryness, breakage, and dullness. Let&apos;s explore strategies to protect your
          hair from the harmful effects of heat styling.
        </p>

        <h2 className="text-5xl leading-tight -tracking-wider mt-10 mb-4">
          The Hidden Threat to Healthy Hair
        </h2>

        <p className="text-lg leading-normal mb-4">
          Heat damage occurs when high temperatures weaken the protein bonds in your hair, leading
          to brittleness, split ends, and loss of elasticity. Over time, repeated heat styling can
          cause irreversible damage, leaving your hair looking and feeling unhealthy. Heat damage
          occurs when high temperatures weaken the protein bonds in your hair, leading to
          brittleness, split ends, and loss of elasticity. Over time, repeated heat styling can
          cause irreversible damage, leaving your hair looking and feeling unhealthy.
        </p>

        <h2 className="text-5xl leading-tight -tracking-wider mt-10 mb-4">
          Choosing the Right Heat Styling Tools
        </h2>

        <p className="text-lg leading-normal mb-4">
          Invest in high-quality heat styling tools with adjustable temperature settings and ceramic
          or tourmaline plates. These materials distribute heat evenly and reduce the risk of hot
          spots, minimizing damage to your hair. Invest in high-quality heat styling tools with
          adjustable temperature settings and ceramic or tourmaline plates. These materials
          distribute heat evenly and reduce the risk of hot spots, minimizing damage to your hair.
        </p>

        <h2 className="text-5xl leading-tight -tracking-wider mt-10 mb-4">
          Finding the Optimal Temperature
        </h2>

        <p className="text-lg leading-normal mb-4">
          When using heat styling tools, opt for the lowest effective temperature setting. Higher
          temperatures are not always necessary and can increase the risk of damage to your hair.
          Experiment with different heat settings to find the optimal temperature for your hair type
          and styling needs. When using heat styling tools, opt for the lowest effective temperature
          setting. Higher temperatures are not always necessary and can increase the risk of damage
          to your hair. Experiment with different heat settings to find the optimal temperature for
          your hair type and styling needs.
        </p>

        <h2 className="text-5xl leading-tight -tracking-wider mt-10 mb-4">
          Shielding Your Strands from Harm
        </h2>

        <p className="text-lg leading-normal mb-4">
          When heat styling is unavoidable, opt for protective hairstyles that minimize heat
          exposure. Consider wearing your hair in braids, buns, or twists to shield your strands
          from direct heat and reduce the risk of damage. When heat styling is unavoidable, opt for
          protective hairstyles that minimize heat exposure. Consider wearing your hair in braids,
          buns, or twists to shield your strands from direct heat and reduce the risk of damage.
        </p>
      </div>

      <div>
        <h2 className="uppercase text-4xl sm:text-5xl -tracking-wider mb-10">Recomendados</h2>

        <div className="grid md:grid-cols-2 auto-rows-min gap-16 mb-20">
          <Post
            cover={postOneImage}
            slug="/blog/post-slug"
            title="Assumenda doloremque voluptatibus nesciunt esse corrupti"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ipsum! Quis sapiente
        natus, tempore repellendus numquam ab nemo dolores ex, mollitia maxime accusamus, officia
        ullam beatae voluptatem unde eius!"
          />

          <Post
            cover={postTwoImage}
            slug="/blog/post-slug"
            title="Assumenda doloremque voluptatibus nesciunt esse corrupti"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ipsum! Quis sapiente
        natus, tempore repellendus numquam ab nemo dolores ex, mollitia maxime accusamus, officia
        ullam beatae voluptatem unde eius!"
          />
        </div>
      </div>
    </div>
  )
}
