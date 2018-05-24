import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import PostSectionComponent from '../component/PostSectionComponent';
import PostDetailComponent from '../component/PostDetailComponent';
import CreatePostComponent from "../component/CreatePostComponent";

class RouteComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={`/`}
                           render={(props) => (<PostSectionComponent/> )}/>

                    <Route exact path={`/:category`}
                           render={(props) => (<PostSectionComponent category={props.match.params.category}/> )}/>

                    <Route exact path={`/delete/posts/:id`}
                           render={(props) => (<PostSectionComponent deleteId={props.match.params.id}/> )}/>

                    <Route exact path={`/posts/:id`}
                           render={(props) => (<PostDetailComponent {...props} pageProps={props}/> )}/>

                    <Route exact path={`/post/edit`}
                           render={(props) => (<CreatePostComponent post={props.location}/> )}/>

                    <Route exact path={`/post/create`}
                           render={(props) => (<CreatePostComponent {...props}/> )}/>
                </Switch>
            </div>
        );
    }
}

export default RouteComponent;
