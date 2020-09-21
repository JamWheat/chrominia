import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import userService from '../../services/userService'
import "./App.css";
import AddImage from '../AddImage/AddImage'
import AddProject from '../AddProject/AddProject'
import AddSupply from '../AddSupply/AddSupply'
import AllSupplies from '../AllSupplies/AllSupplies'
import EditImage from '../EditImage/EditImage'
import EditProfile from '../EditProfile/EditProfile'
import EditProject from '../EditProject/EditProject'
import Gallery from '../Gallery/Gallery'
import LandingPage from '../LandingPage/LandingPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Projects from '../Projects/Projects'
import Users from '../Users/Users'
import ViewBrushes from '../ViewBrushes/ViewBrushes'
import ViewImage from '../ViewImage/ViewImage'
import ViewMaterials from '../ViewMaterials/ViewMaterials'
import ViewModels from '../ViewModels/ViewModels'
import ViewOther from '../ViewOther/ViewOther'
import ViewPaintAccs from '../ViewPaintAccs/ViewPaintAccs'
import ViewPaints from '../ViewPaints/ViewPaints'
import ViewTools from '../ViewTools/ViewTools'
import ViewWishList from '../ViewWishList/ViewWishList'

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleUpdateUser = async newUserData => {
    await userService.update(newUserData)
      .then(() => this.props.history.push('/editprofile'))
  }

  async componentDidMount() {
    const users = await userService.getAllUsers();
    this.setState({ users })
  }

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <main>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <Signup
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <Login
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route


            exact
            path="/addimage"
            render={({ history }) => (
              <AddImage
                user={this.state.user}
                history={history}
              />
            )}


          />
          <Route
            exact
            path="/addproject"

            render={({ history }) => (
              <AddProject
                history={history}
                user={this.state.user}
              />

            )}
          />
          <Route
            exact
            path="/addsupply"
            render={({history}) => (
              <AddSupply 
                history={history}
              />
            )}
          />
          <Route
            exact
            path="/allsupplies"
            render={() => (
              <AllSupplies />
            )}
          />
          <Route
            exact
            path="/editimage"
            render={({location, history}) => (
              <EditImage 
                location={location}
                history={history}
              />
            )}
          />
          <Route
            exact
            path="/editprofile"
            render={({ history }) => (
              <EditProfile
                history={history}
                handleUpdateUser={this.handleUpdateUser}
              />
            )}
          />
          <Route
            exact
            path="/editproject"
            render={() => (
              <EditProject />
            )}
          />
          <Route
            exact
            path="/gallery"
            render={() => (
              <Gallery />
            )}
          />
          <Route
            exact
            path="/profile/:id"

            render={({ match }) => authService.getUser() ?
              <ProfilePage
                user={this.state.user}
                match={match}
              />
              :
              <Redirect to='/login' />
            }

          />
          <Route
            exact
            path="/projectdetails/:id"
            render={({ match }) => (
              <ProjectDetails
                match={match}
              />
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Projects />
            )}
          />
          <Route
            exact
            path="/viewbrushes"
            render={() => (
              <ViewBrushes />
            )}
          />
          <Route
            exact
            path="/viewimage/:id"

            render={({match, history}) => (

              <ViewImage
                match={match}
                history={history}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/viewmaterials"
            render={() => (
              <ViewMaterials />
            )}
          />
          <Route
            exact
            path="/viewmodels"
            render={() => (
              <ViewModels />
            )}
          />
          <Route
            exact
            path="/viewother"
            render={() => (
              <ViewOther />
            )}
          />
          <Route
            exact
            path="/viewpaintaccs"
            render={() => (
              <ViewPaintAccs />
            )}
          />
          <Route
            exact
            path="/viewpaints"
            render={() => (
              <ViewPaints />
            )}
          />
          <Route
            exact
            path="/viewtools"
            render={() => (
              <ViewTools />
            )}
          />
          <Route
            exact
            path="/viewwishlist"
            render={() => (
              <ViewWishList />
            )}
          />
          <Route
            path="/users"
            render={() => (
              <Users />
            )}
          />
        </main>
      </>
    );
  }
}

export default App;
