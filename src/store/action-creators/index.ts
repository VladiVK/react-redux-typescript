import * as UsersActionCreators from '../action-creators/users';
import * as TodosActionCreators from '../action-creators/todos';

export default {
  ...UsersActionCreators,
  ...TodosActionCreators,
};
