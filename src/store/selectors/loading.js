import _ from 'lodash';

export const createLoadingSelector = actions => state => {
  // returns true only when all actions is not loading

  const actionsCurated = actions.map(action => {
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action);
    if (matches == null || matches.length == 0) {
      return action;
    }
    const [, requestName, requestState] = matches;
    return requestName;
  });

  return _(actionsCurated).some(action =>
    _.get(state, `loadingReducer.${action}`),
  );
};
