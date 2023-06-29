import { FaStar, FaRegStar } from "react-icons/fa"

type Props = {
  rating: number
  max: number
}

export const RatingIcon = ({ rating = 5, max = 5 }: Props) => (
  <div>
    {Array.from({ length: max }, (_, index) => {

      if (index < rating) return <FaStar key={index} color='var(--iconColor)'/>

      return <FaRegStar key={index} color='var(--iconColor)'/>
    })}
  </div>
)