type RootPathType = 'posts' | 'digital-garden' | 'portfolio';

export const getPostUrl = (rootPath: RootPathType, slug: string) => {
  return `/${rootPath}/${slug}`
}