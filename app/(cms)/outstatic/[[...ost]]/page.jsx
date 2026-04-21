import 'outstatic/outstatic.css';
import { Outstatic } from 'outstatic';
import { OstClient } from 'outstatic/client';

export default async function Page({ params }) {
  const resolvedParams = await params;
  const ostData = await Outstatic();
  d
  return <OstClient ostData={ostData} params={resolvedParams} />;
}
// export default async function Page(props) {
//   console.log('ENV CHECK:', {
//     hasGithubToken: !!process.env.GITHUB_TOKEN,
//     hasOstGithubId: !!process.env.OST_GITHUB_ID,
//     repoSlug: process.env.OST_REPO_SLUG,
//     repoBranch: process.env.OST_REPO_BRANCH,
//     repoOwner: process.env.OST_REPO_OWNER,
//   })

//   const ostData = await Outstatic()
//   return <OstClient ostData={ostData} />
// }