import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import createUrqlClient from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Hello World</div>
      <br />
      {!data ? (
        <div>Loading ...</div>
      ) : (
        data.posts.map((p) => <div key={p._id}> {p.title}</div>)
      )}
    </>
  );
};

/*
 * Diff between server side on & off
 *  Server side  rendering : charge les données du côté serveur et ensuite affiche la page sans indicateur de chargement ( genre le Loading)
 *  Server side  off : il charge la page, et ensuite il va chercher les données côté serveur ce qui peut laisser paraitre une page de chargement( genre le Loading)
 *  Si les données doivent être trouvés par un bon SEO ( ex : Google ), alors on active le SSR
 */
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
