export default interface Guideline {
  id: number,
  attributes: {
    name: string,
    slug: string,
    guidelineDescription: string,
    guidelineNumber: number,
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
    },
    wcagPrinciple: {
      data: {
        attributes: {
          name: string,
          principleNumber: number
          slug: string
        }
      }
    }
  };
}