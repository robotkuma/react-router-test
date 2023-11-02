import { useEffect, useState } from "react";
import { User } from "./api/user";
import { Helmet } from "react-helmet";

function RandomUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    User.getUser().then(data => setUser(data.results[0]));
  }, []);

  return (
    <>
      <Helmet>
        <title>{`User - This is a user page`}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas, accusamus sunt facere provident natus ratione quo voluptatem optio ipsum veritatis dolores sed quia exercitationem in accusantium deserunt repudiandae modi."
        />
        <meta
          property="og:title"
          content={`User page title`}
        />
        <meta
          property="og:url"
          content={`https://example.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          name="og:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas, accusamus sunt facere provident natus ratione quo voluptatem optio ipsum veritatis dolores sed quia exercitationem in accusantium deserunt repudiandae modi."
        />
        <meta
          property="og:image"
          content="https://placehold.co/600x400/EEE/31343C"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={`User page title`}
        />
        <meta
          property="twitter:url"
          content={`https://example.com`}
        />
        <meta property="twitter:type" content="website" />
        <meta
          name="twitter:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas, accusamus sunt facere provident natus ratione quo voluptatem optio ipsum veritatis dolores sed quia exercitationem in accusantium deserunt repudiandae modi."
        />
        <meta
          property="twitter:image"
          content="https://placehold.co/600x400/EEE/31343C"
        />
      </Helmet>
      <div>
        {user && (
          <>
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <img src={user.picture.thumbnail} height="48" width="48" alt={`${user.name.first} ${user.name.last}`} />
          </>
        )}
      </div>
    </>
  )
}

export default RandomUser;