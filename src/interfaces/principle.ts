export default interface Principle {
  id: number,
  attributes: {
    name: string,
    slug: string,
    principleDescription: string,
    principleNumber: number,
    metaDescription: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string,
    localizations: {
      data: [{
        attributes: {
          slug: string
        }
      }]
    }
  };
}