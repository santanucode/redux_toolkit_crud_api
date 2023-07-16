import { connect } from "react-redux";
import { RootState, TypedDispatch } from "../../../../redux/store";
import User from "../component/user";
import { fetchAllUsers, fetchCreateUser } from "../service/userSlice";

interface StateProps {
  error_users: string | boolean | undefined;
  loading_users: boolean;
  success_users: boolean;

  loading_create_user: boolean;
  sucess_create_user: boolean;
  error_create_user: string | boolean | undefined;

  userList?: any;
}

interface DispatchProps {
  getAllUsers(): void;
  createUser(body: any): void;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    error_users: state.users.error_users,
    loading_users: state.users.loading_users,
    success_users: state.users.success_users,
    error_create_user: state.users.error_create_user,
    loading_create_user: state.users.loading_create_user,
    sucess_create_user: state.users.sucess_create_user,
    userList: state.users.userList
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {
    getAllUsers: () => {
      dispatch(fetchAllUsers());
    },
    createUser: (data) => {
      dispatch(fetchCreateUser(data));
    }
  };
};

export interface UsersProps extends StateProps, DispatchProps {}
export const UsersComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
