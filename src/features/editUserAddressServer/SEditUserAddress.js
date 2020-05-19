import React from "react";
import { connect } from "react-redux";
import { updateUserAction } from "../../app/userSlice";
import { api } from "../../app/api";

export class _EditUserAddress extends React.Component {
  state = {
    address: this.props.user.address,
    loading: false,
  };

  handleAddressUpdate = () => {
    this.setState({ loading: true });
    api
      .patch(`/users/1`, {
        address: this.state.address,
      })
      .then((user) => {
        this.props.updateUser(user);
        this.setState({ loading: false });
      });
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
          <button onClick={this.handleAddressUpdate}>Update</button>
        </section>
        {this.state.loading && <div className="loading"></div>}
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
  {
    updateUser: updateUserAction,
  }
)(_EditUserAddress);
