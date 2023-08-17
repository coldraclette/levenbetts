import { client } from './lib/client';

export async function getProjectsOverviewWithCategoryData(category: string) {
  const projectsOverview = await client.fetch(
    `*[_type == "category" && title == $category ][0] {
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

export async function getPeoplePageData() {
  const peoplePage = await client.fetch(
    `*[_type == "peoplePage"][0] {
        text,
        additionalText,
        images,
      }`
  );

  return peoplePage;
}

// function to fetch all projects and group them under complete or current
export async function getProjectListData() {
  const projects = await client.fetch(
    `*[_type == "project"] | order(_createdAt asc) {
        _id,
        title,
        subtitle,
        slug,
        status,
        category->{
          _id,
          title
        }
      }`
  );

  const currentProjects = projects.filter(
    (project: any) => project.status === 'current'
  );
  const completeProjects = projects.filter(
    (project: any) => project.status === 'complete'
  );

  return {
    current: currentProjects,
    complete: completeProjects,
  };
}

export async function getLandingPageData() {
  const landingPage = await client.fetch(
    `*[_type == "landingPage"][0] {
        projects[]->{
          _id,
          slug,
          projectImage,
          landingPageImage,
          landingPageMobileImage,
          category->{
            _id,
            title
          },
        },
        seoTitle,
        seoDescription,
        seoImage
      }`
  );

  return landingPage;
}

export async function getCategories() {
  const categories = await client.fetch(
    `*[_type == "category"] | order(title asc) {
        _id,
        title
      }`
  );

  const sortPriority = ['workspaces', 'publications'];

  categories.sort((a: any, b: any) => {
    const indexA = sortPriority.indexOf(a.title);
    const indexB = sortPriority.indexOf(b.title);

    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return -1;
    if (indexB === -1) return 1;

    return indexA - indexB;
  });

  return categories;
}
