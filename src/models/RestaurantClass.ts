class RestaurantClass {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  rating: number
  link: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    rating: number,
    link: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.rating = rating
    this.link = link
  }
}

export default RestaurantClass
