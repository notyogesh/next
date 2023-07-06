import React from "react";
import { useRouter } from "next/router";
const blogsdetail = () => {
  const router = useRouter();
  const name = router.query.blogsdetail;
  return (
    <div>
      <h1>blogsdetail</h1>

      {""}
      {name}
    </div>
  );
};

export default blogsdetail;
