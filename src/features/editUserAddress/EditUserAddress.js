import React from "react";
import { connect } from "react-redux";
import { updateUserAction } from "../../app/userSlice";

export class _EditUserAddress extends React.Component {
  state = {
    address: this.props.user.address,
  };

  updateUser = () => {
    this.props.updateUser({ address: this.state.address });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.user.address !== this.props.user.address) {
      this.setState({ address: this.props.user.address });
    }
  }

  render() {
    return (
      <div>
        <h1>Edit user</h1>
        <section>
          <label>Address</label>
          <input
            type="text"
            value={this.state.address}
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
          />
          <button onClick={this.updateUser}>Update</button>
        </section>
      </div>
    );
  }
}

export const EditUserAddress = connect(
  (state) => {
    return {
      user: state.user,
    };
  },
  (dispatch) => ({
    updateUser: (payload) => dispatch(updateUserAction(payload)),
  })
)(_EditUserAddress);
