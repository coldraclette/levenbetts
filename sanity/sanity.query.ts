import { client } from './lib/client';

export async function getProjectsOverviewWithCategoryData(category: string) {
  const projectsOverview = await client.fetch(
    `*[_type == $category][0] {
        projects[]->{
          _id,
          title,
          subtitle,
          slug,
          projectImage,
          category->{
            _id,
            title
          }
        }
      }`,
    { category }
  );
  return projectsOverview;
}

export async function getSingleProjectData(slug: string) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
          title,
          subtitle,
          text,
          specs,
          images,
          category->{
            _id,
            title
          }
      }`,
    { slug }
  );

  if (!project || !project.category || !project.category._id) {
    return null;
  }

  return project;
}

export async function getProjectNavigation(slug: string, categoryRef: string) {
  const projects = await client.fetch(
    `*[_type == "project" && category._ref == $categoryRef] | order(_createdAt asc) {
      _id,
      slug,
      title
    }`,
    { categoryRef }
  );

  const currentIndex = projects.findIndex(
    (project: any) => project.slug.current === slug
  );

  const prevIndex =
    currentIndex - 1 >= 0 ? currentIndex - 1 : projects.length - 1;
  const nextIndex = currentIndex + 1 < projects.length ? currentIndex + 1 : 0;

  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
}

export async function getOfficePageData() {
  const officePage = await client.fetch(
    `*[_type == "officePage"][0] {
        text,
        additionalText,
        images,
      }`
  );

  return officePage;
}

export async function getAwardsPageData() {
  const awardsPage = await client.fetch(
    `*[_type == "awardsPage"][0] {
        awards,
      }`
  );

  return awardsPage;
}
