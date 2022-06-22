import { createContext, useContext, useEffect, useState } from "react";

// TODO: catch badges from all api response (new achievement, mission, notifications,...);

/**
 * Context that stores api functions
 * @typedef {Object} GeneralContext
 * @property { any } call
 * @property { any } GET
 * @property { any } POST
 * @property { any } PUT
 * @property { any } DELETE
 * @property {Boolean} isFetching
 */

/** @type {import('react').Context<GeneralContext>} */
const ApiContext = createContext({
  call: () => { },
  GET: () => { },
  POST: () => { },
  PUT: () => { },
  DELETE: () => { },
  isFetching: false,
});

export default ApiContext;