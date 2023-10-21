// /lib/isUniqueWithinCategory.js
import { client } from './client';

export async function isUniqueWithinCategory(slug: any, context: any) {
  const { document } = context;

  // Check if the category exists in the document context. If not, default validation.
  if (!document.category) {
    return true;
  }

  const id = document._id.replace(/^drafts\./, '');
  const categoryRef = document.category._ref;

  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
    categoryRef,
  };

  // The query checks for any other document with the same slug and same category (excluding the current one).
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug && category._ref == $categoryRef][0]._id)`;

  const result = await client.fetch(query, params);
  return result;
}
