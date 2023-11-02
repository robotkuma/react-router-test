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
      {user && (
        <Helmet>
          <title>{`User - ${user.name.first} ${user.name.last}`}</title>
          <meta
            name="description"
            content={`Hi, my name is ${user.name.first} ${user.name.last}. I'm ${user.registered.age} years old.`}
          />
          <meta
            property="og:title"
            content={`${user.name.first} ${user.name.last}`}
          />
          <meta
            property="og:url"
            content={`${user.email}`}
          />
          <meta property="og:type" content="website" />
          <meta
            name="og:description"
            content={`Hi, my name is ${user.name.first} ${user.name.last}. I'm ${user.registered.age} years old.`}
          />
          <meta
            property="og:image"
            content={user.picture.large}
          />
          <meta name="twitter:card" content="summary" />
          <meta
            property="twitter:title"
            content={`${user.name.first} ${user.name.last}`}
          />
          <meta
            property="twitter:url"
            content={`${user.email}`}
          />
          <meta property="twitter:type" content="website" />
          <meta
            name="twitter:description"
            content={`Hi, my name is ${user.name.first} ${user.name.last}. I'm ${user.registered.age} years old.`}
          />
          <meta
            property="twitter:image"
            content={user.picture.large}
          />
        </Helmet>
      )}
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