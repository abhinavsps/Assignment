import React, { Component } from 'react';
import { SafeAreaView,FlatList,Text,Alert,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import {getPosts} from '../../../Redux/Actions/Post_action'

 class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
          hideProgress:true
        }
    }


    render() {
      return  (
        <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            
        </SafeAreaView>
                          
      )
    }
}

function mapStateToProps(state) {
    const { hideProgress } = state.PostReducer;
    return { hideProgress}
}

export default connect(mapStateToProps, {getPosts})(Posts)