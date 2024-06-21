export default interface Principle {
  id: number,
  attributes: {
    name: string,
    slug: string,
    principleDescription: string,
    principleNumber: number,
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