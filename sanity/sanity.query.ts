import { Project } from '@/app/(site)/types/types';

import { client } from './lib/client';

export async function getProjectsOverviewWithCategoryData(category: string) {
  const projectsOverview = await client.fetch(
    `*[_type == "category" && title == $category ][0] {
        projects[]->{
          _id,
          title,
          subtitle,
          slug,
          projectImage {
            alt,
            asset->{
              ...,
              metadata
            }
          },
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

export async function getSingleProjectData(categoryRef: string, slug: string) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug && category._ref == $categoryRef][0] {
          title,
          subtitle,
          text,
          specs,
          "images": images[] {
            _key,
            "alt": alt,
            "asset": asset->{
              ...,
              metadata
            }
          },
          category->{
            _id,
            title
          }
      }`,
    { categoryRef, slug }
  );

  if (!project || !project.category || !project.category._id) {
    return null;
  }

  return project;
}

export async function getProjectNavigation(slug: string, categoryRef: string) {
  // Fetch the projects in the custom order (as they appear in the overview)
  const orderedProjects = await client.fetch(
    `*[_type == "category" && _id == $categoryRef][0].projects[]->{
      _id,
      slug,
      title
    }`,
    { categoryRef }
  );

  // Find the index of the current project
  const currentIndex = orderedProjects.findIndex(
    (project: Project) => project.slug && project.slug.current === slug
  );

  // Calculate the indices for the previous and next projects
  const prevIndex =
    currentIndex - 1 >= 0 ? currentIndex - 1 : orderedProjects.length - 1;
  const nextIndex =
    currentIndex + 1 < orderedProjects.length ? currentIndex + 1 : 0;

  // Return the previous and next projects
  return {
    prev: orderedProjects[prevIndex],
    next: orderedProjects[nextIndex],
  };
}
export async function getOfficePageData() {
  const officePage = await client.fetch(
    `*[_type == "officePage"][0] {
        text,
        additionalText,
        "images": images[] {
          _key,
          "alt": alt,
          "asset": asset->{
            ...,
            metadata
          }
        },
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
        text2,
        additionalText,
        "images": images[] {
          _key,
          "alt": alt,
          "asset": asset->{
            ...,
            metadata
          }
        },
      }`
  );

  return peoplePage;
}

function customSort(a: any, b: any) {
  const titleA = a.title.match(/^(\d+)?(.*)/);
  const titleB = b.title.match(/^(\d+)?(.*)/);

  const numA = titleA[1] ? parseInt(titleA[1], 10) : null;
  const numB = titleB[1] ? parseInt(titleB[1], 10) : null;

  // Sort numbers first, if they exist
  if (numA !== null && numB !== null) {
    return numA - numB;
  } else if (numA !== null) {
    return -1;
  } else if (numB !== null) {
    return 1;
  }

  // If no numbers, sort alphabetically
  return titleA[2].localeCompare(titleB[2]);
}

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

  const currentProjects = projects
    .filter((project: any) => project.status === 'current')
    .sort(customSort);

  const completeProjects = projects
    .filter((project: any) => project.status === 'complete')
    .sort(customSort);

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
          projectImage {
            alt,
            position,
            asset->{
              ...,
              metadata
            }
          },
          landingPageImage {
            alt,
            position,
            asset->{
              ...,
              metadata
            }
          },
          landingPageMobileImage {
            alt,
            asset->{
              ...,
              metadata
            }
          },
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

export async function getCategoryID(categoryName: string) {
  const category = await client.fetch(
    `*[_type == "category" && title == $categoryName][0] {
      _id
    }`,
    { categoryName }
  );

  return category?._id || null;
}

export async function getResearchPageData() {
  const researchPage = await client.fetch(
    `*[_type == "researchPage"][0] {
        "models_first_row": models_first_row[] {
          _key,
          "alt": alt,
          "asset": asset->{
            ...,
            metadata
          }
        },
        "models_second_row": models_second_row[] {
          _key,
          "alt": alt,
          "asset": asset->{
            ...,
            metadata
          }
        },
        "drawings_first_row": drawings_first_row[] {
          _key,
          "alt": alt,
          "asset": asset->{
            ...,
            metadata
          }
        },
        "drawings_second_row": drawings_second_row[] {
          _key,
          "alt": alt,
          "asset": asset->{
            ...,
            metadata
          }
        },
        seoTitle,
        seoDescription,
        seoImage
      }`
  );

  return researchPage;
}

export async function getWorkPageData() {
  const workPage = await client.fetch(
    `*[_type == "workPage"][0] {
        featuredProjects[]->{
          _id,
          title,
          subtitle,
          slug,
          projectImage {
            alt,
            asset->{
              ...,
              metadata
            }
          },
          category->{
            _id,
            title
          }
        },
        seoTitle,
        seoDescription,
        seoImage
      }`
  );

  return workPage;
}