// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

/* As an additional requirement, note that each database request takes 100ms to respond. However, your function must complete in 200ms or less. Since there are three different databases, you must query; one might assume that the minimum time to do so would be 300ms, but that is not the case.
Remember that asynchronous code is intended to run in parallel – two requests can occur simultaneously. Make use of Promise.all to handle requests concurrently where applicable. Promises only need to be sequential if they depend on the previous Promise’s result!*/

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  try {
    //find the user in the database using central
    const dbLocale = await central(id);

    //get user basic info
    const basicInfo = await dbs[dbLocale](id);

    console.log(basicInfo);

    //access to the vault
    // const privateInfo = await vault(id);
    // console.log(privateInfo);

    // concurrently
    const userData = await Promise.all([dbs[dbLocale](id), vault(id)]).then(
      ([basic, vault]) => {
        return { ...basic, ...vault };
      }
    );
    console.log(userData);

    return {
      ...userData
    };
  } catch (e) {
    console.error(e);
  }
}

const user = await getUserData(8);

console.log(user);
